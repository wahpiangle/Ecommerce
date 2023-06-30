'use client'
import { useState } from "react"
import PropertyBox from "./components/PropertyBox"
import { property } from "@/app/data/property"
import ReactPaginate from "react-paginate"

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
  //number 10 indicates number of items per page
  const [search, setSearch] = useState('')
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + 10;
  const currentItems = property.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(property.length / 10);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * 10) % property.length;
    setItemOffset(newOffset);
  };

  return (
    <div>
      <div className='flex justify-between'>
        <h1 className='text-primaryText text-2xl font-semibold'>Property List</h1>
        <button className='bg-blueText hover:brightness-75 rounded-lg py-3 px-4'>+ Add Property</button>
      </div>
      <div className='bg-primary rounded-lg mt-4 p-3 mx-2'>
        <input type='text' placeholder='Search' className='bg-primary text-primaryText rounded-lg p-2 w-full' onChange={(e) => setSearch(e.target.value)} value={search} />
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