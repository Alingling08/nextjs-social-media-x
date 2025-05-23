"use client";

import Feed from "@/components/Feed";
import ImageComponent from "@/components/ImageComponent";
import Share from "@/components/Share";
import Link from "next/link";

// import Image from "next/image";

export default function HomePage() {
  return (
    <div className="">
      <div className="px-4 pt-4 flex justify-between text-textGray font-bold border-b-[1px] border-borderGray">
        <Link href="" className="pb-3 flex items-center border-b-4 border-iconBlue">
          For You
        </Link>
        <Link href="" className="pb-3">
          Following
        </Link>
        <Link href="" className="pb-3">
          ReactJS
        </Link>
        <Link href="" className="pb-3">
          HTML
        </Link>
      </div>
      <Share />
      <Feed />
    </div>
  );
}
