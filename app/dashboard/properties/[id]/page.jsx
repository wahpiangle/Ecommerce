'use client'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import useSWR from 'swr'
import getPropertyData from '@/app/actions/getPropertyData'

const page = () => {
  const { id } = useParams()
  const { data, error, isLoading } = getPropertyData(id)
  return (
    <div>
      <Link className='text-primaryText text-xl font-semibold cursor-pointer' href="/dashboard/properties">
        <span className="font-bold text-2xl mr-2">{'<'}</span>
        Details
      </Link>
      <div>
        
      </div>
    </div>
  )
}

export default page