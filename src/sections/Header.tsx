import Logo from '@/assets/Logo.png';
import Image from "next/image";
import { Button } from "@/components/ui/button";
import MenuIcon from "@/assets/menu.svg";
import Heropic from '@/assets/Hero-Section.png';

export const Header = () => {
  return (
    <header
      className="sticky"
    >
      <div className="container relative z-10">
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center">
            <Image src={Logo} alt='Logo' height={5.61} width={234} />
            <nav className='hidden md:flex flex-grow justify-center gap-6 ml-6 items-center'>
              <a href="#" className='text-white hover:underline decoration-orange-500'>Home</a>
              <a href="#" className='text-white hover:underline decoration-orange-500'>Explore</a>
              <a href="#" className='text-white hover:underline decoration-orange-500'>Travel</a>
              <a href="#" className='text-white hover:underline decoration-orange-500'>Blog</a>
              <a href="#" className='text-white hover:underline decoration-orange-500'>Pricing</a>
            </nav>
          </div>
          <div className='hidden md:flex gap-2 items-center'>
            <Button className='font-medium' variant="default">Login In</Button>
            <Button className='font-medium' variant="orange">Sign Up</Button>
          </div>
          <MenuIcon className="md:hidden h-5 w-5" />
        </div>
      </div>
    </header>
  );
};
