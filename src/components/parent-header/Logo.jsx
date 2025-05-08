import Image from "next/image";
import Link from "next/link";
export default function Logo({className}) {
  return (
    <div className={`logo p-1 relative right-4 flex items-center justify-center sm:justify-start ${className}`}>
      <Image
        width={60}
        height={60}
        src="/logo.png"
        alt="logo image"
      />
      <Link href={"/"} className="text-lg md:text-xl relative right-5 font-bold text-accent-primary">VK<span className="text-lg md:text-xl ml-1 font-bold text-accent-primary">SOFT</span></Link>
    </div>
  );
}
