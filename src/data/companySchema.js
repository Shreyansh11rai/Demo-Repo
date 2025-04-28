const companySchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Your Company Name",
  url: "https://yourcompanydomain.com",
  logo: "https://yourcompanydomain.com/logo.png",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-XXXXXXXXXX",
    contactType: "Customer Service",
    areaServed: "IN",
    availableLanguage: "English"
  },
  sameAs: [
    "https://linkedin.com/company/yourcompany",
    "https://twitter.com/yourcompany"
  ]
};

export default companySchema;
