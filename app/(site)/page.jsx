'use client'
import React from 'react'
import Header from './components/Header'
import About from './components/About'

const page = () => {
  return (
    <div className='bg-black px-36 py-20'>
      <Header/>
      <About/>
    </div>
  )
}

export default page