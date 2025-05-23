import Image from "next/image";
import Link from "next/link";
import React from "react";
import { menuList } from "@/lib/menu";
import ImageComponent from "./ImageComponent";

const LeftBar = () => {
  return (
    <div className="h-screen sticky top-0 flex flex-col justify-between pt-2 pb-8">
      {/* LOGO MENU BUTTON */}
      <div className="flex flex-col gap-4 text-lg items-center xxl:items-start">
        {/* LOGO */}
        <Link href="/" className="p-2 rounded-full hover:bg-[#181818] ">
          <ImageComponent src="icons/scorpiohub.png" alt="logo" w={30} h={30} />
          {/* <Image src="/icons/scorpiohub.png" alt="logo" width={30} height={30} /> */}
        </Link>
        {/* MENU LIST */}
        <div className="flex flex-col gap-4">
          {menuList.map((item) => (
            <Link href={item.link} className="p-2 rounded-full hover:bg-[#181818] flex items-center gap-4" key={item.id}>
              <ImageComponent src={`${item.icon}`} alt={item.name} w={24} h={24} />
              <span className="hidden xxl:inline">{item.name}</span>
            </Link>
          ))}
        </div>
        {/* BUTTON */}
        <Link href="/" className=" bg-white text-black rounded-full font-bold w-12 h-12 flex items-center justify-center xxl:hidden">
          <ImageComponent src="icons/post.svg" alt="New Post" w={24} h={24} />
        </Link>
        <Link href="/" className="hidden xxl:block bg-white text-black rounded-full font-bold py-2 px-20">
          Post
        </Link>
      </div>
      {/* USER */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 relative rounded-full overflow-hidden">
            <ImageComponent src="/general/avatar.png" alt="Scorpio Hub" w={100} h={100} tr={true} />
          </div>
          <div className="hidden xxl:flex flex-col">
            <span className="font-bold">Scorpio Hub</span>
            <span className="text-sm text-textGray">@scorpioHub</span>
          </div>
        </div>
        <div className="hidden xxl:block cursor-pointer font-bold">...</div>
      </div>
    </div>
  );
};

export default LeftBar;
