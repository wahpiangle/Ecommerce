'use client'
import { CircularProgress } from "@mui/material"
import useSWR from "swr"

const Page = ({ params }) => {
  const propertyId = params.id
  const fetcher = (url) => fetch(url).then((res) => res.json())
  const { data, error, isLoading } = useSWR(`/api/properties/${propertyId}`, fetcher)
  console.log(data)
  return (
    <div className="text-white h-screen">
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
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-semibold">{data.title}</h1>
          </div>
      }
    </div>
  )
}

export default Page