import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"

export const Newsletter = () => {
  return <>
    <div className="container flex gap-7 card-news w-screen">
      <div className="text-5xl">
        Our Newsletter
      </div>
      <div>
        <h1>Email</h1>
        <Input type="Email" color='orange'placeholder="Enter your email"/>
      </div>
      <div>
        <Button variant={"orange"}>Subscribe</Button>
      </div>
    </div>
  </>;
};
