import { ourServicesData, servicesSectionData } from "@/data/homepage-data/ourServicesSectionData";
import ServiceOverView from "../ServiceOverView";

export default function OurServices() {
  
  return (
    servicesSectionData.map((item)=>
      <ServiceOverView data={item}/>
    )
  )
}
