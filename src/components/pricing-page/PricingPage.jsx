import CTA from "../CTA";
import { Header2 } from "../header-comp/Header";
import { heroSectionData, pricingPlansData } from "@/data/pricingPageData";

export default function PricingPage() {
  return (
    <>
      <Header2 />
      <main className="bg-white text-gray-800">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primaryclr to-slate-500 text-white py-16 sm:py-28 px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {heroSectionData.heading}
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            {heroSectionData.description}
          </p>
        </section>

        {/* Pricing Plans Section */}
        <section className="py-16 px-6 max-w-7xl mx-auto grid gap-8 md:grid-cols-3">
          {pricingPlansData.map((plan, index) => (
            <div
              key={index}
              className={`border rounded-2xl p-8 shadow hover:shadow-lg transition ${
                plan.highlight ? "border-2 border-cyan-600 transform scale-105" : ""
              }`}
            >
              <h2 className="text-2xl font-semibold mb-4">{plan.title}</h2>
              <p className="text-4xl font-bold mb-4">{plan.price}</p>
              <p className="text-gray-600 mb-6">{plan.description}</p>
              <ul className="space-y-2 text-sm text-gray-700 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <button
                className={`w-full ${plan.buttonStyle} text-white py-2 px-4 rounded-lg transition`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </section>
        <CTA/>
      </main>
    </>
  );
}
