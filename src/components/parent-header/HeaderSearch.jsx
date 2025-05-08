import { FaSearch } from "react-icons/fa";

export default function HeaderSearch({className}) {
    return <span className={`group hidden sm:flex items-center justify-between rounded-full bg-slate-100 px-4 py-2 gap-2 ${className}`}>
    <FaSearch
      size={"20"}
      className="transition-all duration-150 group-hover:scale-90"
    />
    <span className="hidden sm:inline font-medium text-gray-600">Search</span>
  </span>
}