'use client'

import { useSearchParams } from "next/navigation"
import { AiOutlineSearch } from "react-icons/ai"
import { BsChevronDown } from "react-icons/bs"
import { useState } from "react"
import Datepicker from "./components/Datepicker"
import SelectLocation from "./components/SelectLocation"
import Pricepicker from "./components/Pricepicker"


const page = () => {
  const searchParams = useSearchParams();
  const [dates, setDates] = useState([]);
  const [ location, setLocation ] = useState('Anywhere');
  const defaultMaxPrice = 1000000;
  const [ price, setPrice ] = useState([0, defaultMaxPrice]);

  let type = searchParams.get('type');
  if (type !== 'purchase' && type !== 'rent') {
    type = 'rent';
  }

  return (
    <div className="bg-black">
      <div className="sm:px-32 px-12 py-8">
        <header>
          <h1 className="text-primaryText text-4xl font-display font-medium">Search Properties to {type.charAt(0).toUpperCase() + type.slice(1)}</h1>
        </header>
        <div className='flex bg-white rounded-lg w-full p-3 mt-4'>
          <SelectLocation location={location} setLocation={setLocation} />
          <div className='border-r-2 border-[#e1e1e1] px-6 flex-1'>
            <h2 className='text-secondaryText'>When</h2>
            <div className='flex items-center justify-between gap-4 mt-1 cursor-pointer group'>
              <Datepicker setDates={setDates}/>
            </div>
          </div>
          <div className='border-r-2 border-[#e1e1e1] px-6 flex-1 '>
            <h2 className='text-secondaryText'>Price</h2>
              <Pricepicker defaultPrice={defaultMaxPrice} setPrice={setPrice} price={price}/>
          </div>
          <div className='border-r-2 border-[#e1e1e1] px-6 flex-1 '>
            <h2 className='text-secondaryText'>Property Type</h2>
            {/*TODO: Add type selection*/}
            <div className='flex items-center gap-4 mt-1 justify-between cursor-pointer group'>
              <h1 className='font-bold text-lg whitespace-nowrap'>Landed</h1>
              <div className="bg-blueText p-2 rounded-full">
                <BsChevronDown className='text-lg text-white group-hover:brightness-90' />
              </div>
            </div>
          </div>
          <button>
            Search
          </button>
          <div className='sm:hidden flex items-center my-auto h-[50px] ml-2 bg-blueText flex-1 rounded-lg justify-center w-[50px]'>
            <AiOutlineSearch className='text-2xl text-primaryText' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default page