"use server"
import logo from '@/assets/Logo.png';
import Image from "next/image";
import facebook from '@/assets/facebook.webp'
import pininterest from '@/assets/pin.webp'
import twitter from '@/assets/twitter.webp'
import instagram from '@/assets/insta.webp'

export const Footer = () => {
  return (
    <>
      <footer className="bg-[#172432] text-white py-10">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-start gap-10 px-4">
          
            <div className="flex flex-col items-start">
            <Image src={logo} alt='logo' height={40} />
            <p className="mt-4">Copyright © Travellian 2020 All rights reserved</p>
          </div>
          <div className="flex flex-col">
            <h1 className="font-bold text-lg mb-4">Menu</h1>
            <ul className="space-y-2">
              <li>Home</li>
              <li>Explore</li>
              <li>Travel</li>
              <li>Blog</li>
              <li>Pricing</li>
            </ul>
          </div>

          <div className="flex flex-col">
            <h1 className="font-bold text-lg mb-4">Information</h1>
            <ul className="space-y-2">
              <li>Destinations</li>
              <li>Support</li>
              <li>Terms & Conditions</li>
              <li>Privacy</li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h1 className="font-bold text-lg mb-4">Contact Info</h1>
            
            <p>+123 456 789</p>
            <p>info@travellian.com</p>
            <p>1245, New Yourk, USA</p>
          </div>
          <div className="flex flex-col">
            <h1 className="font-bold text-lg mb-4 space-y-2">Follow us on</h1>
            
              <Image src={facebook} alt='pin-image' height={20}/>
              <Image src={pininterest} alt='pin-image' height={20}/>
              <Image src={instagram} alt='pin-image' height={20}/>
              <Image src={twitter} alt='pin-image' height={20}/>
          
          </div>
        </div>
      </footer>
    </>
  );
};
