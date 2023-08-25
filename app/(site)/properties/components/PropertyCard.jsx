import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { LuBedDouble } from 'react-icons/lu'
import { BiBath, BiArea } from 'react-icons/bi'
import Link from 'next/link'
import Image from 'next/image'

const PropertyCard = ({ property, setUserWishList, userWishList }) => {
    const handleWishListClick = () => {
        if (userWishList.includes(property.id)) {
            setUserWishList(userWishList.filter(id => id !== property.id))
        }
        else {
            setUserWishList([...userWishList, property.id])
        }
    }
    return (
        <div className="rounded-lg flex flex-col justify-center flex-initial">
            <Link href={`/properties/${property.id}`}>
                <Image src={property.images[0]} alt={property.title} className="rounded-t-lg" width={600} height={800} />
            </Link>
            <div className="flex flex-col gap-1 text-white bg-primary p-3 rounded-b-lg">
                <div className='flex justify-between items-center'>
                    <div className="flex gap-1 items-center">
                        <h1 className="text-xl text-blueText font-semibold">${property.rentalPrice}</h1>
                        <span className="text-sm text-secondaryText">/night</span>
                    </div>
                    <div className='rounded-full p-2 border group border-secondaryText cursor-pointer'>
                        {
                            userWishList.includes(property.id) ?
                                <AiFillHeart
                                    className="text-2xl text-red-500 group group-hover:text-blueText"
                                    onClick={handleWishListClick}
                                /> :
                                <AiOutlineHeart
                                    className="text-2xl text-blueText group group-hover:text-red-500"
                                    onClick={handleWishListClick}
                                />
                        }
                    </div>
                </div>
                <Link className="text-lg font-semibold" href={`/properties/${property.id}`}>{property.title}</Link>
                <div className='flex text-secondaryText text-sm gap-1'>
                    <p>{property.address},</p>
                    <p>{property.country}</p>
                </div>
                <div className='flex text-secondaryText text-sm gap-2 border-t border-secondaryText mt-2 py-2 w-full'>
                    <div className='flex gap-2 items-center whitespace-nowrap'>
                        <LuBedDouble className='text-xl text-blueText' />
                        <p>{property.bedroom} Beds</p>
                    </div>
                    <div className='flex gap-2 items-center whitespace-nowrap'>
                        <BiBath className='text-xl text-blueText' />
                        <p>{property.bathroom} Bathrooms</p>
                    </div>
                    <div className='flex gap-2 items-center whitespace-nowrap'>
                        <BiArea className='text-xl text-blueText' />
                        <p>{property.size} sqft</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PropertyCard