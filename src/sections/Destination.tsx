"use client"
import ig from '@/assets/Col-block (1).png'
import Image from "next/image";
import arrows from '@/assets/Arrow.png'
import imag1 from '@/assets/Col-block.png'
import imag2 from '@/assets/Col-block (1).png'
import imag3 from '@/assets/Col-block (3).png'
export const Destination = () => {
    return (
      <>
      <div className="relative bg-white">
      <div className="relative  flex flex-col justify-center min-h-52">
          <h1 className="text-7xl text-black underline decoration-orange-500 p-5">Popular Destinations</h1>
          <div className=" flex justify-between text-black p-5">Most popular destinations around the world, from historical places to natural wonders.
          <Image src={arrows} alt='arrow-image'/>
          </div>
        </div>
        <div className='flex'>
        <div className='relative flex rounded-sm shadow-lg w-[497px] h-[661px]'>
          <div className="relative w-full h-full bg-cover bg-center">
            <Image src={imag1} alt='london-image' className="object-cover w-full h-full" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="text-white text-2xl">Monument of Berlin</h1>
                <h1 className="text-white text-2xl">Berlin, Germany</h1>
              </div>
          </div>
        </div>
        <div className='relative flex rounded-sm shadow-lg w-[497px] h-[661px]'>
          <div className="relative w-full h-full bg-cover bg-center">
            <Image src={imag2} alt='london-image' className="object-cover w-full h-full" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="text-white text-2xl">Millennium Bridge</h1>
                <h1 className="text-white text-2xl">London, United Kingdom</h1>
              </div>
          </div>
        </div>
        <div className='relative flex rounded-sm shadow-lg w-[497px] h-[661px]'>
          <div className="relative w-full h-full bg-cover bg-center">
            <Image src={imag3} alt='london-image' className="object-cover w-full h-full" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="text-white text-2xl">Rialto Bridge</h1>
                <h1 className="text-white text-2xl">Venice, Italy</h1>
              </div>
          </div>
        </div>
        </div>
      </div>
      

     
      </>
    );
  };
  
