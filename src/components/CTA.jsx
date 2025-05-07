"use client";
import { contactPageLink, enquiryLink, mobileNumberLink, whatsappLink } from "@/data/globalData";
import { ctaData } from "@/data/homepage-data/ctaSectionData";
import Link from "next/link";

export default function CTA({className}) {
  return (
    <section className={`py-16 px-6 text-center rounded-lg shadow-lg border-t border-gray-500 ${className}`}>
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold">{ctaData.heading}</h2>
        <p className="mt-4 text-lg">
          {ctaData.subheading}
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Link
            href={whatsappLink}
            className="bg-green-500 hover:bg-green-600 px-6 py-3 text-black rounded-lg shadow-md transition duration-300"
          >
            WhatsApp Us
          </Link>   
          <a
            href={mobileNumberLink}
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 text-white rounded-lg shadow-md transition duration-300"
          >
            Call Us
          </a>
          <Link
            href={contactPageLink}
            className="bg-white hover:bg-gray-200 px-6 py-3 text-black rounded-lg shadow-md transition duration-300"
          >
            Send Inquiry
          </Link>
        </div>
      </div>
    </section>
  );
}
