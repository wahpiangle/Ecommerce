'use client'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { BiBath, BiMapPin } from 'react-icons/bi'
import { Rating } from '@mui/material'
import { BiBed } from 'react-icons/bi'
import { BsSlashSquare, BsThreeDots } from 'react-icons/bs'
import dynamic from 'next/dynamic'
import { useMemo } from 'react'
import FacilityItem from './components/FacilityItem'
import Loader from '@/app/components/Loader'
import useSWR from 'swr'
import axios from 'axios'
import useCountries from '@/app/actions/useCountries'

const page = () => {
  const { id } = useParams()
  const { getByLabel } = useCountries()

  const fetcher = async (url) => {
    const response = await axios.get(url).then(res => res.data)
    return response
  }

  const { data, error, isLoading } = useSWR(`/api/property/${id}`, fetcher)
  const listingType = data?.listingType
  const Map = useMemo(() => dynamic(() => import('./components/Map'), {
    ssr: false
  }), [data])
  return (
    <div className='bg-primary rounded-xl p-4 mx-2'>
      <Link className='text-primaryText text-xl font-semibold cursor-pointer' href="/dashboard/properties">
        <span className="font-bold text-2xl mr-2">{'<'}</span>
        Details
      </Link>
      {isLoading ? <Loader /> :
        error ? <p>An Error has occured. Please try again.</p> :
          <div>
            <div className="mt-6 flex gap-4 flex-wrap">
              <div className='flex-1 flex flex-col justify-center'>
                <Carousel showArrows={true} showThumbs={false} className='w-fit h-fit'>
                  {/* {data?.images?.map((item) => (
              <div key={item.id}>
                <Image src={item.image}/>
              </div>
            ))} */}
                  <div>
                    <Image src="http://dummyimage.com/600x300.png/5fa2dd/ffffff" width={600} height={300} alt='property-image' />
                  </div>
                  <div>
                    <Image src="http://dummyimage.com/600x300.png/5fa2dd/ffffff" width={600} height={300} alt='property-image' />
                  </div>
                </Carousel>
                <div className='flex justify-between flex-wrap'>
                  <div className='mt-1 w-full'>
                    <h2 className='text-sm'>{data.type}</h2>
                    <h1 className='text-2xl mt-2'>{data.title}</h1>
                    <div className='flex justify-between'>
                      <div className="flex gap-1 items-center text-sm mt-2">
                        <BiMapPin className="text-secondaryText" />
                        <p className="text-secondaryText">{data.address.description || ""}</p>
                      </div>
                      <div>
                        {getByLabel(data.country).flag}
                      </div>
                    </div>
                    <div className='mt-3 flex gap-4'>
                      <div className="flex items-center text-primaryText gap-1 text-sm whitespace-nowrap">
                        <BiBed />
                        <p>{data.bedroom} Beds</p>
                      </div>
                      <div className="flex items-center text-primaryText gap-1 text-sm whitespace-nowrap">
                        <BiBath />
                        <p>{data.bathroom} Bathrooms</p>
                      </div>

                      <div className="flex items-center text-primaryText gap-1 text-sm whitespace-nowrap">
                        <BsSlashSquare />
                        <p>{data.size} sqft</p>
                      </div>
                    </div>
                  </div>
                  <div className='mt-2'>
                    <div className='flex items-center'>
                      <Rating
                        name="read-only"
                        value={data.rating}
                        precision={0.1}
                        readOnly
                        size='large'
                      />
                      <p className='text-xs text-secondaryText'>({data.rating})</p>
                    </div>
                    <h1 className='mt-2'>Price</h1>
                    <p className='text-sm text-secondaryText'><span className='text-xl text-blueText font-bold'>${listingType === 'Rent' ? data.rentalPrice : data.salePrice} </span>For One Day</p>
                  </div>
                </div>
                <div>
                  <h1 className='text-xl mt-5'>Facilities</h1>
                  <div className='mt-4'>
                    {data.facilities.map((item) => (
                      <FacilityItem facility={item} key={item} />
                    ))}
                  </div>
                  <h1 className='text-xl mt-5'>Description</h1>
                  <p className='text-secondaryText text-sm'>{data.description}</p>
                </div>
              </div>
              <div className='flex-1 flex flex-col gap-4'>
                <div className='p-6 flex whitespace-nowrap border-[1px] items-center border-secondaryText rounded-xl min-w-max flex-col'>
                  <BsThreeDots className='text-2xl self-end text-secondaryText' />
                  <Image src="http://dummyimage.com/100x100.png/5fa2dd/ffffff" width={100} height={100} alt='agent-image' className='rounded-full' />
                  <h1 className='text-xl mt-2'>{data.agent || "No Agent Assigned"}</h1>
                  <p className='mt-2 text-secondaryText'>{data.contact || ""}</p>
                </div>
                <Map location={data.geocode} />
              </div>
            </div>
          </div>}
    </div>
  )
}

export default page