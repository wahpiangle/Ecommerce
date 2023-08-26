import { AiOutlineSearch } from "react-icons/ai"

const SearchButton = ({ handleSearch, isWideScreen }) => {
    return (
        <>
            <div className="flex items-center flex-1 justify-center">
                <button className="text-white bg-blueText rounded-lg py-3 px-2 mx-8 hover:brightness-90 font-semibold text-xl w-full" onClick={handleSearch}>
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