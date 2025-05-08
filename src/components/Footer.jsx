import Link from "next/link";
import Image from "next/image";
import { footerData } from "@/data/footerData";

export default function Footer() {
  const { about, quickLinks, services, contactInfo, socialLinks } = footerData;

  return (
    <footer className="bg-gray-100 py-10 border-b border-gray-500">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Column 1: Logo and About */}
        <div>
          <span className="text-2xl font-bold">{about.title}</span>
          <p className="text-sm text-gray-700">{about.description}</p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {quickLinks.map((link, index) => (
              <li key={index}>
                <Link href={link.href} className="text-gray-700 hover:text-white">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Our Services</h3>
          <ul className="space-y-2">
            {services.map((service, index) => (
              <li key={index} className="text-gray-700 hover:text-white">
                <Link href={service.href}>{service.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Contact Info */}
        <div>
          <div>
            <Image
              src={contactInfo.image}
              height={100}
              width={300}
              className="rounded-3xl"
              alt="Footer Image"
            />
          </div>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="mt-8 border-t border-gray-700 pt-6 text-center">
        <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
        <div className="flex justify-center space-x-6">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-white"
            >
              {social.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}