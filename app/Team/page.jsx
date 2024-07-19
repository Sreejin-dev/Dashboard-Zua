
import Team from '@/components/Team/Team'
import Navheader from '@/components/header'
import { Calistoga } from 'next/font/google'
import React from 'react'
import Image from "next/image";
import bgimage from "@/assets/zoulogo.jpeg";
const page = () => {
  return (
    <div className=' min-h-svh h-full overflow-hidden flex items-center justify-center relative '>
     

       <Image
    src={bgimage}
    alt="non"
    width={500}
    className="fixed rounded-full opacity-10  z-0"
    />
     
      <div className='z-10'> 
        
    <Navheader/>
    <Team/>
    
      </div>
    </div>
  )
}

export default page