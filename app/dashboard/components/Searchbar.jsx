import { AiOutlineSearch } from 'react-icons/ai'

const Searchbar = () => {
  return (
    <div className='bg-[#111315] flex items-center px-3 py-2 gap-4 rounded-lg flex-1 justify-start'>
        <AiOutlineSearch className='text-secondaryText text-xl'/>
    <input className='bg-[#111315] w-full placeholder-transparent  sm:placeholder:text-secondaryText placeholder:text-sm text-secondaryText focus:outline-none' placeholder="Search Property, Customer etc..."/>
    </div>
  )
}

export default Searchbar