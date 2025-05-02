import Image from "next/image";
import Link from "next/link";
export default function TextContainer({data}) {
  let linktarget = null;
  if(data.link){
    linktarget = data.link.split(" ").join("-").toLowerCase()
    console.log("this is " + linktarget);
  }
  return (
      <div className="mt-7 border-l border-gray-400 px-4 py-2 min-w-sm relative">
          <Image className="" src={data.image} height={70} width={70} alt={data.alt}/>
          {
            data.heading && <h3>{data.heading}</h3>
          }
          {
            data.link && data.target && <Link className="h3 hover:underline" href={linktarget}>{data.link}</Link>
          }
        <p className="mt-3 text-gray-600">{data.para}</p>
        <div className="mt-3 *:underline flex gap-4 items-center">
        <Link className="text-yellow-500" href={`/pricing`}>Pricing</Link>
        <Link className="text-primaryclr" href={data.heading.split(" ").join("-").toLowerCase()}>Details</Link>
        </div>
      </div>
  );
}
