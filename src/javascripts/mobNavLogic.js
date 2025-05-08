export const initialExpandState = {
  btn1: false,
  btn2: false,
  btn3: false,
  btn4: false,
};

export const handleExpand = (btn, setExpand) => {
  setExpand((prev) => ({
    btn1: false,
    btn2: false,
    btn3: false,
    btn4: false,
    [btn]: !prev[btn],
  }));
};

export const navLinks = [
  {
    title: "Website Services",
    href: "/website-services",
    btn: "btn1",
    subLinks: [
      { title: "Website Template", href: "website-template" },
      { title: "Website Design", href: "website-design" },
      { title: "Website App", href: "website-app" },
      { title: "Domain and Hosting", href: "domain-and-hosting" },
      { title: "Cloud Setup", href: "cloud-setup" },
    ],
  },
  {
    title: "Digital Marketing",
    href: "/digital-marketing",
    btn: "btn2",
    subLinks: [
      { title: "SEO and SEM", href: "SEO-and-SEM" },
      { title: "Google Ads", href: "google-ads" },
      { title: "Social Media Ads", href: "social-media-ads" },
      { title: "Paid Marketing", href: "paid-marketing" },
    ],
  },
  {
    title: "Support",
    href: "/support",
    btn: "btn3",
    subLinks: [
      { title: "Help Articles", href: "" },
      { title: "Contact Us", href: "/contact-us" },
      { title: "Help Videos", href: "/" },
      { title: "Request a Call", href: "/" },
      { title: "Chat with Us", href: "/" },
      { title: "Remote Assistance", href: "/" },
      { title: "FAQ", href: "/faq" },
      { title: "Consultancy Request", href: "/" },
    ],
  },
  {
    title: "More",
    btn: "btn4",
    subLinks: [
      { title: "Our Clients", href: "/our-clients" },
      { title: "Portfolio", href: "/portfolio" },
      { title: "About Us", href: "/about-us" },
      { title: "Career with Us", href: "/career" },
      { title: "Our Journey", href: "/our-journey" },
    ],
  },
];