import { contactPageLink } from "../globalData";

export const headerData = {
  // Edit header logo, always give href.
  logo: { href: "/", image: "", height: 0, width: 0, name: "Web Design" },
  dropdownImage: "/nav-side.jpeg",
  //Edit navbar
  navigation: [
    // visible links and href on navbar
    { name: "Home", href: "/" },
    // follow same pattern for dropdown
    { name: "Pricing", href: "/pricing" },
    { name: "Templates & UI Design ", href: "/templates-and-ui-design" },
    {
      name: "Services",
      dropdown: true,
      dropdownData: [
        // add this object as same pattern to add a drodown menu
        {
          // group name in left container
          title: "Website Design",
          // group links in center container
          links: [
            "Static Websites",
            "Dynamic Websites",
            "CMS-Based Websites",
            "Web and Mobile Apps",
          ],
        },
        {
          title: "Templates and UI Design",
          links: [
            "Website Templates",
            "E-commerce Templates",
            "Admin Panel Templates",
            "Landing Page Templates",
          ],
        },
        {
          title: "E-commerce Solutions",
          links: [
            "NopCommerce Development",
            "Joomla E-commerce",
            "Shopify Solutions",
          ],
        },
        {
          title: "Blogging and Content Websites",
          links: ["WordPress Blogs", "Ghost Blogging Platforms"],
        },
      ],
    },
    { name: "Features", href: "/features" },
  ],
  // rightmost button
  button: {
    text: "Get quote",
    href: contactPageLink,
  },
};

