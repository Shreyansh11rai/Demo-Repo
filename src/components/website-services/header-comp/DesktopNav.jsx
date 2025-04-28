import React from "react";
import Link from "next/link";
import ServicesDropdown from "./ServicesDropdown";

const DesktopNav = () => {
  return (
    <nav className="hidden flex-1 pl-4 lg:flex">
      <ul className="flex items-center text-sm text-gray-600 *:p-3">
        <li>
          <Link className="font-heading hover:text-black" href="/">
          Home
          </Link>
        </li>
        <li>
          <Link className="hover:text-black" href="/">
          About
          </Link>
        </li>
        {/* Dropdown Navigation */}
        <ServicesDropdown />
        <li>
          <Link className="hover:text-black" href="/">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default DesktopNav;
