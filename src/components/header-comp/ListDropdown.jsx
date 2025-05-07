import Link from "next/link";

export default function ListDropdown({ data }) {
  return (
    <div className="group relative cursor-pointer">
      {/* Main Dropdown Trigger */}
      {data.href ? (
        <Link href={data.href} className="text-gray-700 hover:text-black">
          {data.name}
        </Link>
      ) : (
        <span className="text-gray-700 hover:text-black">{data.name}</span>
      )}

      {/* Dropdown Menu */}
      {data.dropdownData && data.dropdownData.length > 0 && (
        <div className="absolute left-0 mt-2 hidden w-48 bg-white shadow-lg group-hover:block z-50 border-2 border-gray-400 rounded-md">
          <ul className="flex flex-col">
            {data.dropdownData.map((item, idx) => (
              <li key={idx} className="border-b last:border-none">
                <Link
                  href={item.href}
                  className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-black"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
