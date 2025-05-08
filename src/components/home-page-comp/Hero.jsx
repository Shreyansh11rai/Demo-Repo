"use client"
import Image from "next/image";
import { AnchorBoldBtn } from "../Buttons";
import Wrapper from "../Container";
import { heroSectionData } from "@/data/homepage-data/heroSectionData";
import { contactPageLink } from "@/data/urls";

export default function Hero() {
  return (
    <Wrapper className={"border-b border-gray-300 py-5 md:py-12"}>
      {/* main container  */}
      <div className="flex flex-col gap-10 rounded-2xl border-gray-300 shadow-lg shadow-slate-300 py-8 drop-shadow-xl sm:p-12 lg:h-[70vh] md:border lg:grid lg:grid-cols-12">
        {/* left container  */}
        <div className="md:px col-span-7 flex flex-col items-center self-center">
          {/* capsule text  */}
          <div className="flex flex-wrap items-center gap-2 *:text-nowrap">
            {
              heroSectionData.capsuleheading.map((item,index)=>
            <span key={index} className="flex-1 rounded-full border border-gray-400 bg-yellow-200 px-5 py-1 text-center text-zinc-700">
              {item}
            </span>
              )
            }
          </div>
          {/* hero text  */}
          <h1 className="mt-4 text-center font-bold tracking-tight">
            {heroSectionData.mainHeading}
          </h1>
          <h2 className="mt-7 flex-1 text-center text-xl text-gray-600">
          {heroSectionData.subHeading}
          </h2>
          <AnchorBoldBtn text={heroSectionData.button.text} target={contactPageLink} className={"mt-5 px-8"} />
        </div>
        {/* ryt container  */}
        <div className="col-span-5 mt-5 self-center">
          <Image
            height={500}
            width={500}
            priority
            src={heroSectionData.image}
            alt="heroSectionImage"
          />
        </div>
      </div>
    </Wrapper>
  );
}
