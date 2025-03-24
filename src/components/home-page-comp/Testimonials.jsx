import CapsuleHeading from "../CapsuleHeading";
import Wrapper from "../Wrapper";
import Wrapper2 from "../Wrapper2";
import UserCard from "./UserCard";

const reviews = [
    { 
      name: "John Doe", 
      image: "user_1.jpeg", 
      comment: "The entire experience was seamless and professional. The team was highly responsive, ensuring every detail was covered. I am beyond satisfied with the service and highly recommend it to anyone looking for quality work.", 
      post: "Software Engineer" 
    },
    { 
      name: "Jane Smith", 
      image: "user_2.jpeg", 
      comment: "From start to finish, everything was handled perfectly. The communication was clear, and the results exceeded my expectations. I appreciate the effort and dedication put into delivering such a fantastic experience.", 
      post: "Project Manager" 
    },
    { 
      name: "Alex Johnson", 
      image: "user_3.jpeg", 
      comment: "This was by far one of the best services I have used. The quality, professionalism, and attention to detail were outstanding. I will definitely be coming back for more projects in the future.", 
      post: "UI/UX Designer" 
    },
    { 
      name: "Emily Davis", 
      image: "user_4.jpeg", 
      comment: "Every aspect of the service was well thought out and executed flawlessly. I was impressed with the level of dedication and effort put into ensuring a great outcome. I highly recommend this service to others.", 
      post: "Marketing Specialist" 
    },
    { 
      name: "Michael Brown", 
      image: "user_5.jpeg", 
      comment: "The team provided outstanding service with great attention to detail. They were extremely professional, and the final results were exactly what I needed. I will surely recommend this to my colleagues and friends.", 
      post: "Product Manager" 
    },
    { 
      name: "Sarah Wilson", 
      image: "user_6.jpeg", 
      comment: "A truly remarkable experience from start to finish. The customer support was excellent, and the final product was beyond my expectations. I appreciate the effort and professionalism that went into this project.", 
      post: "Content Writer" 
    },
    { 
      name: "David Martinez", 
      image: "user_7.jpeg", 
      comment: "The level of expertise and dedication was evident in every step of the process. The team ensured I was satisfied with the outcome, and their attention to detail truly made a difference. Highly recommended.", 
      post: "Business Analyst" 
    },
    { 
      name: "Laura Garcia", 
      image: "user_8.jpeg", 
      comment: "Exceptional service with great results. The process was smooth, and I was kept informed throughout. I appreciate the professionalism and commitment to excellence. This was a truly pleasant experience.", 
      post: "HR Manager" 
    },
    { 
      name: "James Anderson", 
      image: "user_9.jpeg", 
      comment: "One of the best experiences I have had. The service was top-notch, and the results exceeded my expectations. Everything was delivered on time and with great quality. I will definitely use this again.", 
      post: "Sales Executive" 
    },
    { 
      name: "Olivia Thompson", 
      image: "user_10.jpeg", 
      comment: "Professional, efficient, and highly reliable. The attention to detail and commitment to quality were evident in the final product. I am extremely happy with the service and will recommend it to others.", 
      post: "Operations Manager" 
    }
  ];
  
export default function Testimonials() {
  return (
    <Wrapper className={""}>
      <Wrapper2 className={"py-16"}>
        <div>
        <CapsuleHeading text={"Testimonials"} />
        <h2 className="lg:text-4xl font-thin gapt-3">Don't take our word for it!</h2>
        <h2 className="lg:text-4xl font-thin">Hear it from our partners</h2>
        </div>
        <div className="gapt-1 flex gap-5 w-full overflow-x-auto">
            {
                reviews.map(({image,name,post,comment},index)=> {
                return <UserCard image={image} name={name} post={post} comment={comment} key={index}/>
            })
            }
        </div>
      </Wrapper2>
    </Wrapper>
  );
}
