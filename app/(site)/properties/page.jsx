'use client'

import { useSearchParams } from "next/navigation"
import { useState } from "react"
import PropertyCard from "./components/PropertyCard"
import PropertyFilter from "./components/PropertyFilter"
import { useSession } from "next-auth/react"
import { IoOptionsOutline } from 'react-icons/io5'

const page = () => {
  const searchParams = useSearchParams();
  const [dates, setDates] = useState([]);
  const [location, setLocation] = useState('Anywhere');
  const defaultMaxPrice = 10000000;
  const [price, setPrice] = useState([0, defaultMaxPrice]);
  const [propertyType, setPropertyType] = useState('Any Type');
  const [userWishList, setUserWishList] = useState([1, 2])
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
      size: 1233,
      rating: 0,
      images: [
        'https://dummyimage.com/200x100'
      ],
      facilities: [
        'Wifi',
        'Parking'
      ],
      booked: false,
      purchased: false,
      country: 'United Arab Emirates'
    },
    {
      id: 2,
      title: 'Test',
      type: 'Landed',
      address: 'Test',
      listingType: 'Rent',
      rentalPrice: 123,
      bedroom: 3,
      bathroom: 2,
      size: 1233,
      rating: 0,
      images: [
        'https://dummyimage.com/200x100'
      ],
      facilities: [
        'Wifi',
        'Parking'
      ],
      booked: false,
      purchased: false,
      country: 'United Arab Emirates'
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
      size: 1233,
      rating: 0,
      images: [
        'https://dummyimage.com/200x100'
      ],
      facilities: [
        'Wifi',
        'Parking'
      ],
      booked: false,
      purchased: false,
      country: 'United Arab Emirates'
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
      <div className="lg:px-32 md:px-24 sm:px-12 px-6 py-8">
        <header className="flex justify-between">
          <h1 className="text-primaryText text-4xl font-display font-medium">Search Properties to {type.charAt(0).toUpperCase() + type.slice(1)}</h1>
          <div className="flex items-center gap-1 px-4 py-2 bg-blueText rounded-lg text-primaryText lg:hidden">
            <IoOptionsOutline className="text-2xl" />
            <p>Filter</p>
          </div>
        </header>
        <PropertyFilter
          location={location}
          setLocation={setLocation}
          setDates={setDates}
          defaultMaxPrice={defaultMaxPrice}
          price={price}
          setPrice={setPrice}
          propertyType={propertyType}
          setPropertyType={setPropertyType}
          handleSearch={handleSearch}
        />

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