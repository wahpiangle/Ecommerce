'use client'
import useSWR from "swr"

const Page = ({ params }) => {
  const propertyId = params.id
  const fetcher = (url) => fetch(url).then((res) => res.json())
  const { data, error, isLoading } = useSWR(`/api/properties/${propertyId}`, fetcher)
  console.log(data)
  return (
    <div className="text-white h-screen">
      dd
    </div>
  )
}

export default Page