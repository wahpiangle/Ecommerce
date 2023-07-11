'use client'
import { useEffect, useState } from "react"
import PropertyBox from "./components/PropertyBox"
import ReactPaginate from "react-paginate"
import Link from "next/link"
import axios from "axios"
import useSWR from "swr"

const PropertyItems = ({ currentItems }) => {
  return (
    <>
      {currentItems && currentItems.map((item) => (
        <PropertyBox key={item.id} id={item.id} image={item.image} title={item.title} price={item.price} location={item.location} beds={item.beds} size={item.size} />
      ))}
    </>
  )
}

const page = () => {
  const property = [
    { "id": "649cfa3efc13ae2b3d7753e7", "image": "http://dummyimage.com/100x100.png/5fa2dd/ffffff", "title": "PO Box 13210", "price": 1818, "location": "Mars", "beds": 2, "size": 1875 },
    { "id": "649cfa3efc13ae2b3d7753e8", "image": "http://dummyimage.com/100x100.png/cc0000/ffffff", "title": "Apt 899", "price": 2864, "location": "Mars", "beds": 3, "size": 2570 }
  ]

  const fetcher = (url) => axios.get(url).then((res) => res.data);
  const { data: properties, error, isLoading } = useSWR(`/api/property/get`, fetcher);
  console.log(properties)
  //number 10 indicates number of items per page
  const [search, setSearch] = useState('')
  const [itemOffset, setItemOffset] = useState(0);
  const [filteredResult, setFilteredResult] = useState(property)


  useEffect(() => {
    const filteredData = property.filter(item => {
      return item.title.toLowerCase().includes(search.toLowerCase())
    }, [search, property])

    if (search !== '') {
      setFilteredResult(filteredData)
    }
    else {
      setFilteredResult(property)
    }
  }, [search])

  const endOffset = itemOffset + 10;
  const currentItems = filteredResult.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(filteredResult.length / 10);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * 10) % filteredResult.length;
    setItemOffset(newOffset);
  };

  const searchItems = (searchValue) => {
    setSearch(searchValue)
  }


  return (
    <div>
      <div className='flex justify-between'>
        <h1 className='text-primaryText text-2xl font-semibold whitespace-nowrap'>Property List</h1>
        <Link className='bg-blueText hover:brightness-75 rounded-lg py-3 px-4 whitespace-nowrap' href="properties/create">+ Add Property</Link>
      </div>
      <div className='bg-primary rounded-lg mt-4 p-3 mx-2'>
        <input type='text' placeholder='Search' className='bg-primary focus:outline-none text-primaryText rounded-lg p-2 w-full border-[1px] border-secondaryText' onChange={(e) => searchItems(e.target.value)} />
        <div className="mt-4 grid md:grid-cols-2">
          <PropertyItems currentItems={currentItems} />
        </div>
      </div>
      <ReactPaginate
        onPageChange={handlePageClick}
        breakLabel={'...'}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        renderOnZeroPageCount={null}
        containerClassName={'pagination'}
        subContainerClassName={'pages pagination'}
        activeClassName={'active'}
      />
    </div>
  )
}

export default page