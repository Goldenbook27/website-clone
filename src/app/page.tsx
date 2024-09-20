import { Blog } from "@/sections/Blog";
import { Destination } from "@/sections/Destination";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { Newsletter } from "@/sections/Newsletter";
import { Footer } from "@/sections/Footer";
import { Testimonials } from "@/sections/Testimonials";
export default function Home() {
  return <>
  
  <Hero/>
  <Destination/>
  <Blog/>
  <Testimonials/>
  <Newsletter/>
  <Footer/>

  </>;
}
