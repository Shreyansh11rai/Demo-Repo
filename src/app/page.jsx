import AboutUs from "@/components/home-page-comp/WhoWeAre";
import HeroSection from "@/components/home-page-comp/Hero";
import OurServices from "@/components/home-page-comp/OurServices";
import Testimonials from "@/components/home-page-comp/Testimonials";
import WhyUs from "@/components/home-page-comp/WhatWeDo";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export const metadata = {
  title: 'Vksoft Best Website Developing Agency',
  description: 'We here provide the best services for your website and digital business support',
}

export default function Home() {
  return (
    <main>
      <h1>Hello git</h1>
        <HeroSection/>
        <WhyUs/>
        <OurServices/>
        <Testimonials/>
        <AboutUs/>
        <CTA/>
    </main>
  );
}
