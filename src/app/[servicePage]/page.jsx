import { notFound } from "next/navigation";
import servicesPageData from "../../data/servicesPageData";
import DetailsPage from "@/components/details-page/DetailsPage";
import { groupPageData } from "@/data/groupPageData";
import ServiceGroupPage from "@/components/service-group-page/ServiceGroupPage";

export async function generateMetadata({ params }) {
  const { servicePage } = await params;
  const service = servicesPageData.find((ele) => ele.slug === servicePage);
  const serviceGroupPage = groupPageData.find(
    (ele) => ele.title.split(" ").join("-").toLowerCase() === servicePage,
  );
  if (service) {
    return { title: service.title };
  }
  if (serviceGroupPage) {
    return { title: serviceGroupPage.title };
  }
}

export async function generateStaticParams() {
  let result = []; // Initialize result as an array
  // Map over pageData and groupPageData to generate params
  result = result.concat(
    servicesPageData.map((page) => ({ servicePage: page.slug })),
  );
  result = result.concat(
    groupPageData.map((page) => ({
      servicePage: page.title.split(" ").join("-").toLowerCase(),
    })),
  );
  return result;
}

export default async function page({ params }) {
  const { servicePage } = await params;
  console.log(servicePage);
  const service = servicesPageData.find((ele) => ele.slug === servicePage);
  const serviceGroupPage = groupPageData.find(
    (ele) => ele.title.split(" ").join("-").toLowerCase() === servicePage,
  );

  if (!service && !serviceGroupPage) {
    return notFound();
  }

  return (
    <>
      {service && <DetailsPage service={service} />}
      {serviceGroupPage && (
        <ServiceGroupPage groupPageData={serviceGroupPage} />
      )}
    </>
  );
}
