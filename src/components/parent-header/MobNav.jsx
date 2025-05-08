"use client";
import Link from "next/link";
import { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { RiCloseLargeFill } from "react-icons/ri";
import { Arrow } from "../Arrow";
import { initialExpandState, handleExpand, navLinks } from "@/javascripts/mobNavLogic";

export default function MobNav() {
  const [visible, setVisible] = useState(false);
  const [expand, setExpand] = useState(initialExpandState);

  return (
    <div className="md:hidden">
      {/* Button to toggle visibility */}
      <button
        onClick={() => setVisible((prev) => !prev)}
        className="md:hidden"
        aria-label={visible ? "Close mobile navigation" : "Open mobile navigation"}
        aria-expanded={visible}
        aria-controls="mobile-navigation"
      >
        <TiThMenu size={30} className="mt-2" />
      </button>

      {/* Navigation container */}
      <div
        id="mobile-navigation"
        className={`bg-tint absolute top-0 left-0 z-50 flex w-full items-end justify-end transition-all duration-300 ease-in-out ${
          visible ? "h-[100dvh] pb-20" : "h-0 overflow-hidden pb-0"
        }`}
        role="dialog"
        aria-hidden={!visible}
      >
        {/* VKsoft text */}
        <span
          className={`absolute top-30 -left-25 rotate-90 text-8xl font-bold text-amber-300 ${
            visible ? "block" : "hidden"
          }`}
        >
          VKsoft
        </span>

        {/* Navigation */}
        <nav>
          <ul className="mr-3 flex flex-col justify-end gap-5">
            {navLinks.map((link, index) => (
              <li key={index} className="group">
                {/* Dropdown button */}
                <span className="flex items-center gap-4">
                  <Link
                    className="text-xl font-medium underline underline-offset-2"
                    href={link.href || "#"}
                    role="menuitem"
                  >
                    {link.title}
                  </Link>
                  {link.subLinks && (
                    <button
                      onClick={() => handleExpand(link.btn, setExpand)}
                      className="bg-accent-secondary rounded-full p-2"
                      aria-label={`Toggle submenu for ${link.title}`}
                      aria-expanded={expand[link.btn]}
                      aria-controls={`submenu-${index}`}
                    >
                      <Arrow
                        className={`transition-transform ${
                          expand[link.btn] ? "rotate-180" : "rotate-90"
                        }`}
                      />
                    </button>
                  )}
                </span>

                {/* Dropdown list */}
                {link.subLinks && (
                  <ul
                    id={`submenu-${index}`}
                    className={`mt-3 flex flex-col gap-3 overflow-hidden text-lg transition-all duration-300 ${
                      expand[link.btn] ? "max-h-screen" : "max-h-0"
                    }`}
                    role="menu"
                    aria-hidden={!expand[link.btn]}
                  >
                    {link.subLinks.map((subLink, subIndex) => (
                      <li key={subIndex}>
                        <Link
                          href={subLink.href}
                          className="hover:text-gray-700"
                          role="menuitem"
                        >
                          {subLink.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          {/* Close button */}
          <button
            onClick={() => setVisible(false)}
            aria-label="Close mobile navigation"
          >
            <RiCloseLargeFill className="absolute right-5 bottom-5" size={40} />
          </button>
        </nav>
      </div>
    </div>
  );
}
