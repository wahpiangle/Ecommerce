'use client'
import { CircularProgress } from "@mui/material"
import useSWR from "swr"
import { IoArrowBackCircleOutline } from "react-icons/io5"
import Link from "next/link"
import PropertyInfo from "./components/PropertyInfo"

const Page = ({ params }) => {
  const propertyId = params.id
  const fetcher = (url) => fetch(url).then((res) => res.json())
  const { data, error, isLoading } = useSWR(`/api/properties/${propertyId}`, fetcher)
  console.log(data)
  return (
    <div className="text-white h-screen">
      <Link href="/properties" className="flex items-center gap-2 text-2xl mb-4">
        <IoArrowBackCircleOutline className="text-3xl" />
        <h1>Back to Properties</h1>
      </Link>
      {isLoading ?
        <div className="flex justify-center items-center h-screen">
          <CircularProgress />
        </div>
        :
        error ?
          <div className="flex justify-center items-center h-screen">
            <h1>There was an error retrieving the property info. Please refresh the page and try again.</h1>
          </div>
          :
          <PropertyInfo data={data} />
      }
    </div>
  )
}

export default Page