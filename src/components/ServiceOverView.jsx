import Wrapper from "@/components/Wrapper";
import TextContainer from "@/components/TextContainer";
import CapsuleHeading from "./CapsuleHeading";
import Wrapper2 from "./Wrapper2";

export default function ServiceOverView({ data }) {
  return (
    <Wrapper
      className={`max-w-[1100px] border-b border-gray-400 py-16 ${data.wrapperStyle}`}
    >
      {/* container  */}
      <Wrapper2 className={`${data.mainContainerStyle}`}>
        {/* capsule heading  */}
        <CapsuleHeading text={data.capsuleHeading}/>
        {/* left container  */}
        <div className="max-w-2xl">
          <h2 className="gapt-3 font-semibold capitalize">{data.mainHeading}</h2>
          {/* paragraph */}
          <p
            className="p2 gapt-1 mt-4 text-gray-600"
            dangerouslySetInnerHTML={{ __html: data.mainPara }}
          ></p>
        </div>
        <div className="lg:grid lg:grid-cols-2 gap-2 gapt-2">
          {/* text containers */}
          {data.subTextContainer.map((ele, index) => (
            <TextContainer key={index} data={ele} />
          ))}
        </div>
      </Wrapper2>
    </Wrapper>
  );
}
