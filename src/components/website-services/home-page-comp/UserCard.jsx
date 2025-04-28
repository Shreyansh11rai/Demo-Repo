"use client";
import Image from "next/image";

export default function UserCard({ name, image, comment, post }) {
  return (
    <div className="relative flex min-w-72 flex-col items-start rounded-lg border border-gray-300 p-5 shadow-lg overflow-hidden group">
      {/* Default Background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-yellow-100 to-blue-100 transition-opacity duration-500 opacity-100 group-hover:opacity-0 bg-blue-400"></div>

      {/* Hover Background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400 to-blue-400 transition-opacity duration-500 opacity-0 group-hover:opacity-100"></div>

      {/* Content Wrapper */}
      <div className="relative z-10">
        {/* User Image */}
        <div className="h-12 w-12 overflow-hidden rounded-full">
          <Image
            src={"/website-services/brand_vksoft.png"}
            height={80}
            width={80}
            className="h-full w-full object-cover"
            alt={`${name}'s image`}
          />
        </div>

        {/* User Comment */}
        <span className="gapt-2 text-sm text-gray-700">{comment}</span>

        {/* User Name */}
        <span className="gapt-1 text-base font-semibold">{name}</span>

        {/* User Post */}
        <span className="gapt-1 text-sm text-gray-500">{post}</span>
      </div>
    </div>
  );
}
