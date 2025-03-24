"use client";
import Link from "next/link";

export default function CTA() {
  return (
    <section className=" py-16 px-6 text-center rounded-lg shadow-lg">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold">Let's Connect!</h2>
        <p className="mt-4 text-lg">
          Have a project in mind or need assistance? Reach out to us and let's
          build something amazing together.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Link
            href="https://wa.me/your-whatsapp-number"
            className="bg-green-500 hover:bg-green-600 px-6 py-3 text-black rounded-lg shadow-md transition duration-300"
          >
            WhatsApp Us
          </Link>   
          <a
            href="tel:+1234567890"
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 text-white rounded-lg shadow-md transition duration-300"
          >
            Call Us
          </a>
          <Link
            href="/contact"
            className="bg-white hover:bg-gray-200 px-6 py-3 text-black rounded-lg shadow-md transition duration-300"
          >
            Send Inquiry
          </Link>
        </div>
      </div>
    </section>
  );
}
