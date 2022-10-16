import { useEffect, useState } from "react";
import { Container, Flex, GreenLink, Main, PageHeader, SectionHeader, SmallButton } from "components/Common.styled";
import { useParams } from "react-router-dom";
import { getDoc, doc, updateDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { db } from "services/firebase";
import { HouseDetail, ImageForm, Loader, PinOnMapLeaflet, SliderSwiper6, SortingList } from "components";
import { IHouse } from "interfaces";
import { IImageFormData } from "components/HouseForm/ImageForm";
import { toast } from "react-toastify";
import { uploadFile } from "services/firestore";
import { dataURIToBlob, resizeImage } from "utils/images";
import { ControlBlock, SliderWrapper } from "./House.styled";

const House = () => {
  const [house, setHouse] = useState<IHouse | null>(null);
  const [loading, setLoading] = useState(true);
  const [imgLoading, setImgLoading] = useState(false);
  const [addImgOn, setAddImgOn] = useState(false);
  const [sortImgOn, setSortImgOn] = useState(false);
  const [imgOrder, setImgOrder] = useState<string[]>(null);

  const { id } = useParams();
  const auth = getAuth();
  const isMy = auth.currentUser?.uid && auth.currentUser?.uid === house?.userRef;
  const hasImages = house?.imageUrls;
  console.log("house, isMy?:", isMy);

  useEffect(() => {
    const getHouse = async () => {
      const docRef = doc(db, "listings", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setHouse(docSnap.data() as IHouse);
        setImgOrder(docSnap.data().imageUrls);
        setLoading(false);
      }
    };

    getHouse();
  }, [id]);

  const newImagesHandler = async ({ images }: IImageFormData) => {
    console.log("Добавляем файлы: ", images);
    // copy-paste ?! AddHouse ~55
    let newImageUrls = null;
    if (images) {
      setImgLoading(true);
      newImageUrls = await Promise.all(
        [...images].map(async (image) => {
          if (image.size > 200000) {
            const image2 = await resizeImage({ image, maxSize: 800 });
            const newFile = dataURIToBlob(image2);
            console.log("resize to:", newFile);
            return uploadFile(newFile, id);
          } else {
            return uploadFile(image, id);
          }
        }),
      ).catch((err) => {
        setImgLoading(false);
        console.log("Images uploaded error: ", err);
        toast.error("Images uploaded error!");
        return;
      });
    }

    if (newImageUrls) {
      const imageUrls = house?.imageUrls ? [...newImageUrls, ...house?.imageUrls] : newImageUrls;
      // update house
      const docRef = doc(db, "listings", id);
      // todo: what about error??
      await updateDoc(docRef, { imageUrls });
      setImgLoading(false);
      setAddImgOn(false);
      toast.success(`Image(s) added to ${house.name} card!`);
      setHouse((prev) => ({ ...prev, imageUrls }));
      setImgOrder(imageUrls);
    }
  };

  const orderSaveHandler = async () => {
    if (imgOrder && imgOrder.length) {
      setImgLoading(true);
      const docRef = doc(db, "listings", id);
      // todo: what about error??
      await updateDoc(docRef, { imageUrls: imgOrder });
      setImgLoading(false);
      setAddImgOn(false);
      toast.success(`Images sorted in ${house.name} card!`);
      setSortImgOn(false);
      setHouse((prev) => ({ ...prev, imageUrls: imgOrder }));
    }
  };

  const orderCancelHandler = () => {
    // to do вернуть порядок?
    setSortImgOn(false);
  };

  const renderImagesBlock = () => {
    if (imgLoading) return <Loader />;

    if ((isMy && !hasImages) || addImgOn)
      return (
        <Container>
          <SectionHeader>{addImgOn ? "Add more Images:" : "No images, but you can add some..."}</SectionHeader>
          <ImageForm submitHandler={newImagesHandler} />
        </Container>
      );

    if (sortImgOn)
      return (
        <Container>
          <SectionHeader>Sort Images</SectionHeader>
          <SortingList list={imgOrder} saver={setImgOrder} />
          <Flex>
            <SmallButton onClick={orderSaveHandler}>Save Order</SmallButton>
            <SmallButton onClick={orderCancelHandler} color="orange">
              Cancel
            </SmallButton>
          </Flex>
        </Container>
      );

    // изображений нет и не хозяин дома
    if (!hasImages) return null;

    return (
      <SliderWrapper>
        {isMy && (
          <ControlBlock>
            <SmallButton onClick={() => setAddImgOn(true)}>Add Images</SmallButton>
            <SmallButton onClick={() => setSortImgOn(true)} color="orange">
              Sort Images
            </SmallButton>
          </ControlBlock>
        )}
        <SliderSwiper6 imgArray={house.imageUrls} height={300} />
      </SliderWrapper>
    );
  };

  const renderMain = () => {
    if (loading) return <Loader />;

    return (
      <>
        {renderImagesBlock()}
        <Container>
          <HouseDetail data={house} />
          <SectionHeader>Location</SectionHeader>
        </Container>
        <PinOnMapLeaflet
          size={{ height: "400px", width: "100%" }}
          coord={house.geolocation}
          pinTitle={house.location}
        />
        {!isMy && <GreenLink to={`/contact/${house.userRef}?name=${house.name}`}>Contact Landlord</GreenLink>}
      </>
    );
  };

  return (
    <>
      <PageHeader>House</PageHeader>
      <Main>{renderMain()}</Main>
    </>
  );
};

export default House;
