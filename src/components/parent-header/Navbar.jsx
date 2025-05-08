"use client";
import Link from "next/link";
import { useState } from "react";
import { CiMenuKebab } from "react-icons/ci";
import {
  companyLinks,
  digitalMarketingLinks,
  headerLinks,
  productsLinks,
  supportLinks,
  websiteServicesLinks,
} from "@/constants/urls";
import { ArrowForward } from "../Arrow";

export default function Navbar() {
  const [isopen, setopen] = useState(false);

  return (
    <nav className="hidden flex-1 md:flex">
      <ul className="flex items-center md:gap-4 lg:gap-8">
        {/* Services Dropdown */}
        <li className="group relative">
          <Link
            href={headerLinks.Services.href}
            className="hover:underline"
            aria-haspopup="true"
            aria-expanded={isopen}
          >
            {headerLinks.Services.name}
          </Link>
          <div
            className={`absolute z-50 min-w-max overflow-hidden transition-all duration-200 ${
              isopen ? "h-auto py-6" : "h-0"
            } group-hover:h-auto group-hover:py-6`}
            role="menu"
            aria-hidden={!isopen}
          >
            <div className="relative flex gap-8 border-2 border-gray-300 bg-gray-100 py-6 shadow-lg shadow-gray-400 px-6">
              {/* Services Links */}
              <ul className="flex flex-col gap-4" role="menu">
                <li>
                  <Link
                    href="/website-services"
                    className="group flex items-center gap-2 text-lg font-medium hover:text-gray-700"
                    role="menuitem"
                  >
                    Website Services
                    <ArrowForward classname={"-rotate-45"} />
                  </Link>
                </li>
                {websiteServicesLinks.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} role="menuitem">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul
                className="border-accent-secondary flex flex-col gap-4 border-l-2 pl-6"
                role="menu"
              >
                {/* Digital Marketing Links */}
                <li>
                  <Link
                    href="/digital-marketing"
                    className="flex items-center gap-2 text-lg font-medium hover:text-gray-700"
                    role="menuitem"
                  >
                    Digital Marketing
                    <ArrowForward classname={"-rotate-45"} />
                  </Link>
                </li>
                {digitalMarketingLinks.map((item, index) => (
                  <li key={index}>
                    <Link href={item.href} role="menuitem">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </li>

        {/* Products Dropdown */}
        <li className="group relative">
          <Link
            href={headerLinks.Products.href}
            className="hover:text-gray-700"
            aria-haspopup="true"
            aria-expanded={isopen}
          >
            {headerLinks.Products.name}
          </Link>
          <div
            className={`absolute z-50 w-80 overflow-hidden transition-all duration-200 ${
              isopen ? "h-auto pt-6" : "h-0"
            } group-hover:h-auto group-hover:pt-6`}
            role="menu"
            aria-hidden={!isopen}
          >
            <ul className="w-full border-2 border-gray-300 bg-gray-100 px-4 py-3 shadow-lg shadow-gray-400 flex flex-col gap-2">
              {productsLinks.map((item, index) => (
                <li key={index}>
                  <Link href={item.href} className="hover:text-gray-700" role="menuitem">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </li>

        {/* Support Dropdown */}
        <li className="group relative">
          <Link
            href={headerLinks.Support.href}
            className="hover:text-gray-700"
            aria-haspopup="true"
            aria-expanded={isopen}
          >
            {headerLinks.Support.name}
          </Link>
          <div
            className={`absolute z-50 w-80 overflow-hidden transition-all duration-200 ${
              isopen ? "h-auto pt-6" : "h-0"
            } group-hover:h-auto group-hover:pt-6`}
            role="menu"
            aria-hidden={!isopen}
          >
            <ul className="w-full border-2 border-gray-300 bg-gray-50 px-4 py-3 shadow-lg shadow-gray-400 flex flex-col gap-2">
              {supportLinks.map((item, index) => (
                <li key={index}>
                  <Link href={item.href} className="hover:text-gray-700" role="menuitem">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </li>

        {/* More Dropdown */}
        <li className="group relative">
          <button
            className="flex items-center"
            aria-haspopup="true"
            aria-expanded={isopen}
            aria-label="More options"
          >
            <CiMenuKebab className="rotate-90" size={30} />
          </button>
          <div
            className={`absolute z-50 w-60 overflow-hidden transition-all duration-200 ${
              isopen ? "h-auto pt-6" : "h-0"
            } group-hover:h-auto group-hover:pt-6`}
            role="menu"
            aria-hidden={!isopen}
          >
            <ul className="w-full border-2 border-gray-300 bg-gray-50 px-4 py-3 shadow-lg shadow-gray-400 flex flex-col gap-2">
              {companyLinks.map((item, index) => (
                <li key={index}>
                  <Link href={item.href} className="hover:text-gray-700" role="menuitem">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export function Navbar2() {
  return (
    <nav className="hidden flex-1 justify-end md:flex">
      <ul className="flex items-center gap-12">
        <li>
          <Link href={headerLinks.Support.href} className="hover:text-gray-700">
            {headerLinks.Support.name}
          </Link>
        </li>
      </ul>
    </nav>
  );
}
