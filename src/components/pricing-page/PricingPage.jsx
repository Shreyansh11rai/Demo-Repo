import { contactPageLink } from "@/data/globalData";
import { AnchorBoldBtn, BoldBtn } from "../Buttons";
import CTA from "../CTA";
import Header from "../header-comp/Header";
import {
  heroSectionData,
  pricingPlansData,
  detailsSectionData,
  faqSectionData,
} from "@/data/pricingPageData";

export default function PricingPage() {
  return (
    <>
      <main className="bg-white text-gray-800">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primaryclr to-slate-500 text-white py-16 sm:py-28 px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {heroSectionData.heading}
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-5">
            {heroSectionData.description}
          </p>
          <BoldBtn className={"md:py-3 md:"} text={"Get a Free Website"} />
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
              {/* Title and Price */}
              <h2 className="text-2xl font-semibold mb-4">{plan.title}</h2>
              <p className="text-4xl font-bold mb-4">{plan.price}</p>
              <p className="text-gray-600 mb-6">{plan.description}</p>

              {/* Features */}
              <ul className="space-y-2 text-sm text-gray-700 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>

              {/* Target Audience */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Target Audience:</h3>
                <p className="text-sm text-gray-700">{plan.targetAudience}</p>
              </div>

              {/* Highlights */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Highlights:</h3>
                <ul className="list-disc list-inside text-sm text-gray-700">
                  {plan.highlights.map((highlight, i) => (
                    <li key={i}>{highlight}</li>
                  ))}
                </ul>
              </div>

              {/* Notes */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Notes:</h3>
                <p className="text-sm text-gray-500 italic">{plan.notes}</p>
              </div>

              {/* Button */}
              <AnchorBoldBtn
                className={`w-full ${plan.buttonStyle} py-2 px-4 rounded-lg transition bg-blue-400`}
                text={"Go with plan"}
                target={contactPageLink}
          />
          
            </div>
          ))}
        </section>

        {/* Details Section (Why Choose Us) */}
        <section className="py-16 px-6 max-w-7xl mx-auto text-center border-t-2 border-gray-200 bg-slate-100">
          <h2 className="mb-8">{detailsSectionData.heading}</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {detailsSectionData.cards.map((card, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-6 shadow hover:shadow-md transition"
              >
                <h3 className="mb-2">{card.title}</h3>
                <p className="">{card.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-6 max-w-7xl mx-auto border-t-2 border-gray-200">
          <h2 className="text-3xl font-bold mb-8 text-center">FAQs</h2>
          <div className="space-y-6">
            {faqSectionData.map((faq, index) => (
              <div key={index} className="border-b pb-4">
                <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href="/faq"
              className="text-cyan-600 hover:underline text-lg font-medium"
            >
              View More FAQs →
            </a>
          </div>
        </section>

        <CTA className={"bg-slate-100"} />
      </main>
    </>
  );
}
