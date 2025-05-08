import Link from "next/link";
import { Mail, Facebook, Linkedin, PhoneCall, BriefcaseBusiness, X } from "lucide-react";
import {
  companyLinks,
  digitalMarketingLinks,
  facebookUrl,
  linkedInUrl,
  policyLinks,
  productsLinks,
  socialLinks,
  websiteServicesLinks,
  xUrl,
  supportContactUrl,
  salesEmailUrl,
  careerEmailUrl,
  infoEmailUrl,
  phoneNumberUrl,
} from "@/constants/urls";
import Image from "next/image";

export function ParentFooter() {
  return (
    <footer className="bg-gray-200 py-10">
      <div className="container mx-auto grid gap-8 px-6 md:grid-cols-4">
        {/* Products Section */}
        <div>
          <h3 className="mb-4 text-lg font-semibold">Products</h3>
          <ul className="space-y-2">
            {productsLinks.map((item, index) => (
              <li key={index}>
                <Link href={item.href} className="hover:text-gray-700">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services Section */}
        <div>
          <h3 className="mb-4 text-lg font-semibold">Services</h3>
          <ul className="space-y-2">
            {digitalMarketingLinks.map((item, index) => (
              <li key={index}>
                <Link href={item.href}>{item.name}</Link>
              </li>
            ))}
            {websiteServicesLinks.map((item, index) => (
              <li key={index}>
                <Link href={item.href}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company Section */}
        <div>
          <h3 className="mb-4 text-lg font-semibold">Company</h3>
          <ul className="space-y-2">
            {companyLinks.map((item, index) => (
              <li key={index}>
                <Link href={item.href} className="hover:text-gray-700">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="mb-4 text-lg font-semibold">Contact</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <img src="/images/support-page/support.svg" className="h-5 w-5" alt="support-icon" />
              <Link href={supportContactUrl.href} className="hover:text-accent-primary">
                {supportContactUrl.name}
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <Link href={salesEmailUrl.href} className="hover:text-accent-primary flex items-center gap-2">
                <Mail className="h-5 w-5" />
                {salesEmailUrl.name}
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <BriefcaseBusiness className="h-5 w-5" />
              <Link href={careerEmailUrl.href} className="hover:text-accent-primary">
                {careerEmailUrl.name}
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-5 w-5" />
              <Link href={infoEmailUrl.href} className="hover:text-accent-primary">
                {infoEmailUrl.name}
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <PhoneCall className="h-5 w-5" />
              <Link href={phoneNumberUrl.href} className="hover:text-accent-primary">
                {phoneNumberUrl.name}
              </Link>
            </li>
          </ul>

          {/* Social Icons */}
          <div className="mt-4 flex gap-4">
            <Link href={facebookUrl.href} target="_blank">
              <Facebook className="h-6 w-6 hover:text-accent-primary" />
            </Link>
            <Link href={xUrl.href} target="_blank">
              <X className="h-6 w-6 hover:text-accent-primary" />
            </Link>
            <Link href={linkedInUrl.href} target="_blank">
              <Linkedin className="h-6 w-6 hover:text-accent-primary" />
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm">
        <ul className="flex flex-col items-center justify-center gap-6 md:flex-row">
          {policyLinks.map((item, index) => (
            <li key={index}>
              <Link href={item.href} className="hover:text-gray-700">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Company Logo */}
        <div className="mt-6 flex justify-center">
          <Image src="/logo.png" alt="Company Logo" className="h-24 w-24" height={96} width={96}/>
        </div>

        <p className="mt-4">
          &copy; {new Date().getFullYear()} VKSOFT. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
