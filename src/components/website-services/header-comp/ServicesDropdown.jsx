"use client";
import React, { useCallback, useState } from "react";
import CenterDropdown from "@/components/website-services/header-comp/CenterDropdown";
import Container from "@/components/website-services/Container";
import navlist from "@/lib/nav-list";
import Image from "next/image";
import Link from "next/link";

const HandleList = () => {
  const [activeList, setActiveList] = useState(false);
  const handlelist = useCallback((index) => {
    setActiveList(index);
  }, []);
  return (
    <li className="group">
      {/* btn to hover  */}
      <button className="flex items-center hover:text-black focus:outline-none">
        <svg
          className="h-6"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
        </svg>
        Services
      </button>

      {/* nav container  */}
      <div className="top-13 invisible absolute left-0 z-50 w-full scale-75 rounded-lg pt-10 opacity-0 transition-all duration-200 group-hover:visible group-hover:scale-100 group-hover:opacity-100">
        <Container className={"bg-gray-300 max-w-[70rem] rounded-2xl md:px-10 md:py-5 shadow-2xl"}>
          <div className="grid w-[100%] grid-cols-12 rounded-3xl">
            {/* Left Navigation List */}
            <ul className="col-span-4 flex h-[25rem] flex-col gap-3 rounded-s-md border-r-2 border-gray-300 bg-white p-6">
              {navlist.map((menu, index) => (
                <li 
                key={index + "btn"}
                >
                <Link
                  onMouseEnter={() => handlelist(index)}
                  href={"/"}
                  className="flex w-full items-center justify-between hover:text-black focus:outline-none"
                >
                  <svg
                    className="h-7 -rotate-90"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
                  </svg>
                  {menu.title}
                </Link>
                </li>
              ))}
            </ul>
            {/* Center Content */}
            <CenterDropdown navlist={navlist} activeList={activeList} />
            {/* image container  */}
            <div className="col-span-4 ml-2 overflow-hidden rounded-lg bg-white h-[25rem]">
              <Image
                height={400}
                width={300}
                src="/website-services/nav-side.jpeg"
                alt="Service Image"
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </Container>
      </div>
    </li>
  );
};

export default HandleList;
