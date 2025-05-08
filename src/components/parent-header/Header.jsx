import Link from "next/link";
import Wrapper from "@/components/Wrapper2";
import HeaderSearch from "./HeaderSearch";
import Logo from "./Logo";
import MobNav from "./MobNav";
import { TiThMenu } from "react-icons/ti";
import Navbar, { Navbar2 } from "./Navbar";
import { contactUsUrl } from "@/constants/urls"; // Corrected import

export function ParentHeader() {
  return (
    <header className="bg-gray-200">
      <Wrapper className="flex items-center justify-between">
        {/* logo */}
        <Logo />
        {/* navbar comp */}
        <Navbar />
        {/* right part */}
        <div className="flex items-center md:gap-2 lg:gap-8">
          <HeaderSearch />
          <Link href={contactUsUrl.href} className="primarylink mr-3 sm:mr-0">
            {contactUsUrl.name}
          </Link>
          <MobNav />
        </div>
      </Wrapper>
    </header>
  );
}

// for child website
export function ParentHeader2() {
  return (
    <Wrapper>
      <header className="relative flex items-center justify-between py-1 border-b-2 border-gray-300">
        {/* logo */}
        <Logo />
        {/* navbar comp */}
        <div className="flex gap-4 md:gap-8">
          <Navbar2 />
          <Link href={contactUsUrl.href} className="primarylink">
            {contactUsUrl.name}
          </Link>
          <HeaderSearch />
          <div>
            <button className="md:hidden">
              <TiThMenu size={30} />
            </button>
          </div>
        </div>
      </header>
    </Wrapper>
  );
}
