'use client'

import { useSearchParams } from "next/navigation"
import { AiOutlineSearch } from "react-icons/ai"
import { useState } from "react"
import Datepicker from "./components/Datepicker"
import SelectLocation from "./components/SelectLocation"
import Pricepicker from "./components/Pricepicker"
import Typepicker from "./components/Typepicker"
import PropertyCard from "./components/PropertyCard"
import { useSession } from "next-auth/react"

const page = () => {
  const searchParams = useSearchParams();
  const [dates, setDates] = useState([]);
  const [location, setLocation] = useState('Anywhere');
  const defaultMaxPrice = 1000000;
  const [price, setPrice] = useState([0, defaultMaxPrice]);
  const [propertyType, setPropertyType] = useState('Landed');
  const [ userWishList, setUserWishList ] = useState([1,2])
  const test = [
    {
      id: 1,
      title: 'Test',
      type: 'Landed',
      address: 'Test',
      listingType: 'Rent',
      rentalPrice: 123,
      bedroom: 3,
      bathroom: 2,
      size:1233,
      rating: 0,
      images:[
        'https://dummyimage.com/200x100'
      ],
      facilities: [
        'Wifi',
        'Parking'
      ],
      booked: false,
      purchased: false,
      country:'United Arab Emirates'
    },
    {
      id:2,
      title: 'Test',
      type: 'Landed',
      address: 'Test',
      listingType: 'Rent',
      rentalPrice: 123,
      bedroom: 3,
      bathroom: 2,
      size:1233,
      rating: 0,
      images:[
        'https://dummyimage.com/200x100'
      ],
      facilities: [
        'Wifi',
        'Parking'
      ],
      booked: false,
      purchased: false,
      country:'United Arab Emirates'
    },
    {
      id: 3,
      title: 'Test',
      type: 'Landed',
      address: 'Test',
      listingType: 'Rent',
      rentalPrice: 123,
      bedroom: 3,
      bathroom: 2,
      size:1233,
      rating: 0,
      images:[
        'https://dummyimage.com/200x100'
      ],
      facilities: [
        'Wifi',
        'Parking'
      ],
      booked: false,
      purchased: false,
      country:'United Arab Emirates'
    }
  ]

  let type = searchParams.get('type');
  if (type !== 'purchase' && type !== 'rent') {
    type = 'rent';
  }

  const handleSearch = () => {
    //TODO setup api endpoint to search for properties
    console.log({
      dates,
      location,
      price,
      propertyType,
    });
  }

  return (
    <div className="bg-black min-h-screen">
      <div className="sm:px-32 px-12 py-8">
        <header>
          <h1 className="text-primaryText text-4xl font-display font-medium">Search Properties to {type.charAt(0).toUpperCase() + type.slice(1)}</h1>
        </header>
        <div className='flex bg-primary rounded-lg w-full p-3 mt-4'>
          <SelectLocation location={location} setLocation={setLocation} />
          <div className='border-r-2 border-secondaryText px-6 flex-1'>
            <h2 className='text-secondaryText'>When</h2>
            <div className='flex items-center justify-between gap-4 mt-1 cursor-pointer group'>
              <Datepicker setDates={setDates} />
            </div>
          </div>
          <div className='border-r-2 border-secondaryText px-6 flex-1 '>
            <h2 className='text-secondaryText'>Price</h2>
            <Pricepicker defaultPrice={defaultMaxPrice} setPrice={setPrice} price={price} />
          </div>
          <div className='border-r-2 border-secondaryText px-6 flex-1 '>
            <h2 className='text-secondaryText'>Property Type</h2>
            <Typepicker propertyType={propertyType} setPropertyType={setPropertyType} />
          </div>
          <div className="flex items-center pl-2">
            <button className="text-white bg-blueText rounded-lg px-3 py-2 hover:brightness-90" onClick={handleSearch}>
              Search
            </button>
          </div>
          <div className='sm:hidden flex items-center my-auto h-[50px] ml-2 bg-blueText flex-1 rounded-lg justify-center w-[50px]'>
            <AiOutlineSearch className='text-2xl text-primaryText' />
          </div>
        </div>
        <div className="mt-4 text-white grid grid-cols-2 gap-6 md:grid-cols-3">
          {test.map((property) => (
              <PropertyCard key={property.id} property={property} setUserWishList={setUserWishList} userWishList={userWishList} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default page