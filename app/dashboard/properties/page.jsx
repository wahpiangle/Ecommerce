import React from 'react'

const page = () => {
  return (
    <div>
      <div className='flex justify-between'>
        <h1 className='text-primaryText text-2xl font-semibold'>Property List</h1>
        <button className='bg-blueText hover:brightness-75 rounded-lg py-3 px-4'>+ Add Property</button>
      </div>
    </div>
  )
}

export default page