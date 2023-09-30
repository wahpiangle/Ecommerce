import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image"

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
            <Carousel showArrows={true} showThumbs={false} className='lg:w-1/2 h-fit border-secondaryText border-[1px] rounded-xl'>
                {data?.images?.map((item, index) => (
                    <div key={index}>
                        <Image src={item} width={600} height={300} alt="property-image" className="rounded-xl" />
                    </div>
                ))}
                <div>
                    <Image src="http://dummyimage.com/600x300.png/5fa2dd/ffffff" width={600} height={300} alt='property-image' className="rounded-xl" />
                </div>
                <div>
                    <Image src="http://dummyimage.com/600x300.png/5fa2dd/ffffff" width={600} height={300} alt='property-image' className="rounded-xl" />
                </div>
            </Carousel>
        </div>
    )
}
