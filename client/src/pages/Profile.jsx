import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../firebase";

const Profile = () => {
  const { currentUser } = useSelector((state) => state.user);
  const fileRef = useRef(null);
  const [file, setFile] = useState(undefined);
  const [filePerc, setFilePerc] = useState(0);
  const [fileUploadError, setFileUploadError] = useState(false);
  const [formData, setFormData] = useState({});

  //console.log(formData);

  useEffect(() => {
    if (file) {
      handleFileUpload(file);
    }
  }, [file]);

  const handleFileUpload = (file) => {
    const storage = getStorage(app);
    const filename = new Date().getTime() + file.name;
    const storageRef = ref(storage, filename);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setFilePerc(Math.round(progress));
      },
      (error) => {
        setFileUploadError(true);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) =>
          setFormData({ ...formData, avatar: downloadURL })
        );
      }
    );
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-center text-green-500 font-bold text-3xl">Profile</h1>
      <form className="flex flex-col gap-4">
        <input
          onChange={(e) => setFile(e.target.files[0])}
          type="file"
          ref={fileRef}
          hidden
          accept="image/*"
        />
        <img
          onClick={() => fileRef.current.click()}
          className="rounded-full h-24 w-24 self-center mt-5 cursor-pointer"
          src={formData.avatar || currentUser.avatar}
          alt="profile-picture"
        />
        <p className="text-center">
          {fileUploadError ? (
            <span className="text-red-700">
              Error occured, can't upload image
            </span>
          ) : filePerc > 0 && filePerc < 100 ? (
            <span className="text-slate-700">{`Uploading ${filePerc}%`}</span>
          ) : filePerc === 100 ? (
            <span className="text-green-700">Image Uploaded Successfully!</span>
          ) : (
            ""
          )}
        </p>
        <input
          type="text"
          placeholder="username"
          id="username"
          className="border p-3 rounded-lg bg-slate-200"
        />
        <input
          type="email"
          placeholder="email"
          id="email"
          className="border p-3 rounded-lg bg-slate-200 hover:opacity-80"
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          className="border p-3 rounded-lg bg-slate-200"
        />
        <button className="bg-slate-700 p-3 uppercase text-white font-semibold rounded-lg hover:opacity-80 disabled:60">
          update
        </button>
      </form>
      <div className="flex justify-between mt-6">
        <span className="text-red-700 font-semibold cursor-pointer">
          Sign out
        </span>
        <span className="text-red-700 font-semibold cursor-pointer">
          Delete account
        </span>
      </div>
    </div>
  );
};

export default Profile;
