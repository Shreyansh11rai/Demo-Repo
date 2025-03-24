import Link from "next/link";
import { ArrowRight } from "./Arrow";

export const BoldBtn = ({ text, className, target = "/" }) => {
  return (
    <Link
    href={target}
      className={`btn rounded-lg border bg-primaryclr px-3 py-2 text-sm text-black transition-all duration-200 hover:scale-95 hover:border-blue-600 hover:bg-white hover:text-blue-600 sm:px-5 sm:py-3 sm:text-base md:text-lg lg:px-7 ${className}`}
    >
      {text}
    </Link>
  );
};

export const LightBtn = ({ text, className, target = "/" }) => (
  <Link
  href={target}
  className={`btn rounded-lg border-2 border-black px-3 py-2 transition-all duration-200 hover:scale-95 hover:bg-black hover:text-white sm:px-5 sm:py-3 lg:px-7 ${className}`}
  >
    {text}
  </Link>
);

export const LinkBtn = ({ text, target = "/", className }) => (
  <Link
    href={target}
    className={`btn rounded-lg border-2 border-yellow-300 px-3 py-2 transition-all duration-200 hover:scale-95 hover:bg-black hover:text-white sm:px-5 sm:py-3 lg:px-7 flex justify-between items-center font-medium ${className}`}
  >
    {text} 
    <ArrowRight className={"btn h-5 sm:h-7 md:h-9"}/>
  </Link>
);
