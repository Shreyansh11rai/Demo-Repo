import { contactPageLink } from "@/data/globalData";
import Container from "../Container";
import Link from "next/link";
import { AnchorBoldBtn } from "../Buttons";
AnchorBoldBtn
export default function ServiceGroupPage({groupPageData}) {
    return (
      <>
        <section className="text-center px-4 py-16 sm:py-28 bg-slate-200 mt-5 bg-gradient-to-r from-primaryclr to-slate-500 text-white">
          <h1 className="text-4xl font-bold mb-4">{groupPageData.mainHeading}</h1>
          <p className="text-lg mb-6 max-w-3xl mx-auto text-black">
          {groupPageData.subHeading}
          </p>
          <Link href={groupPageData.button.href} className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
            {groupPageData.button.text}
          </Link>
        </section>
      <Container className="space-y-16 pb-20">
        {/* CTA Banner */}
        <div className="bg-yellow-100 text-yellow-800 px-4 py-3 text-center mt-10">
          <span className="underline hover:text-yellow-900">
            {groupPageData.ctaText}
          </span>
        </div>
  
        {/* Services Cards */}
        <section className="px-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {groupPageData.serviceCards.map(service => (
            <div key={service.id} className="border p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="mb-3 text-gray-600">{service.description}</p>
              <ul className="text-sm list-disc pl-5 mb-4 text-gray-700">
                {service.benefits.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
              <div className="flex gap-4">
                <Link href={service.link} className="text-blue-600 underline">Details</Link>
                <Link href={service.pricing} className="text-green-600 underline">Pricing</Link>
              </div>
            </div>
          ))}
        </section>
  
        {/* Final CTA */}
        <section className="text-center px-4 py-12 bg-blue-50 rounded-xl max-w-5xl mx-auto mt-10">
          <h2 className="text-2xl font-bold mb-2">{groupPageData.bannerHeading}</h2>
          <p className="mb-4 text-gray-700">
          {groupPageData.bannerSubHeading}
          </p>
          <Link href={groupPageData.bannerBtn.href} className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
           {groupPageData.bannerBtn.text}
          </Link>
        </section>
      </Container>
      </>
    )
  }