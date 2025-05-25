import React from "react";
import ImageComponent from "./ImageComponent";

const PostInfo = () => {
  return (
    <div className="cursor-pointer w-4 h-4 relative">
      <ImageComponent src="icons/infoMore.svg" alt="" w={16} h={16} />
    </div>
  );
};

export default PostInfo;
