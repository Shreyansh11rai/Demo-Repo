import {mobileNumberLink } from "../globalData";

export const headerData = {
  // add image path to give logo, always give href,you can use text as logo
  logo: { href: "/", image: "/cloud.svg", height: 70, width: 70, name: "Web Design" },
  // dropdown has a image in right container edit to change that.
  dropdownImage: "/nav-side.jpeg",
  //Edit navbar
  navigation: [
    // visible links and href on navbar name can be changed but do remember to fill the href correctly use only "-" to separate words.
    // you can change order here and it'll show up on front-end also
    { name: "Home", href: "/" },
    { name: "Pricing", href: "/pricing" },
    { name: "Templates & UI Design ", href: "/templates-and-ui-design" },
    { name: "Features", href: "/features" },
    // follow same pattern for dropdown menu
    {
      // visible name in navbar for dropdown toggle on hover
      name: "Services",
      // send dropdown true to enable dropdown
      dropdown: "grouped",
      dropdownData: [
        // add this object as same pattern to add a drodown menu
        {
          // group name in left container
          title: "Website Design",
          // Automatically the href will be title with lowercase with "-" splitting words, ex : website-design, if you want custom href send it through below key. >>
          // href : "website-design", ////////////////
          // group links in center container
          links: [
            "Static Websites",
            // for above link the generated href will be "static-websites", means coverted to lowercase and added hyphen for word splitting.
            {
              name: "Dynamic Websites",
              href: "dynamic-websites",
            },
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
    // simple list dropdown sample. write dropdown:"listed" to make it work. if it needs Link than send href otherwise send name only 
    {name : "more", dropdown : "none", dropdownData : [
      {
        title : "company",
        href : "/company"
      },
      {
        title : "about",
        href : "/about"
      },
    ]},
  ],
  // rightmost button
  button: {
    text: "Book a service ",
    href: mobileNumberLink,
  },
};
