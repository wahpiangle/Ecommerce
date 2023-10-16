'use client'
import { BiSolidPurchaseTag } from 'react-icons/bi'
import SelectDate from './SelectDate'
import { useState } from 'react'

export default function CallToAction({data, handleBooking}) {
    const [date, setDate] = useState(null)
    return (
        <div className="border-[1px] border-secondaryText rounded-lg p-4 xl:p-8 flex-1">
            <h1 className="text-secondaryText xl:text-lg">
                {data.listingType} Price
            </h1>
            <h1 className="mt-2">
                <span className="text-blueText font-semibold text-3xl mr-1">
                    ${data.listingType === 'Rent' ? data.rentalPrice.toLocaleString('en') : data.salePrice.toLocaleString('en')}
                </span>
                {
                    data.listingType === 'Rent' ? '/night' : ''
                }
            </h1>
            <button className="mt-4 bg-blueText w-full rounded-lg py-3 hover:brightness-90 text-white font-semibold text-lg flex items-center justify-center" onClick={handleBooking}>
                <BiSolidPurchaseTag className="mr-2 text-lg" />
                Book Now
            </button>
            <div className="border-[1px] border-secondaryText my-6 opacity-75" />
            <div>
                <h1 className="text-lg font-semibold mb-2">Request a Home Tour</h1>
                <SelectDate setDate={setDate}/>
            </div>
        </div>
    )
}
