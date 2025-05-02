import HeroSection from "@/components/home-page-comp/Hero";
import OurServices from "@/components/home-page-comp/OurServices";
import CTA from "@/components/CTA";
import Header from "@/components/header-comp/Header";

export const metadata = {
  title: 'Vksoft Best Website Developing Agency',
  description: 'We here provide the best services for your website and digital business support',
}

export default function Home() {
  return (
    <main>
        <Header/>
        <HeroSection/>
        <OurServices/>
        <CTA/>
    </main>
  );
}
