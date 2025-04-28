import AboutUs from "@/components/website-services/home-page-comp/WhoWeAre";
import HeroSection from "@/components/website-services/home-page-comp/Hero";
import OurServices from "@/components/website-services/home-page-comp/OurServices";
import Testimonials from "@/components/website-services/home-page-comp/Testimonials";
import WhyUs from "@/components/website-services/home-page-comp/WhatWeDo";
import CTA from "@/components/website-services/CTA";

export const metadata = {
  title: 'Vksoft Best Website Developing Agency',
  description: 'We here provide the best services for your website and digital business support',
}

export default function Home() {
  return (
    <main>
        <HeroSection/>
        <WhyUs/>
        <OurServices/>
        <Testimonials/>
        <AboutUs/>
        <CTA/>
    </main>
  );
}
