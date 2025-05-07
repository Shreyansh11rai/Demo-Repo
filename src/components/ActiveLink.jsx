"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx"; // Optional: helps with conditional classes

export default function NavLink({ href, label }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={clsx(
        "px-4 py-2 rounded transition",
        isActive ? "text-blue-600 font-semibold underline" : "text-gray-700 hover:text-blue-500"
      )}
    >
      {label}
    </Link>
  );
}
