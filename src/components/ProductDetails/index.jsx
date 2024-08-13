import React from "react";
import { Img } from "../Img";
import { Heading } from "../Heading";
import { Text } from "../Text";
import Image from "next/image";

export default function ProductDetails({ title, image, description }) {
    return (
      <div className="flex flex-col w-full shadow-md p-3 rounded-md">
        <div className="relative h-[398px] content-center">
          <Image
            src={image}
            width={300}
            height={398}
            alt="Front Image"
            className="h-[398px] w-full object-cover" // Ensures the image maintains aspect ratio
          />
        </div>
        <div className="flex flex-col items-start bg-misc-white-0">
          <Heading size="headingmd" as="h6" className="mt-4 uppercase">
            {title}
          </Heading>
          <div className="flex items-center justify-between gap-6">
            <div>
              <Text
                size="textxs"
                as="p"
                className="!text-text-secondary_text underline max-w-[200px] overflow-hidden whitespace-nowrap truncate"
              >
                {description}
              </Text>
            </div>
            <Img
              src={"/heart.svg"}
              width={24}
              height={24}
              alt="Favorite Icon"
              className="h-[24px] w-[24px]"
            />
          </div>
        </div>
      </div>
    );
  }
  
