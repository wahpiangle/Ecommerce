import Image from "next/image"
import { BiBed, BiMapPin } from "react-icons/bi"
import { BsSlashSquare } from "react-icons/bs"

const PropertyBox = () => {
    return (
        <div className="flex gap-3 cursor-pointer hover:bg-[#111315] p-4 rounded-xl">
            <Image src="/assets/placeholder.png" alt="property" width={100} height={80} className="rounded-lg" />
            <div>
                <div className="p-2 bg-[#111315] font-bold text-sm rounded-lg text-blueText w-fit">$ 123</div>
                <h1 className="mt-1 font-semibold text-lg">Name of place</h1>
                <div className="flex gap-1 items-center text-sm mt-1">
                    <BiMapPin className="text-secondaryText" />
                    <p className="text-secondaryText">Location of place, Country</p>
                </div>
                <div className="flex gap-5 mt-2">
                    <div className="flex items-center text-primaryText gap-1 text-sm">
                        <BiBed />
                        <p>3 Beds</p>
                    </div>
                    <div className="flex items-center text-primaryText gap-1 text-sm">
                        <BsSlashSquare />
                        <p>300 sqft</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PropertyBox