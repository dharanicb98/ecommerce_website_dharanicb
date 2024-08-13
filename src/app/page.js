'use client'
import Header from "@/components/Header";
import ProductListingSection from "@/components/ProductListingSection";
import { Text } from "@/components/Text";

export default function WebPLPHiddenFilterPage() {
    return (
        <>
        <div className="flex w-full flex-col gap-[60px] bg-misc-white-0 sm:gap-[30px]">
            <Header />
            <div className="flex flex-col items-center gap-[72px] md:gap-[54px] sm:gap-9">
                <div className="container-xs flex flex-col items-center px-14 md:px-5">
                    <div className="flex w-[64%] flex-col items-center gap-4 md:w-full">
                        <Text size="text2xl" as="p" className="uppercase tracking-[1.00px] !text-text-text">
                            DISCOVER OUR PRODUCTS
                        </Text>
                        <Text size="textxl" as="p" className="self-stretch text-center leading-10 !text-text-text">
                            Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
                        </Text>
                    </div>
                </div>
            </div>
            <ProductListingSection />
        </div>
        </>
    );
}
