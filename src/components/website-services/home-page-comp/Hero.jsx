"use client"
import Image from "next/image";
import { BoldBtn } from "../Buttons";
import Wrapper from "../Container";

export default function Hero() {
  return (
    <Wrapper className={"border-b border-gray-300 py-5 md:py-12"}>
      {/* main container  */}
      <div className="flex flex-col gap-10 rounded-2xl border-gray-300 shadow-lg shadow-slate-300 py-8 drop-shadow-xl sm:p-12 lg:h-[70vh] md:border lg:grid lg:grid-cols-12">
        {/* left container  */}
        <div className="md:px col-span-7 flex flex-col items-center self-center">
          {/* capsule text  */}
          <div className="flex flex-wrap items-center gap-2 *:text-nowrap">
            <span className="flex-1 rounded-full border border-gray-400 bg-yellow-200 px-5 py-1 text-center text-zinc-700">
              Innovative Websites
            </span>
            <span className="flex-1 rounded-full border border-gray-400 bg-yellow-200 px-5 py-1 text-center text-zinc-700">
              Secure Hosting
            </span>
            <span className="flex-1 rounded-full border border-gray-400 bg-yellow-200 px-5 py-1 text-center text-zinc-700">
              Scalable E-commerce
            </span>
          </div>
          {/* hero text  */}
          <h1 className="mt-4 text-center font-bold tracking-tight">
            Transform Your Online Presence
          </h1>
          <h2 className="mt-7 flex-1 text-center text-xl text-gray-600">
            Let’s Build Your Digital Success Today!
          </h2>
          <BoldBtn text={"Call now"} className={"mt-5 px-8"} />
        </div>
        {/* ryt container  */}
        <div className="col-span-5 mt-5 self-center">
          <Image
            height={500}
            width={500}
            priority
            src={"website-services/hero_2.svg"}
            alt="heroSectionImage"
          />
        </div>
      </div>
    </Wrapper>
  );
}
