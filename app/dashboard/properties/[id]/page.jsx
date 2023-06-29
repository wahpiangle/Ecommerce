'use client'
import Link from 'next/link'
const page = () => {
  return (
    <div>
      <Link className='text-primaryText text-xl font-semibold cursor-pointer' href="/dashboard/properties">
        <span className="font-bold text-2xl mr-2">{'<'}</span>
        Return to Property Selection</Link>
    </div>
  )
}

export default page