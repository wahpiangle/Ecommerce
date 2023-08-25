import { AiOutlineSearch } from "react-icons/ai"

const SearchButton = ({ handleSearch, isWideScreen }) => {
    return (
        <>
            <div className="flex items-center pl-2 flex-1 w-full">
                <button className="text-white bg-blueText rounded-lg px-3 py-2 hover:brightness-90" onClick={handleSearch}>
                    Search
                </button>
            </div>
            <div className='sm:hidden flex items-center my-auto h-[50px] ml-2 bg-blueText flex-1 rounded-lg justify-center w-[50px]'>
                <AiOutlineSearch className='text-2xl text-primaryText' />
            </div>
        </>
    )
}

export default SearchButton