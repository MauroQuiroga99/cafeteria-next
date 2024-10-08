"use client";
import { getImagePath } from "@/src/utils";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { useState } from "react";
import { TbPhotoPlus } from "react-icons/tb";

const ImageUpload = ({ image }: { image: string | undefined }) => {
  const [imageUrl, setImageUrl] = useState("");

  return (
    <CldUploadWidget
      onSuccess={(result, { widget }) => {
        if (result.event === "success") {
          widget.close();
          //@ts-ignore
          setImageUrl(result.info.secure_url);
        }
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
              {imageUrl && (
                <div className=" absolute inset-0 w-full h-full">
                  <Image
                    fill
                    style={{ objectFit: "contain" }}
                    src={imageUrl}
                    alt="Imagen del Producto"
                  />
                </div>
              )}
            </div>
          </div>
          {image && !imageUrl && (
            <div className=" space-y-2">
              <label htmlFor="">Imagen Actual:</label>
              <div className="relative w-64 h-64">
                <Image fill src={getImagePath(image)} alt="Imagen Producto" />
              </div>
            </div>
          )}
          <input
            type="hidden"
            name="image"
            defaultValue={imageUrl ? imageUrl : image}
            style={{ objectFit: "contain" }}
          />
        </>
      )}
    </CldUploadWidget>
  );
};

export default ImageUpload;
