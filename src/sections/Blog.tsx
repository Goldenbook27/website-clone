import blogimage from '@/assets/Image Container.png'
import Image from 'next/image';
export const Blog = () => {
  return <>
    <div className="relative">
    <div className="relative  flex flex-col justify-center min-h-52">
          <h1 className="text-7xl text-black underline decoration-orange-500 p-5">Our Blog</h1>
          <div className=" flex justify-between text-black p-5">An insight the incredible experience in the world
            </div>
            <div className='flex'>
              <Image src={blogimage} alt='image'/>
              <div className='gap-5'><h1 className='text-5xl'>Beautiful Italy Let’s travel </h1>
              <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound the actual teachings of the great explorer of the truth, the master- builder of human happiness. No one rejects, dislike, or avoids plasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremly painful. Nor again is there anyone who loves or pursues.</p>
              <h2 className='text-[#FFA500]'>Read More</h2>
              </div>
            </div>
    </div>
    </div>
  </>;
};
