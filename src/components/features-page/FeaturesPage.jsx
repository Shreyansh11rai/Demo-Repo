import { heroSectionData, featuresPageData } from "@/data/featuresPageData";
import CTA from "../CTA";
import Header, { Header2 } from "../header-comp/Header";

export default function FeaturesPage() {
  return (
    <main className="bg-white text-gray-800">
    <Header/>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primaryclr to-slate-500 py-16 sm:py-28 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          {heroSectionData.heading}
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          {heroSectionData.description}
        </p>
      </section>

      {/* Features Section */}
      <section className="py-12 px-6 max-w-7xl mx-auto grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {featuresPageData.map((feature, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-2xl p-6 shadow hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold mb-2">{feature.title}</h2>
            <p>{feature.description}</p>
          </div>
        ))}
      </section>
      <CTA/>
    </main>
  );
}
