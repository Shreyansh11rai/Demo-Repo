import Link from "next/link";

const CenterDropdown = ({ data, activeList }) => {
  return (
    <ul className="col-span-4 rounded-e-md bg-white p-6 h-[25rem]">
      {data.map((ele, ind) => (
        <li
          key={ind}
          className={`transition-all duration-500 ${activeList !== ind ? "h-0 overflow-hidden" : "h-40"}`}
        >
          <nav className="flex flex-col gap-4">
            {ele.links.map((item, index) => {
              let slug;
              if(!item.href){slug = item.split(" ").join("-").toLowerCase() ;};
              return (
                <Link
                  key={index}
                  href={slug ? `/${slug}` : item.href}
                  className="flex items-center justify-between border-b border-gray-400 hover:font-medium hover:text-black"
                >
                  <svg
                    className="h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path>
                  </svg>
                  {slug ? item : item.name}
                </Link>
              );
            })}
          </nav>
        </li>
      ))}
    </ul>
  );
};

export default CenterDropdown;
