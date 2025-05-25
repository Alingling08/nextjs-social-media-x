import React from "react";
import ImageComponent from "./ImageComponent";
import PostInfo from "./PostInfo";
import PostInteraction from "./PostInteraction";
import { imagekit } from "@/utils";

interface FileDetailsResponse {
  width: number;
  height: number;
  filePath: string;
  url: string;
  fileType: string;
  customMetaData?: { sensitive: boolean };
}

const Post = () => {
  // const getFileDetails = async (fileId: string): Promise<FileDetailsResponse> => {
  //   return new Promise((resolve, reject) => {
  //     imagekit.getFileDetails(fileId, function (error, result) {
  //       if (error) console.log(error);
  //       else resolve(result as FileDetailsResponse);
  //     });
  //   });
  // };

  // const fileDetails = await getFileDetails("6831b5dc432c4764168dec23");

  // console.log(fileDetails);

  return (
    <div className="p-4 border-y-[1px] border-borderGray">
      {/* POST TYPE */}
      <div className="flex items-center gap-2 text-sm text-textGray font-bold mb-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
          <path
            fill="#71767b"
            d="M4.75 3.79l4.603 4.3-1.706 1.82L6 8.38v7.37c0 .97.784 1.75 1.75 1.75H13V20H7.75c-2.347 0-4.25-1.9-4.25-4.25V8.38L1.853 9.91.147 8.09l4.603-4.3zm11.5 2.71H11V4h5.25c2.347 0 4.25 1.9 4.25 4.25v7.37l1.647-1.53 1.706 1.82-4.603 4.3-4.603-4.3 1.706-1.82L18 15.62V8.25c0-.97-.784-1.75-1.75-1.75z"
          />
        </svg>
        <span className="">Scorpio Hub resposted</span>
      </div>
      {/* POST CONTENT */}
      <div className="flex gap-4">
        {/* AVATAR */}
        <div className="">
          <ImageComponent src="general/avatar.png" alt="" w={100} h={100} tr={true} />
        </div>
        {/* CONTENT */}
        <div className="flex-1 flex flex-col gap-2">
          {/* TOP */}
          <div className="flex items-center justify-between gap-2">
            {/* INFO */}
            <div className="flex items-center gap-2 flex-wrap">
              <h1 className="text-md font-bold">Scorpio Hub</h1>
              <span className="text-textGray">1 day ago</span>
              <span className="text-textGray">@scorpiohub</span>
            </div>
            <PostInfo />
          </div>
          {/* TEXT & MEDIA */}
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <ImageComponent src="general/post.jpeg" alt="" w={600} h={600} />
          {/*  {fileDetails && <ImageComponent src={fileDetails.filePath} alt="" w={fileDetails.width} h={fileDetails.height} className={fileDetails.customMetadata?.sensitive ? "blur-lg" : ""}/>} */}
          <PostInteraction />
        </div>
      </div>
    </div>
  );
};

export default Post;
