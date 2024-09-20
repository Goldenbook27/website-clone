"use client"
import Heropic from '@/assets/Hero-Section.png';
import Image from "next/image";
import { Header } from './Header';
import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import { Check, ChevronsUpDown } from "lucide-react"


import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import { Destination } from './Destination';
import { Head } from 'react-day-picker';

export const Hero = () => {
  return (
    <>
    {/* <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${Heropic.src})` }} />
    <Header/>
    <section className="">
      <div className="container relative ">
        
        <div className="relative  flex flex-col justify-center min-h-screen">
          <h1 className="text-7xl text-white ">Start your unforgettable journey with us</h1>
          <div className="text-white ">The best travel for your journey begins now</div>
        </div>
        <div className='h-1/4 w-5/6 bg-white justify-center items-center'>
            <ComboboxDemo/>
          <DatePickerDemo text='Check In'/>
          <DatePickerDemo text='Check Out'/>
          <Button variant={'orange'}>Book Now</Button>
        </div>
      </div>

    </section> */}
    <div className="relative">
        <Image src={Heropic} alt="Hero Section Image" layout="responsive" width={1200} height={800} className="rounded-lg shadow-lg" />
        <div className="absolute inset-x-0 top-0 flex min-h-screen flex-col  justify-center text-center">
        <Header/>
        <div className="relative  flex flex-col justify-center min-h-screen">
          <h1 className="text-7xl text-white ">Start your unforgettable journey with us</h1>
          <div className="text-white ">The best travel for your journey begins now</div>
        </div>
        <div className='h-1/4 w-5/6 bg-white justify-center items-center'>
            <ComboboxDemo/>
          <DatePickerDemo text='Check In'/>
          <DatePickerDemo text='Check Out'/>
          <Button variant={'orange'}>Book Now</Button>
        </div>
        </div>
      </div>
    </>
  );
};


export function DatePickerDemo({text}:any) {
  const [date, setDate] = React.useState<Date>()
 
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[280px] justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>{text}</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}



const destination = [
  {
    value: "Dubai",
    label: "Dubai",
  },
  {
    value: "Chennai",
    label: "Chennai",
  },
  {
    value: "Delhi",
    label: "Delhi",
  }
]

export function ComboboxDemo() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? destination.find((destination) => destination.value === value)?.label
            : "Select destination..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search destination..." />
          <CommandList>
            <CommandEmpty>No destination found.</CommandEmpty>
            <CommandGroup>
              {destination.map((destination) => (
                <CommandItem
                  key={destination.value}
                  value={destination.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === destination.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {destination.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
