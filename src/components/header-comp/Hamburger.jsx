"use client";
import { headerData } from "@/data/homepage-data/headerData";
import Link from "next/link";
import { useState } from "react";

export default function Hamburger() {
  const [mobNav, setMobNav] = useState(false);
  const [openService, setOpenService] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState({});

  const toggleSubMenu = (index) => {
    setOpenSubMenu((prev) => ({
      ...prev,
      [index]: !prev[index], // Toggle only the clicked submenu
    }));
  };
  return (
    <div className="lg:hidden">
      <div className="flex items-center">
        <button aria-label="menu-open" onClick={() => setMobNav(true)}>
          <svg
            className="h-8 w-12"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="black"
          >
            <path d="M3 4H21V6H3V4ZM9 11H21V13H9V11ZM3 18H21V20H3V18Z"></path>
          </svg>
        </button>
      </div>
      <nav
        {...(mobNav ? {} : { inert: true, "aria-hidden": true })}
        className={`absolute right-0 top-0 z-50 flex w-[100vw] cursor-pointer items-center justify-center bg-gray-200 transition-all duration-500 ease-out ${mobNav ? "h-[100dvh]" : "h-0 overflow-hidden"}`}
      >
        <ul className="flex w-[90%] flex-col items-end gap-4 font-medium *:w-full *:border-b *:border-gray-700 *:pr-2 *:text-right *:text-xl">
          {headerData.navigation.map((item, index) => {
            !item.dropdown && (
              // if dropdown true isnt found it'll render normal link
              <li key={index}>
                <Link href={item.href}>{item.name}</Link>
              </li>
            );
            // if dropdown true is found it'll render dropdown
            console.log(item.dropdown);
            
            item.dropdown == "grouped" && (
              <li className="flex flex-col items-end" key={index}>
                {/* btn to open submenu  */}
                <button
                  onClick={() => setOpenService(!openService)}
                  className="flex w-full items-center justify-between focus:outline-none"
                >
                  <svg
                    className={`transition-300 h-6 transition-all ${
                      openService ? "" : "rotate-180"
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
                  </svg>
                  {item.name}
                </button>
                {/* main submenu container*/}
                <ul
                  className={`main-submenu overflow-hidden transition-all duration-300 ${
                    openService
                      ? "max-h-[50vh] opacity-100"
                      : "max-h-0 opacity-0"
                  } my-2 flex w-full flex-col items-end gap-3 overflow-y-auto rounded-md px-2 text-lg text-gray-700`}
                >
                  {/* array of nav list  */}
                  {item.dropdownData.map((item, index) => (
                    // one submenu container
                    <li
                      key={index}
                      className="flex w-full flex-col items-end gap-2"
                    >
                      <button
                        onClick={() => toggleSubMenu(index)}
                        className="flex w-full items-center justify-between focus:outline-none"
                      >
                        <svg
                          className={`transition-300 h-6 transition-all ${
                            openSubMenu[index] ? "" : "rotate-180"
                          }`}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
                        </svg>
                        {item.title}
                      </button>
                      <ul
                        className={`overflow-hidden transition-all duration-300 ${
                          openSubMenu[index]
                            ? "max-h-max opacity-100"
                            : "max-h-0 opacity-0"
                        } flex flex-col items-end gap-1 text-base font-normal`}
                      >
                        {item.links.map((item, index) => (
                          <li className="" key={index}>
                            <a
                              href={
                                item.href
                                  ? item.href
                                  : item
                                      .split(" ")
                                      .join("-")
                                      .toLocaleLowerCase()
                              }
                              className="flex items-center justify-between gap-3"
                            >
                              <svg
                                className="h-6"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                              >
                                <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path>
                              </svg>
                              {item.name ? item.name : item}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>
        <button
          onClick={() => setMobNav(false)}
          className="absolute bottom-5 right-5 text-xl underline"
        >
          <svg
            className="h-10"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M10.5859 12L2.79297 4.20706L4.20718 2.79285L12.0001 10.5857L19.793 2.79285L21.2072 4.20706L13.4143 12L21.2072 19.7928L19.793 21.2071L12.0001 13.4142L4.20718 21.2071L2.79297 19.7928L10.5859 12Z"></path>
          </svg>
        </button>
      </nav>
    </div>
  );
}
