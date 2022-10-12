import { useState } from "react";
import { CreateButton, FileInput, ImagesComment, StyledLabel } from "./HouseForm.styled";

export interface IImageFormData {
  images: FileList | null;
}

interface IImageForm {
  submitHandler: (data: IImageFormData) => void;
}

const ImageForm = ({ submitHandler }: IImageForm) => {
  const [images, setImages] = useState(null);

  const onSubmit = (e) => {
    e.preventDefault();
    submitHandler({ images });
  };

  const formChangeHandler = (e) => {
    // Files
    setImages(e.target.files);
  };

  return (
    <form onSubmit={onSubmit}>
      <StyledLabel>Images</StyledLabel>
      <ImagesComment>The first image will be the cover (max 6).</ImagesComment>
      <FileInput
        type="file"
        id="images"
        onChange={formChangeHandler}
        max="6"
        accept=".jpg,.png,.jpeg"
        multiple
        required
      />
      <CreateButton type="submit">Upload Images</CreateButton>
    </form>
  );
};

export default ImageForm;
