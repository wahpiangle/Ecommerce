import Image from "next/image"
import { BiBed, BiMapPin } from "react-icons/bi"
import { BsSlashSquare } from "react-icons/bs"
import Link from "next/link"
const PropertyBox = ({id, image, title, price, location, beds, size }) => {
    return (
        <Link className="flex gap-3 cursor-pointer hover:bg-[#111315] p-4 rounded-xl" href={`properties/${id}`}>
            <Image src={image} alt="property" width={100} height={80} className="rounded-lg" />
            <div>
                <div className="p-2 bg-[#111315] font-bold text-sm rounded-lg text-blueText w-fit">$ {price}</div>
                <h1 className="mt-1 font-semibold text-lg">{title}</h1>
                <div className="flex gap-1 items-center text-sm mt-1">
                    <BiMapPin className="text-secondaryText" />
                    <p className="text-secondaryText">{location}</p>
                </div>
                <div className="flex gap-5 mt-2">
                    <div className="flex items-center text-primaryText gap-1 text-sm whitespace-nowrap">
                        <BiBed />
                        <p>{beds} Beds</p>
                    </div>
                    <div className="flex items-center text-primaryText gap-1 text-sm whitespace-nowrap">
                        <BsSlashSquare />
                        <p>{size} sqft</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default PropertyBox