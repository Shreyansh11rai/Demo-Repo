import { ourServicesData, servicesSectionData } from "@/data/homepage-data/ourServicesSectionData";
import ServiceOverView from "../ServiceOverView";

export default function OurServices() {
  
  return <ServiceOverView data={ourServicesData} data2={servicesSectionData} />;
}
