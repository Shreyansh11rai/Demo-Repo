// Website Services Links
export const servicesUrl = {
  name: "Services",
  href: "/our-services",
};
export const websiteServicesUrl = {
  name: "Website Services",
  href: "/website-services",
};
export const businessMailUrl = {
  name: "Business Mail",
  href: "/website-services",  
};
export const domainHostingSslUrl = {
  name: "Domain and Hosting SSL",
  href: "/website-services",
};
export const webAppUrl = { name: "Web-App", href: "/website-services" };

// Header Links
export const servicesHeaderLink = { name: "Services", href: "/our-services" };
export const productsHeaderLink = { name: "Products", href: "/our-products" };
export const supportHeaderLink = { name: "Support", href: "/support" };

// Digital Marketing Links
export const digitalMarketingUrl = {
  name: "Digital Marketing",
  href: "/digital-marketing",
};
export const seoSemUrl = { name: "SEO and SEM", href: "/digital-marketing" };
export const paidMarketingUrl = {
  name: "Paid Marketing",
  href: "/digital-marketing",
};
export const advertisementUrl = {
  name: "Advertisement",
  href: "/digital-marketing",
};

// Products Links
export const schoolManagementSoftwareUrl = {
  name: "School Management Software",
  href: "/",
};
export const schoolWebsitesUrl = { name: "School Websites", href: "/" };

// Support Links
export const helpArticlesUrl = { name: "Help Articles", href: "/" };
export const helpVideosUrl = { name: "Help Videos", href: "/" };
export const requestCallUrl = { name: "Request a call", href: "/" };
export const chatWithUsUrl = { name: "Chat with us", href: "/" };
export const remoteAssistanceUrl = { name: "Start Session", href: "/remote-assistance" }; // Dummy URL
export const faqUrl = { name: "FAQ", href: "/faq" };
export const consultancyRequestUrl = { name: "Consultancy Request", href: "/" };
export const helpDeskUrl = { name: "Submit Ticket", href: "/help-desk" }; // Dummy URL
export const supportVideosUrl = { name: "Watch Now", href: "/support-videos" }; // Dummy URL
export const productHelpUrl = { name: "Product Help", href: "/product-help" }; // Dummy URL

// Company Links
export const aboutUsUrl = { name: "About Us", href: "/about-us" };
export const careerUrl = { name: "Career", href: "/career" };
export const portfolioUrl = { name: "Portfolio", href: "/portfolio" };
export const ourJourneyUrl = { name: "Our Journey", href: "/our-journey" };
export const ourClientsUrl = { name: "Our Clients", href: "/our-clients" };
export const contactUsUrl = { name: "Contact Us", href: "/contact-us" };

// Policy Links
export const privacyPolicyUrl = {
  name: "Privacy Policy",
  href: "/privacy-policy",
};
export const cookiePolicyUrl = {
  name: "Cookie Policy",
  href: "/cookie-policy",
};
export const antiSpamPolicyUrl = {
  name: "Anti-Spam Policy",
  href: "/anti-spam-policy",
};
export const termsOfServiceUrl = {
  name: "Terms of Service",
  href: "/terms-of-service",
};

// Contact Links
export const supportContactUrl = { name: "Support", href: "/support" };
export const salesEmailUrl = {
  name: "sales@vksoft.co.in",
  href: "mailto:sales@vksoft.co.in",
};
export const careerEmailUrl = {
  name: "Career",
  href: "mailto:hr@vksoft.co.in",
};
export const infoEmailUrl = {
  name: "info@vksoft.co.in",
  href: "mailto:info@vksoft.co.in",
};
export const phoneNumberUrl = {
  name: "+91 9235211888",
  href: "tel:+91 9235211888",
};
export const supportEmailUrl = { name: "support@vksoft.co.in", href: "mailto:support@vksoft.co.in" };

// Social Links
export const facebookUrl = { name: "Facebook", href: "https://facebook.com" };
export const xUrl = { name: "Twitter", href: "https://x.com" };
export const linkedInUrl = { name: "LinkedIn", href: "https://linkedin.com" };
export const instagramUrl = { name: "Instagram", href: "https://instagram.com" };

// Career Page Links
export const naukariBannerLink = { href: "https://naukari.com" };

// Grouped Links for Specific Sections
export const jobLinks = {
  bannerlink: naukariBannerLink,
};
export const websiteServicesLinks = [
  websiteServicesUrl,
  businessMailUrl,
  domainHostingSslUrl,
  webAppUrl,
];
export const headerLinks = {
  Services: servicesHeaderLink,
  Products: productsHeaderLink,
  Support: supportHeaderLink,
};
export const digitalMarketingLinks = [
  digitalMarketingUrl,
  seoSemUrl,
  paidMarketingUrl,
  advertisementUrl,
];
export const productsLinks = [schoolManagementSoftwareUrl, schoolWebsitesUrl];
export const supportLinks = [
  helpArticlesUrl,
  helpVideosUrl,
  requestCallUrl,
  chatWithUsUrl,
  remoteAssistanceUrl,
  faqUrl,
  consultancyRequestUrl,
  helpDeskUrl,
  supportVideosUrl,
  productHelpUrl,
];
export const companyLinks = [
  aboutUsUrl,
  careerUrl,
  portfolioUrl,
  ourJourneyUrl,
  ourClientsUrl,
  contactUsUrl,
];
export const policyLinks = [
  privacyPolicyUrl,
  cookiePolicyUrl,
  antiSpamPolicyUrl,
  termsOfServiceUrl,
];
export const contactLinks = [
  supportContactUrl,
  salesEmailUrl,
  careerEmailUrl,
  infoEmailUrl,
  phoneNumberUrl,
  supportEmailUrl,
];
export const socialLinks = [facebookUrl, linkedInUrl];

// All Links Combined
export const allLinks = [
  ...websiteServicesLinks,
  ...digitalMarketingLinks,
  ...productsLinks,
  ...supportLinks,
  ...companyLinks,
  ...policyLinks,
  ...contactLinks,
  ...socialLinks,
];
