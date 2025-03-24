import ServiceOverView from "../ServiceOverView";

const data = {
  wrapperStyle: "darkbg",
  mainContainerStyle: "",
  capsuleHeading: "Our Services",
  mainHeading: "We provide exceptional quality work",
  imageUrl: "/images/img_806.jpeg",
  alt: "laptop on desk with speakers and lamp",
  mainPara:
    "We provide <strong>website design, e-commerce development, UI/UX design, and cloud hosting</strong>. Our services include <strong>static & dynamic websites, CMS platforms (WordPress, Umbraco), Shopify, NopCommerce, domain registration, SSL setup, and IT consultancy</strong>. Get <strong>fast, secure, and SEO-optimized</strong> solutions to elevate your online presence.",
  subTextContainer: [
    {
      heading: "Custom Website Development",
      alt: "custom website icon",
      image: "/images/custom-web.svg",
      para: "From static and dynamic websites to CMS-based solutions, we build tailored, high-performance, and scalable web experiences that enhance user engagement and drive business growth.",
    },
    {
      heading: "E-commerce & Online Stores",
      alt: "e-commerce icon",
      image: "/images/shopping.svg",
      para: "Launch a seamless online store with our Shopify, NopCommerce, and Joomla solutions. We focus on secure payment gateways, intuitive UI, and optimized performance to boost sales.",
    },
    {
      heading: "UI/UX & Web Design",
      alt: "ui ux icon",
      image: "/images/ui-ux.svg",
      para: "Create visually stunning and intuitive designs. Our UI/UX services ensure a smooth user experience with responsive, mobile-friendly, and conversion-optimized layouts.",
    },
    {
      heading: "Cloud & Hosting Solutions",
      alt: "cloud hosting icon",
      image: "/images/cloud.svg",
      para: "Get reliable hosting, domain registration, and cloud setup. We ensure fast loading speeds, security, and scalability with expert cloud consulting and managed hosting services.",
    },
    {
      heading: "Business & Mail Solutions",
      alt: "business mail icon",
      image: "/images/business-mail.svg",
      para: "Enhance your business communication with our secure and professional email solutions. We offer business email hosting, domain-based emails, and seamless integration with cloud services to ensure reliability and efficiency.",
    },
    {
      heading: "Blogging & Content Websites",
      alt: "blogging icon",
      image: "/images/blogging.svg",
      para: "Create and manage engaging content with our powerful blogging solutions using Ghost, WordPress, and custom CMS options. We ensure SEO optimization, fast load times, and a seamless writing experience for content creators.",
    },
      
  ],
};

export default function OurServices() {
  return <ServiceOverView data={data} />;
}
