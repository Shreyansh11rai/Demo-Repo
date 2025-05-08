import { heroSectionData, featuresPageData } from "@/data/featuresPageData";
import CTA from "../CTA";
import Image from "next/image"; // Import the Image component

export default function FeaturesPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primaryclr to-slate-500 py-16 sm:py-28 px-6 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          {heroSectionData.heading}
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          {heroSectionData.description}
        </p>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto space-y-16">
        {featuresPageData.map((feature, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center ${
              index % 2 === 0 ? "md:flex-row-reverse " : ""
            } gap-4`}
          >
            {/* Image Section */}
            <div className="w-full md:w-1/2">
              <Image
                src={"/blogging.svg"} // Replace img with Image
                alt={feature.title}
                className="rounded-lg shadow-lg"
                width={500} // Add width
                height={300} // Add height
              />
            </div>

            {/* Text Section */}
            <div
              className={`w-full md:w-1/2 md:pl-12 p-5 ${
                index % 2 === 0
                  ? "border-l-2 border-gray-400 rounded-3xl"
                  : "border-r-2 border-gray-400 rounded-3xl"
              }`}
            >
              <h2 className="text-3xl font-bold mb-4">{feature.title}</h2>
              <p className="text-lg text-gray-600 mb-4">{feature.subtext}</p>
              <p className="text-gray-700 mb-6">{feature.description}</p>
              <h3 className="text-lg font-semibold mb-2">How It Helps:</h3>
              <p className="text-gray-700 mb-6">{feature.howItHelps}</p>
              <h3 className="text-lg font-semibold mb-2">Benefits:</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                {feature.benefits.map((benefit, i) => (
                  <li key={i}>{benefit}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>

      <CTA />
    </main>
  );
}
