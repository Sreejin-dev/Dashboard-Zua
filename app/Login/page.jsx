import Login from '@/components/Login/Login'
import WhyZou from '@/components/Login/WhyZou'
import Navheader from '@/components/header'
import React from 'react'

const page = () => {
  return (
    <div >
      <Navheader/>
        <Login/>
        <WhyZou/>
    </div>
  )
}

export default page
