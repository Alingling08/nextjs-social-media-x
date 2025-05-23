import React from "react";
import ImageComponent from "./ImageComponent";

const Post = () => {
  return (
    <div className="p-4 border-y-[1px] border-borderGray">
      {/* POST TYPE */}
      <div className="flex items-center gap-2 text-sm text-textGray font-bold mb-2">
        icon
        <span className="">Scorpio Hub resposted</span>
      </div>
      {/* POST CONTENT */}
      <div className="flex gap-4">
        {/* AVATAR */}
        <div className="">
          <ImageComponent src="general/avatar.png" alt="" w={100} h={100} tr={true} />
        </div>
        {/* CONTENT */}
        <div className="">
          {/* TOP */}
          <div className="">
            {/* INFO */}
            <div className=""></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
