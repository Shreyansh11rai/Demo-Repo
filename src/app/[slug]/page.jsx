import Image from "next/image";
import Wrapper from "@/components/Wrapper";
import { BoldBtn } from "@/components/Buttons";
import { notFound } from "next/navigation";
import pageData from "../../lib/servicess-data";

export async function generateStaticParams() {
  return pageData.map((page) => ({
    slug: page.slug,
  }));
}

export default async function page({ params }) {
  const { slug } = await params;
  const service = pageData.find((ele) => ele.slug === slug);
  if (!service) {
    return notFound();
  }

  return (
    <Wrapper className={"py-2 pb-10"}>
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:items-center justify-around mx-auto max-w-5xl">
          {/* Hero Section */}
          <div className="flex items-start flex-1 flex-col gap-3 max-w-xl">
            <h1 className="text-4xl font-bold">{service.title}</h1>
            <p className=" text-lg text-gray-600 max-w-lg">{service.description}</p>
            <BoldBtn
              target={service.ctaLink}
              text={service.ctaText}
              className={""}
            />
          </div>

          {/* Image */}
          <div className="my-10 justify-center bg-blue-500 rounded-lg overflow-hidden hidden lg:flex">
            <Image
              src="/images/img_809.jpeg"
              alt={service.title}
              width={400}
              height={300}
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold">Why Choose Us?</h2>
          <ul className="mt-4 flex flex-wrap gap-3 text-gray-700">
            {service.whyChooseUs.map((item, index) => (
              <li
                key={index}
                className="rounded-full border border-blue-200 px-3 py-2 shadow-md"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Features */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold">Service Features</h2>
          <ul className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
            {service.features.map((feature, index) => (
              <li key={index} className="rounded-lg bg-gray-100 p-4">
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Benefits */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold">Benefits of This Service</h2>
          <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2">
            {service.benefits.map((benefit, index) => (
              <div key={index} className="rounded-lg border p-4 shadow-sm">
                <h3 className="text-lg font-semibold">{benefit.title}</h3>
                <p className="mt-2 text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Plans */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold">Pricing Plans</h2>
          <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-3">
            {service.pricing.map((plan, index) => (
              <div key={index} className="rounded-lg border p-6 shadow-sm">
                <h3 className="text-xl font-bold">{plan.name}</h3>
                <p className="text-2xl font-semibold text-blue-600">
                  {plan.price}
                </p>
                <ul className="mt-4 text-gray-700">
                  {plan.features.map((feature, i) => (
                    <li key={i}>✔ {feature}</li>
                  ))}
                </ul>
                <p className="mt-4 text-gray-600">{plan.whyThisPlan}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Process Steps */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold">Our Process</h2>
          <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2">
            {service.process.map((step, index) => (
              <div
                key={index}
                className="border-l-4 border-blue-600 p-4 shadow-sm"
              >
                <h3 className="text-lg font-semibold">{step.step}</h3>
                <p className="mt-2 text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Custom Package CTA */}
        <div className="mt-12 flex flex-col gap-3 text-center py-10">
          <p className="text-lg font-semibold">{service.customPackageText}</p>
          <BoldBtn
            target={service.ctaLink}
            text={"Get a Custom Package"}
            className={"mx-auto"}
          />
        </div>
      </div>
    </Wrapper>
  );
}
