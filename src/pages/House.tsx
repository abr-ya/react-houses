import { useEffect, useState } from "react";
import { Container, GreenLink, Main, PageHeader, SectionHeader } from "components/Common.styled";
import { useParams } from "react-router-dom";
import { getDoc, doc, updateDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { db } from "services/firebase";
import { HouseDetail, ImageForm, Loader, PinOnMapLeaflet, SliderSwiper6 } from "components";
import { IHouse } from "interfaces";
import { IImageFormData } from "components/HouseForm/ImageForm";
import { toast } from "react-toastify";
import { uploadFile } from "services/firestore";
import { dataURIToBlob, resizeImage } from "utils/images";

const House = () => {
  const [house, setHouse] = useState<IHouse | null>(null);
  const [loading, setLoading] = useState(true);
  const [imgLoading, setImgLoading] = useState(false);

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
        setLoading(false);
      }
    };

    getHouse();
  }, [id]);

  const newImagesHandler = async ({ images }: IImageFormData) => {
    console.log("Добавляем файлы: ", images);
    // copy-paste ?! AddHouse ~55
    let imageUrls = null;
    if (images) {
      setImgLoading(true);
      imageUrls = await Promise.all(
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

    if (imageUrls) {
      // update house
      const docRef = doc(db, "listings", id);
      // todo: what about error??
      await updateDoc(docRef, { imageUrls });
      setImgLoading(false);
      toast.success(`Image(s) added to ${house.name} card!`);
      setHouse((prev) => ({ ...prev, imageUrls }));
    }
  };

  const renderImagesBlock = () => {
    if (imgLoading) return <Loader />;

    if (isMy && !hasImages)
      return (
        <Container>
          <SectionHeader>No images, but you can add some...</SectionHeader>
          <ImageForm submitHandler={newImagesHandler} />
        </Container>
      );

    if (!hasImages) return null;

    return <SliderSwiper6 imgArray={house.imageUrls} height={300} />;
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
