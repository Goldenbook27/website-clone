import avatar1 from "@/assets/Avatar.png";
import avatar2 from '@/assets/Avatar (1).png'
import avatar3 from '@/assets/Avatar (2).png'
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton"

const testimonials = [
  {
    text: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound the actual teachings of the great explorer of the truth, the master- builder of human happiness.",
    imageSrc: avatar1,
    name: "Tamara Bellis",
    job:'Managing Director, JTH'
  },
  {
    text: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound the actual teachings of the great explorer of the truth, the master- builder of human happiness. ",
    imageSrc: avatar2,
    name: "John Smith",
    job:"Journalist, HWO News"
  },
  {
    text: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound the actual teachings of the great explorer of the truth, the master- builder of human happiness.",
    imageSrc: avatar3,
    name: "John Doe",
    job: "accountant"
  }
];

export const Testimonials = () => {
  return <>
  <div className="container bg-white py-0">
  <div className="relative  flex flex-col justify-center min-h-52">
          <h1 className="text-7xl text-black underline decoration-orange-500 p-5">Traveler’s Experiences</h1>
          <div className=" flex justify-between text-black p-5">Here some awesome feedback from our travelers
  </div>
  </div>
  <div className="flex gap-5">
    {testimonials.map(({text,imageSrc,name,job})=>(
      <div className="card">

        <div>{text}</div>
        <div>
          <Image src={imageSrc} alt='image'width={40} height={40} className="h-10 w-10 rounded-full"/>
        </div>
        <div>
          {name}
          </div>
          <div>
            {job}
            </div>
            
      </div>
      
    ))}
  </div>
  </div>
  </>;
};
