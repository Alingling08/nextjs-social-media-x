"use client";
import { Image, ImageKitProvider } from "@imagekit/next";

type ImageType = {
  src: string;
  w: number;
  h: number;
  alt: string;
  className?: string;
  tr?: boolean;
};

const urlEndpoint = process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT;
console.log(urlEndpoint);

const ImageComponent = ({ src, w, h, alt, className, tr }: ImageType) => {
  return (
    <ImageKitProvider urlEndpoint={urlEndpoint}>
      <Image src={src} alt={alt} width={w} height={h} {...(tr ? { transformation: [{ width: w, height: h }] } : "")} className={className} />
    </ImageKitProvider>
  );
};

export default ImageComponent;
