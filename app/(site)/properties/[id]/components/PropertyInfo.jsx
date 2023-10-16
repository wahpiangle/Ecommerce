import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image"
import CallToAction from "./CallToAction";

export default function PropertyInfo({ data }) {
    const handleBooking = () =>{
        console.log(data)
    }

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
                            <Image src={item} width={1600} height={900} alt="property-image" className="rounded-xl aspect-video" />
                        </div>
                    ))}
                    <div>
                        <Image src="http://dummyimage.com/1600x900.png/5fa2dd/ffffff" width={1600} height={900} alt='property-image' className="rounded-xl "/>
                    </div>
                    <div>
                        <Image src="http://dummyimage.com/1600x900.png/5fa2dd/ffffff" width={1600} height={900} alt='property-image' className="rounded-xl"/>
                    </div>
                </Carousel>
                <CallToAction data={data} handleBooking={handleBooking}/>
            </div>
        </div>
    )
}
