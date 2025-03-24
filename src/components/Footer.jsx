"use client";
import Link from "next/link";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-black">
      {/* Footer Container */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 py-12 md:grid-cols-2 lg:grid-cols-4">
        {/* About Section */}
        <div>
          <h3 className="mb-3 text-lg font-semibold">About Us</h3>
          <p className="">
            We provide top-notch IT solutions, including website development,
            UI/UX design, e-commerce solutions, and cloud services.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-3 text-lg font-semibold">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/">
                <span className="transition hover:text-blue-400">Home</span>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <span className="transition hover:text-blue-400">About Us</span>
              </Link>
            </li>
            <li>
              <Link href="/services">
                <span className="transition hover:text-blue-400">
                  Our Services
                </span>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <span className="transition hover:text-blue-400">Contact</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="mb-3 text-lg font-semibold">Our Services</h3>
          <ul className="space-y-2">
            <li className="hover:text-blue-400">Website Development</li>
            <li className="hover:text-blue-400">E-Commerce Solutions</li>
            <li className="hover:text-blue-400">UI/UX Design</li>
            <li className="hover:text-blue-400">Cloud Hosting</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="mb-3 text-lg font-semibold">Contact Us</h3>
          <ul className="space-y-2 text-gray-400">
            <li className="flex items-center hover:text-yellow-300">
              <FaMapMarkerAlt className="mr-2" /> 123 Street, City, Country
            </li>
            <li className="flex items-center hover:text-yellow-300">
              <FaPhone className="mr-2" /> +123 456 7890
            </li>
            <li className="flex items-center hover:text-yellow-300">
              <FaEnvelope className="mr-2" /> info@example.com
            </li>
          </ul>
        </div>
      </div>

      {/* Social Media & Copyright */}
      <div className="flex flex-col items-center justify-between border-t border-gray-700 px-6 py-4 md:flex-row">
        <p className="text-sm text-gray-900">
          &copy; {new Date().getFullYear()} VKSoft. All rights reserved.
        </p>
        <div className="mt-3 flex space-x-4 md:mt-0">
          <Link aria-label="go to facebook profile"  href="#">
            <FaFacebook className="text-xl transition hover:text-blue-500" />
          </Link>
          <Link aria-label="go to twitter profile"  href="#">
            <FaTwitter className="text-xl transition hover:text-blue-400" />
          </Link>
          <Link aria-label="go to instagram profile"  href="#">
            <FaInstagram className="text-xl transition hover:text-pink-500" />
          </Link>
          <Link aria-label="go to linked in profile"  href="#">
            <FaLinkedin className="text-xl transition hover:text-blue-600" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
