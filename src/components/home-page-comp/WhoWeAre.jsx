import ServiceOverView from "../ServiceOverView";

const aboutUsData = {
    wrapperStyle: "bg-white",
    mainContainerStyle: "md:flex-row",
    capsuleHeading: "Who We Are",
    mainHeading: "Innovating the Digital Landscape",
    mainPara:
      "At <strong>VKSoft</strong>, we are dedicated to delivering cutting-edge technology solutions tailored for businesses of all sizes. With a passion for innovation, we specialize in <strong>web development, e-commerce, cloud solutions, and IT consulting</strong>. Our mission is to provide scalable, efficient, and user-friendly digital solutions that drive growth and success.",
    subTextContainer: [
      {
        heading: "Our Mission",
        alt: "mission icon",
        image: "/images/mission.svg",
        para: "We strive to empower businesses with state-of-the-art technology, ensuring seamless digital transformation and a competitive edge in the evolving market.",
      },
      {
        heading: "Our Vision",
        alt: "vision icon",
        image: "/images/vision.jpg",
        para: "To be a global leader in IT solutions, helping businesses innovate and scale with future-ready digital strategies.",
      },
      {
        heading: "Our Values",
        alt: "values icon",
        image: "/images/values.svg",
        para: "Integrity, innovation, customer satisfaction, and excellence are at the core of everything we do, ensuring long-term success for our clients.",
      },
      {
        heading: "Our Expertise",
        alt: "expertise icon",
        image: "/images/expertise.svg",
        para: "With years of experience in web development, e-commerce, UI/UX design, and cloud solutions, we bring technical excellence and creativity to every project.",
      },
      {
        heading: "Our Commitment",
        alt: "commitment icon",
        image: "/images/commitment.svg",
        para: "We are committed to delivering high-quality, scalable, and future-ready IT solutions that help businesses thrive in the digital age.",
      },
      {
        heading: "Our Approach",
        alt: "approach icon",
        image: "/images/approach.png",
        para: "We follow a research-driven, agile, and client-centric approach, ensuring seamless digital transformation and business growth.",
      },
    ],
  };

export default function AboutUs(second) {
    return <ServiceOverView data={aboutUsData}/>
}