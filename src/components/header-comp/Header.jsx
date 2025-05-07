"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Wrapper from "@/components/Container";
import Desktopnav from "./DesktopNav";
import { BoldBtn} from "@/components/Buttons";
import Hamburger from "./Hamburger";
import Link from "next/link";
import { headerData } from "@/data/homepage-data/headerData";
import Image from "next/image";
const Header = () => {
  return (
    <Wrapper>
      <header className="flex items-center justify-between border-b border-gray-300 py-2">
        {/* logo */}
        <div className="logo flex items-center">
          <Link
            href={headerData.logo.href}
            className="text-xl font-bold sm:text-2xl flex items-center gap-3"
          >
            {headerData.logo.image && 
            <Image src={headerData.logo.image} height={headerData.logo.height} width={headerData.logo.width} alt="logo-image"></Image>
            }
            {headerData.logo.name && headerData.logo.name}
          </Link>
        </div>
        {/* desktop navigation */}
        <Desktopnav />
        {/* action btn  */}
        <div className="flex items-center gap-5">
          <BoldBtn
            text={headerData.button.text}
            target={headerData.button.href}
          />
          {/* hamburger */}
          {/* <Hamburger /> */}
        </div>
      </header>
    </Wrapper>
  );
};
export const Header2 = () => {
  const router = useRouter();
  return (
    <Wrapper>
      <header className="flex items-center justify-between border-b border-gray-300 py-2">
        {/* logo */}
        <div className="logo flex items-center gap-5">
          <Link
            href={headerData.logo.href}
            className="text-xl font-bold sm:text-2xl"
          >
            {headerData.logo.name}
          </Link>
          <button
            onClick={() => router.back()}
            className="text-blue-600 underline hover:text-blue-800"
          >
            ← Go Back
          </button>
        </div>
        {/* action btn  */}
        <div className="flex items-center gap-5">
          <BoldBtn
            text={headerData.button.text}
            target={headerData.button.href}
          />
          {/* hamburger */}
          <Hamburger />
        </div>
      </header>
    </Wrapper>
  );
};

export default Header;
