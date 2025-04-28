import ServiceOverView from "../ServiceOverView";
const data = {
  wrapperStyle:"",
  btnText:"More About Us",
  btnStyle:"mt-4",
  btnTarget:"#",
  mainContainerStyle: "",
  capsuleHeading: "What we do ?",
  mainHeading: "We help to create",
  imageUrl: "/website-services/whyus1.svg",
  alt: "desktop with calender and graph in it",
  mainPara:
    "Design Websites, e-commerce platforms, and digital solutions that are fast, secure, and SEO-optimized. From custom designs to cloud hosting, we build scalable and user-friendly experiences that drivegrowth.",
  subTextContainer: [
    {
      heading: "Designs that you'll love",
      alt: "website icon",
      image: "/website-services/webcode.svg",
      para: " Stunning, modern, and user-friendly designs crafted for performance, engagement, and growth. Elevate your brand with sleek, responsive, and SEO-optimized solutions.",
    },
    {
      heading: "Result that show up",
      alt: "graph icon",
      image: "/website-services/graph.svg",
      para: "Results that stand out—fast, impactful, and growth-driven. Get high-performance, SEO-optimized solutions designed to maximize visibility and success",
    },
  ],
};

export default function WhatWeDo() {

  return (
    <ServiceOverView data={data}/>
  );
}
