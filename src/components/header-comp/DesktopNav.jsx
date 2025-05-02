import Link from "next/link";
import ServicesDropdown from "@/components/header-comp/ServicesDropdown";
import { headerData } from "@/data/homepage-data/headerData";

const DesktopNav = () => {
  return (
    <nav className="hidden lg:flex flex-1 ml-20">
      <ul className="flex items-center text-sm text-gray-600 *:p-3">
        {
          headerData.navigation.map((item, idx)=>{
            if(item.href){
        return <li key={idx}>
          <Link className="font-heading hover:text-black" href={item.href}>
          {item.name}
          </Link>
        </li>
            } else if(item.dropdown){
             return <ServicesDropdown data={item} key={idx}/>
            }
})
        }
      </ul>
    </nav>
  );
};

export default DesktopNav;
