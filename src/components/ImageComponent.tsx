"use client";
import { Image } from "@imagekit/next";

type ImageType = {
  src: string;
  w: number;
  h: number;
  alt: string;
  className?: string;
  tr?: boolean;
};

const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;
const ImageComponent = ({ src, w, h, alt, className, tr }: ImageType) => {
  return (
    <Image
      urlEndpoint={urlEndpoint} // New prop
      src={src}
      alt={alt}
      width={w}
      height={h}
      {...(tr ? { transformation: [{ width: w, height: h }] } : "")}
      className={className}
    />
  );
};

export default ImageComponent;
