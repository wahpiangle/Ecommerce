import { AiOutlineSearch } from 'react-icons/ai'

const Searchbar = () => {
  return (
    <div className='bg-[#111315] flex items-center px-3 py-2 gap-4 rounded-lg flex-1 justify-center'>
        <AiOutlineSearch className='text-secondaryText'/>
    <input className='bg-[#111315] placeholder:text-secondaryText placeholder:text-sm text-secondaryText focus:outline-none w-[500px]' placeholder="Search Property, Customer etc..."/>
    </div>
  )
}

export default Searchbar