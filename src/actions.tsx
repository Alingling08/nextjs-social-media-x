"use server";

import { imagekit } from "@/utils";

export const shareAction = async (formData: FormData, settings: { type: "original" | "wide" | "square"; sensitive: boolean }) => {
  const file = formData.get("file") as File;
  //   const desc = formData.get("desc") as string;

  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  const transformation = `w-600, ${settings.type === "square" ? "ar-1-1" : settings.type === "wide" ? "ar-16-9" : ""}`;

  imagekit.upload(
    {
      file: buffer,
      fileName: file.name,
      folder: "/posts",
      transformation: {
        pre: transformation,
      },
      customMetadata: {
        sensitive: settings.sensitive,
      },
      //   tags: ["tag1"],
      //   token: authData.token,
      //   signature: authData.signature,
      //   expire: authData.expire,
    },
    function (err, result) {
      if (err) {
        console.log(err);
      } else if (result && result.url) {
        console.log(result);
        // console.log(
        //   imagekit.url({
        //     src: result.url,
        //     transformation: [{ height: 600, width: 600 }],
        //   })
        // );
      }
    }
  );
};
