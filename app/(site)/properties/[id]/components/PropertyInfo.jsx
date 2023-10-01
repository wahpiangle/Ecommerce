import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image"
import { BiSolidPurchaseTag } from "react-icons/bi";

export default function PropertyInfo({ data }) {
    return (
        <div>
            <div className="flex justify-between">
                <h1 className="text-3xl font-semibold">{data.title}</h1>
                <button className="flex gap-2 bg-blueText items-center rounded-xl px-3 py-2 text-lg hover:brightness-90">
                    <AiOutlineHeart />
                    Favourite
                </button>
            </div>
            <h1 className="text-secondaryText text-xl mb-4 mt-2">
                {data.geocode.formatted_address}
            </h1>
            <div className="flex justify-between gap-8 flex-col sm:flex-row 2xl:gap-16">
                <Carousel showArrows={true} showThumbs={false} className='border-secondaryText border-[1px] rounded-xl flex-[2_2_0%]'>
                    {data?.images?.map((item, index) => (
                        <div key={index}>
                            <Image src={item} width={1600} height={900} alt="property-image" className="rounded-xl aspect-video object-cover" />
                        </div>
                    ))}
                    <div>
                        <Image src="http://dummyimage.com/1600x900.png/5fa2dd/ffffff" width={1600} height={900} alt='property-image' className="rounded-xl "/>
                    </div>
                    <div>
                        <Image src="http://dummyimage.com/1600x900.png/5fa2dd/ffffff" width={1600} height={900} alt='property-image' className="rounded-xl"/>
                    </div>
                </Carousel>
                <div className="border-[1px] border-secondaryText rounded-lg p-4 xl:p-8 flex-1">
                    <h1 className="text-secondaryText xl:text-lg">
                        {data.listingType} Price
                    </h1>
                    <h1 className="mt-2">
                        <span className="text-blueText font-semibold text-3xl mr-1">
                            ${data.listingType === 'Rent' ? data.rentalPrice : data.salePrice}
                        </span>
                        {
                            data.listingType === 'Rent' ? '/night' : ''
                        }
                    </h1>
                    <button className="mt-4 bg-blueText w-full rounded-lg py-3 hover:brightness-90 text-white font-semibold text-lg flex items-center justify-center">
                        <BiSolidPurchaseTag className="mr-2 text-lg"/>
                        Book Now
                    </button>
                </div>
            </div>
        </div>
    )
}
