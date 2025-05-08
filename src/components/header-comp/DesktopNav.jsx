import Link from "next/link";
import ServicesDropdown from "@/components/header-comp/ServicesDropdown";
import { headerData } from "@/data/homepage-data/headerData";
import ActiveLink from "@/components/ActiveLink"
import ListDropdown from "./ListDropdown";
const DesktopNav = () => {
  return (
    <nav className="hidden xl:flex flex-1 ml-20">
      <ul className="flex items-center text-sm text-gray-600 *:p-3">
        {
          headerData.navigation.map((item, idx)=>{
            if(item.href){
        return <li key={idx}>
          <ActiveLink className="font-heading hover:text-black" href={item.href} label={item.name}/>
        </li>
            } else if(item.dropdown == "grouped"){
             return <ServicesDropdown data={item} key={idx}/>
            } else if(item.dropdown == "listed"){
              return <ListDropdown data={item} key={idx}/>
            }
})
        }
      </ul>
    </nav>
  );
};

export default DesktopNav;
