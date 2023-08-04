import SelectLocation from "./SelectLocation"
import Pricepicker from "./Pricepicker"
import Typepicker from "./Typepicker"
import Datepicker from "./Datepicker"
import { AiOutlineSearch } from "react-icons/ai"

const PropertyFilter = ({ location, setLocation, setDates, defaultMaxPrice, price, setPrice, propertyType, setPropertyType, handleSearch }) => {
    return (
    <>
        <div className='lg:flex hidden bg-primary rounded-lg min-w-full p-3 mt-4'>
            <SelectLocation location={location} setLocation={setLocation} />
            <div className='border-r-2 border-secondaryText px-3 flex-1'>
                <h2 className='text-secondaryText'>When</h2>
                <div className='flex items-center justify-between gap-4 mt-1 cursor-pointer group'>
                    <Datepicker setDates={setDates} />
                </div>
            </div>
            <div className='border-r-2 border-secondaryText px-3 flex-1 '>
                <h2 className='text-secondaryText'>Price</h2>
                <Pricepicker defaultMaxPrice={defaultMaxPrice} setPrice={setPrice} price={price} />
            </div>
            <div className='border-r-2 border-secondaryText px-3 flex-1 '>
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
    </>
    )
}

export default PropertyFilter