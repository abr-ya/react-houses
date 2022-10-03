import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

// Upload File to Firestore
export const uploadFile = async (file, prefix = "load", folder = "images") => {
  return new Promise((resolve, reject) => {
    const storage = getStorage();
    const fileName = `${prefix}_${+new Date()}_${file.name}`;
    const storageRef = ref(storage, `${folder}/${fileName}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        reject(error);
      },
      () => {
        // Handle successful uploads on complete
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          resolve(downloadURL);
        });
      },
    );
  });
};
