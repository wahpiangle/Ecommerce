import Image from 'next/image'
import React from 'react'
import { BsArrowRight } from 'react-icons/bs'

const LatestSales = ({ list }) => {
  return (
    <div className='w-full bg-primary rounded-xl p-6'>
      <div className='flex items-center justify-between'>
        <h1 className='font-bold text-xl'>Latest Sales</h1>
        <BsArrowRight className='text-xl cursor-pointer' />
      </div>
      <div>
        {list.map((item, index) => {
          if (index < 3) {
            return (
              <div key={index} className='flex items-center justify-between my-3'>
                <div className='flex gap-4'>
                  <Image src={item.image} width={50} height={50} alt='property' />
                  <div>
                    <h1 className='font-semibold text-md'>{item.title}</h1>
                    <p className='text-sm text-secondaryText'>{item.location}</p>
                  </div>
                </div>
                <h1 className='text-blueText font-semibold'>+${item.price}</h1>
              </div>
            )
          }
        })}
      </div>
    </div>
  )
}

export default LatestSales

