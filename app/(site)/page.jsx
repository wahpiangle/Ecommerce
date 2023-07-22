'use client'
import React from 'react'
import Header from './components/Header'
import About from './components/About'

const page = () => {
  return (
    <div className='bg-black sm:px-32 px-12 py-10 sm:py-10'>
      <Header/>
      <About/>
    </div>
  )
}

export default page