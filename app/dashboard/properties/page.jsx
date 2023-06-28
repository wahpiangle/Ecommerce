'use client'
import { useState } from "react"
import PropertyBox from "./components/PropertyBox"

const page = () => {
  const [search, setSearch] = useState('')
  return (
    <div>
      <div className='flex justify-between'>
        <h1 className='text-primaryText text-2xl font-semibold'>Property List</h1>
        <button className='bg-blueText hover:brightness-75 rounded-lg py-3 px-4'>+ Add Property</button>
      </div>
      <div className='bg-primary rounded-lg mt-4 p-3'>
        <input type='text' placeholder='Search' className='bg-primary text-primaryText rounded-lg p-2 w-full' onChange={(e) => setSearch(e.target.value)} value={search} />
        <div className="mt-4 grid grid-cols-2">
          <PropertyBox />
        </div>
      </div>
    </div>
  )
}

export default page