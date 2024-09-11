"use client";
import { CldUploadWidget } from "next-cloudinary";
import { TbPhotoPlus } from "react-icons/tb";

const ImageUpload = () => {
  return (
    <CldUploadWidget
      onSuccess={(result, { widget }) => {
        console.log(result);
      }}
      uploadPreset="e4trw1cn"
      options={{ maxFiles: 1 }}
    >
      {({ open }) => (
        <>
          <div onClick={() => open()} className=" space-y-2">
            <label className="text-slate-800"></label>
            <div className=" relative cursor-pointer hover:opacity-70 transition p-10 border-neutral-300 flex flex-col items-center justify-center gap-4 text-neutral-600 bg-slate-100">
              <TbPhotoPlus size={50} />
              <p className="text-lg font-semibold">Agregar Imagen</p>
            </div>
          </div>
        </>
      )}
    </CldUploadWidget>
  );
};

export default ImageUpload;
