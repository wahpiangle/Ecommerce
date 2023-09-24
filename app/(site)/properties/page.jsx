'use client'

import { useSearchParams } from "next/navigation"
import { useState } from "react"
import PropertyCard from "./components/PropertyCard"
import PropertyFilter from "./components/PropertyFilter"
import { useSession } from "next-auth/react"
import useSWR from "swr"
import axios from "axios"
import { mutate } from "swr"
import CircularProgress from "@mui/material/CircularProgress"
import toast from "react-hot-toast"

const Page = () => {
  const searchParams = useSearchParams();
  const [dates, setDates] = useState([]);
  const [location, setLocation] = useState('Anywhere');
  const defaultMaxPrice = 10000000;
  const [price, setPrice] = useState([0, defaultMaxPrice]);
  const [propertyType, setPropertyType] = useState('');
  const [facilities, setFacilities] = useState([]);
  const [userWishList, setUserWishList] = useState([1, 2])

  let type = searchParams.get('type');
  if (type !== 'purchase' && type !== 'rent') {
    type = 'rent';
  }

  // const properties = [
  //   {
  //     id: 1,
  //     title: 'Test',
  //     type: 'Landed',
  //     address: 'Test',
  //     listingType: 'Rent',
  //     rentalPrice: 123,
  //     bedroom: 3,
  //     bathroom: 2,
  //     size: 1233,
  //     rating: 0,
  //     images: [
  //       'https://dummyimage.com/200x100'
  //     ],
  //     facilities: [
  //       'Wifi',
  //       'Parking'
  //     ],
  //     booked: false,
  //     purchased: false,
  //     country: 'United Arab Emirates'
  //   },
  //   {
  //     id: 2,
  //     title: 'Test',
  //     type: 'Landed',
  //     address: 'Test',
  //     listingType: 'Rent',
  //     rentalPrice: 123,
  //     bedroom: 3,
  //     bathroom: 2,
  //     size: 1233,
  //     rating: 0,
  //     images: [
  //       'https://dummyimage.com/200x100'
  //     ],
  //     facilities: [
  //       'Wifi',
  //       'Parking'
  //     ],
  //     booked: false,
  //     purchased: false,
  //     country: 'United Arab Emirates'
  //   },
  //   {
  //     id: 3,
  //     title: 'Test',
  //     type: 'Landed',
  //     address: 'Test',
  //     listingType: 'Rent',
  //     rentalPrice: 123,
  //     bedroom: 3,
  //     bathroom: 2,
  //     size: 1233,
  //     rating: 0,
  //     images: [
  //       'https://dummyimage.com/200x100'
  //     ],
  //     facilities: [
  //       'Wifi',
  //       'Parking'
  //     ],
  //     booked: false,
  //     purchased: false,
  //     country: 'United Arab Emirates'
  //   }
  // ]

  const propertiesFetcher = async (url) => {
    const response = await axios.get(url)
      .then(res => res.data)
    return response
  }
  const { data, isLoading, error } = useSWR(`/api/properties?listingType=${type}`, propertiesFetcher,{
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  const handleSearch = async() => {
    const body ={
      dates,
      location,
      price,
      propertyType,
      facilities
    }
    const response = await axios.post(`/api/properties?listingType=${type}`, body)
    const data = await response.data
    mutate(`/api/properties?listingType=${type}`, data, {revalidate: false})
  }
  return (
    <div className="bg-black min-h-screen h-full">
      <div className="">
        <div className="flex flex-wrap justify-between items-center">
          <h1 className="text-primaryText text-4xl font-display font-medium">Search Properties to {type.charAt(0).toUpperCase() + type.slice(1)}</h1>
          <PropertyFilter
            location={location}
            setLocation={setLocation}
            setDates={setDates}
            defaultMaxPrice={defaultMaxPrice}
            price={price}
            facilities={facilities}
            setFacilities={setFacilities}
            setPrice={setPrice}
            propertyType={propertyType}
            setPropertyType={setPropertyType}
            handleSearch={handleSearch}
            listingType={type}
          />
        </div>

        <div
          className="mt-6 text-white grid gap-8 justify-start 2xl:grid-cols-4 xl:grid-cols-3 sm:grid-cols-2">
          {
            isLoading ?
            <div className="col-[1/-1] w-full flex justify-center items-center h-32">
              <CircularProgress/>
            </div>:
            !data ?
            <div className="col-[1/-1] w-full flex justify-center items-center h-32">
              <p className="text-lg">No Properties Found</p>
            </div>:
            data.map((property) => (
              <PropertyCard key={property.id} property={property} setUserWishList={setUserWishList} userWishList={userWishList} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Page