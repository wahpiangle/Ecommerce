'use client'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import getPropertyData from '@/app/actions/getPropertyData'
import Image from 'next/image'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { BiMapPin } from 'react-icons/bi'
import { Rating } from '@mui/material'
import { BiBed } from 'react-icons/bi'
import { BsSlashSquare } from 'react-icons/bs'

const page = () => {
  const { id } = useParams()
  const { data, error, isLoading } = getPropertyData(id)
  return (
    <div className='bg-primary rounded-xl p-4 mx-2'>
      <Link className='text-primaryText text-xl font-semibold cursor-pointer' href="/dashboard/properties">
        <span className="font-bold text-2xl mr-2">{'<'}</span>
        Details
      </Link>
      <div>
        <div className="mt-6 flex">
          <div>
            <Carousel showArrows={true} className='w-[600px] h-[300px]'>
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
            <div className='flex justify-between'>
              <div className='mt-1'>
                <h2 className='text-sm'>Property Type</h2>
                <h1 className='text-2xl mt-2'>Property Title</h1>
                <div className="flex gap-1 items-center text-sm mt-2">
                  <BiMapPin className="text-secondaryText" />
                  <p className="text-secondaryText">Property location</p>
                </div>
                <div className='mt-3 flex gap-4'>
                  <div className="flex items-center text-primaryText gap-1 text-sm whitespace-nowrap">
                    <BiBed />
                    <p>{2} Beds</p>
                  </div>
                  <div className="flex items-center text-primaryText gap-1 text-sm whitespace-nowrap">
                    <BsSlashSquare />
                    <p>{100} sqft</p>
                  </div>
                </div>
              </div>
              <div className='mt-2'>
                <div className='flex items-center'>
                  <Rating
                    name="read-only"
                    value={4.3}
                    precision={0.1}
                    readOnly
                    size='large'
                  />
                  <p className='text-xs text-secondaryText'>(4.3)</p>
                </div>
                <h1 className='mt-2'>Price</h1>
                <p className='text-sm text-secondaryText'><span className='text-xl text-blueText font-bold'>$123 </span>For One Day</p>
              </div>
            </div>
            <div>
              <h1 className='text-xl mt-5'>Facilities</h1>
              <div className='mt-4'>
                {/* Add FacilityItem.jsx */}
              </div>
              <h1 className='text-xl mt-5'>Description</h1>
              <p className='text-secondaryText text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, officia, ipsam exercitationem quaerat quos ab dolore aperiam distinctio ratione deleniti, harum labore ipsa. Ea quae quas placeat quasi aliquam ratione.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page