
import Team from '@/components/Team/Team'
import Navheader from '@/components/header'
import { Calistoga } from 'next/font/google'
import React from 'react'

const page = () => {
  return (
    <div className=' min-h-svh '>
      <Navheader/>
    <Team/>
    
    </div>
  )
}

export default page