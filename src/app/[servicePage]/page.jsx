// Import necessary modules and components
import { notFound } from "next/navigation"; // For handling 404 pages
import servicesPageData from "../../data/servicesPageData"; // Data for individual services
import DetailsPage from "@/components/details-page/DetailsPage"; // Component to display service details
import { groupPageData } from "@/data/groupPageData"; // Data for grouped services
import ServiceGroupPage from "@/components/service-group-page/ServiceGroupPage"; // Component to display grouped service details

// Function to dynamically generate metadata for the page
export async function generateMetadata({ params }) {
  const { servicePage } = await params; // Extract the servicePage parameter from the URL

  // Find the matching service or service group based on the slug
  const service = servicesPageData.find((ele) => ele.slug === servicePage);
  const serviceGroupPage = groupPageData.find(
    (ele) => ele.title.split(" ").join("-").toLowerCase() === servicePage,
  );

  // Return metadata based on the matched service or service group
  if (service) {
    return {
      title: service.title,
      description: service.description || "Default description for the service.",
      keywords: service.keywords || ["default", "keywords"],
    }; // Metadata for individual service
  }
  if (serviceGroupPage) {
    return {
      title: serviceGroupPage.title,
      description: serviceGroupPage.subHeading || "Default description for the group.",
      keywords: serviceGroupPage.keywords || ["default", "keywords"],
    };
  } // Metadata for grouped service
}

// Function to generate static paths for all services and service groups
export async function generateStaticParams() {
  let result = []; // Initialize result as an array

  // Add paths for individual services
  result = result.concat(
    servicesPageData.map((page) => ({ servicePage: page.slug })),
  );

  // Add paths for grouped services
  result = result.concat(
    groupPageData.map((page) => ({
      servicePage: page.title.split(" ").join("-").toLowerCase(),
    })),
  );

  return result; // Return the combined paths
}

// Main page component to render the service or service group details
export default async function page({ params }) {
  const { servicePage } = await params; // Extract the servicePage parameter from the URL
  console.log(servicePage); // Log the servicePage for debugging purposes

  // Find the matching service or service group based on the slug
  const service = servicesPageData.find((ele) => ele.slug === servicePage);
  const serviceGroupPage = groupPageData.find(
    (ele) => ele.title.split(" ").join("-").toLowerCase() === servicePage,
  );

  // If no matching service or service group is found, return a 404 page
  if (!service && !serviceGroupPage) {
    return notFound();
  }

  // Render the appropriate component based on the matched data
  return (
    <>
      {/* Render individual service details */}
      {service && <DetailsPage service={service} />}
      {/* Render grouped service detail */}
      {serviceGroupPage && (
        <ServiceGroupPage groupPageData={serviceGroupPage} />
      )}
    </>
  );
}
