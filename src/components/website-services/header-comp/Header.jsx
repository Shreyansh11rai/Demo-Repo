import React from "react";
import Wrapper from "../Container";
import Desktopnav from "./DesktopNav";
import { BoldBtn, LightBtn } from "../Buttons";
import Hamburger from "./Hamburger";
import Link from "next/link";

const Header = () => {
  return (
    <Wrapper>
      <header className="flex items-center justify-between border-b border-gray-300 py-2">
        {/* logo */}
        <div className="logo flex items-center gap-3">
          <img
            className="h-12 w-12 object-cover sm:h-16 sm:w-16"
            src="/website-services/brand_vksoft.png"
            alt="brand_logo"
          />
          <Link href={"/"} className="relative -left-7 text-xl font-bold tracking-wide sm:text-2xl md:text-3xl">
            VKSoft
          </Link>
        </div>
        {/* desktop navigation */}
        <Desktopnav />
        {/* action btn  */}
        <div className="flex items-center gap-5">
          <BoldBtn text={"Get quote"} />
          <LightBtn text={"Have Questions ?"} className={"hidden lg:block"} />
          {/* hamburger */}
          <Hamburger/>
        </div>
      </header>
    </Wrapper>
  );
};

export default Header;
