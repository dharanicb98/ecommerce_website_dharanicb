import React from "react";
import { Img } from "../Img";
import { Heading } from "../Heading";
import { Text } from "../Text";

export default function ProductDetails1({
    productTitle = "new product",
    dressDescription = "PPXOC Milkyway dress in pressed flowers",
    pricingText,
    ...props
}) {
    return (
        <div {...props} className={`${props.className} flex flex-col w-full`}>
            <div className="relative h-[398px] content-center self-stretch">
                <Img
                    src="img_hover_pic.png"
                    width={300}
                    height={398}
                    alt="Hover Image"
                    className="mx-auto h-[398px] w-full flex-1 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[398px] flex-1 content-center">
                    <Img
                        src="img_front_pic.png"
                        width={300}
                        height={398}
                        alt="Front Image"
                        className="mx-auto h-[398px] w-full flex-1 object-cover"
                    />
                    <Heading size="headingxs" as="p" className="absolute left-5 top-[9.60px] m-auto uppercase !text-black-900">
                        {productTitle}
                    </Heading>
                </div>
            </div>
            <div className="self-stretch bg-misc-white-0">
                <div className="mt-4 flex flex-col items-start">
                    <Heading size="headingmd" as="h6" className="uppercase">
                        {dressDescription}
                    </Heading>
                    <div className="flex items-center gap-6 self-stretch">
                        <Text size="textxs" as="p" className="self-end text-text-secondary_text underline">
                            <span>Sign in</span>
                            <span>&nbsp;or Create an account to see pricing</span>
                        </Text>
                        <Img src="img_favorite.svg" width={24} height={24} alt="Favorite Icon" className="h-[24px] w-[24px]" />
                    </div>
                </div>
            </div>
        </div>
    );
}
