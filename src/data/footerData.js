import {
  homeUrl,
  featuresUrl,
  pricingUrl,
  faqUrl,
  contactUrl,
  websiteDesignUrl,
  templatesAndUIDesignUrl,
  ecommerceSolutionsUrl,
  bloggingAndContentUrl,
  emailUrl,
  phoneUrl,
  facebookUrl,
  twitterUrl,
  linkedinUrl,
  instagramUrl,
} from "@/data/urls";

export const footerData = {
  about: {
    title: "Web Design",
    description:
      "We specialize in creating stunning, responsive websites that help businesses grow and succeed in the digital world.",
  },
  quickLinks: [
    { name: "Home", href: homeUrl },
    { name: "Features", href: featuresUrl },
    { name: "Pricing", href: pricingUrl },
    { name: "FAQ", href: faqUrl },
    { name: "Contact Us", href: contactUrl },
  ],
  services: [
    { name: "Website Design", href: websiteDesignUrl },
    { name: "Templates & UI Design", href: templatesAndUIDesignUrl },
    { name: "E-Commerce Solutions", href: ecommerceSolutionsUrl },
    { name: "Blogging & Content", href: bloggingAndContentUrl },
  ],
  contactInfo: {
    image: "/nav-side.jpeg",
    email: emailUrl,
    phone: phoneUrl,
  },
  socialLinks: [
    { name: "Facebook", href: facebookUrl },
    { name: "Twitter", href: twitterUrl },
    { name: "LinkedIn", href: linkedinUrl },
    { name: "Instagram", href: instagramUrl },
  ],
};