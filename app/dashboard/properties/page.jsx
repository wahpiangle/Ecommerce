'use client'
import { useMemo, useState } from "react"
import PropertyBox from "./components/PropertyBox"
import ReactPaginate from "react-paginate"
import Link from "next/link"
import axios from "axios"
import useSWR from "swr"
import Loader from "../../components/Loader"
import { toast } from "react-hot-toast"

const PropertyItems = ({ currentItems }) => {
  return (
    <>
      {currentItems && currentItems.map((item) => (
        <PropertyBox key={item.id} id={item.id} images={item.images} title={item.title} price={item?.rentalPrice || item?.salePrice} location={item.address.description} beds={item.beds} size={item.size} listingType={item.listingType} />
      ))}
    </>
  )
}

const Page = () => {
  const fetcher = async (url) => {
    const response = await axios.get(url).then(res => res.data)
    return response
  }

  const { data, isLoading, error } = useSWR(`/api/property/get`, fetcher);
  const [search, setSearch] = useState('')
  const [itemOffset, setItemOffset] = useState(0);
  const [filteredResult, setFilteredResult] = useState([])

  useMemo(() => {
    if (!data) return
    if (error) toast.error('Failed to load properties. Please refresh the page.')
    const filteredData = data.filter(item => {
      return item.title.toLowerCase().includes(search.toLowerCase())
    }, [search, data])

    if (search !== '') {
      setFilteredResult(filteredData)
    }
    else {
      setFilteredResult(data)
    }
  }, [search, data, error])

  //number 10 indicates number of items per page
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

  console.log(currentItems)
  return (
    <div>
      <div className='flex justify-between mx-2 items-center'>
        <h1 className='text-primaryText text-2xl font-semibold whitespace-nowrap'>Property List</h1>
        <Link className='bg-blueText hover:brightness-75 rounded-lg py-3 px-4 whitespace-nowrap' href="properties/create">+ Add Property</Link>
      </div>
      <div className='bg-primary rounded-lg mt-4 p-3 mx-2'>
        {isLoading ? <Loader /> :
          error ? <p>Failed to load properties. Please refresh the page.</p> :
            <>
              <input type='text' placeholder='Search' className='bg-primary focus:outline-none text-primaryText rounded-lg p-2 mt-2 w-full border-[1px] border-secondaryText' onChange={(e) => searchItems(e.target.value)} />
              <div className="mt-4 grid md:grid-cols-2">
                <PropertyItems currentItems={currentItems} />
              </div>
            </>
        }
        {
          filteredResult.length === 0 && !isLoading && !error && <p className='text-primaryText text-center my-4'>No properties found.</p>
        }
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

export default Page