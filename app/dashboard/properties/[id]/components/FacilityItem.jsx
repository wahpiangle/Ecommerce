import { AiOutlineWifi } from "react-icons/ai"
import { BiBath } from "react-icons/bi"
import { FaParking } from "react-icons/fa"
import { PiCookingPotBold } from "react-icons/pi"
import { MdPool } from "react-icons/md"
const FacilityItem = ({ facility }) => {

    const facilityIconMap ={
        'Baths' : <BiBath/>,
        'Kitchen' : <PiCookingPotBold/>,
        'Wifi' : <AiOutlineWifi/>,
        'Parking': <FaParking/>,
        'Pool' : <MdPool/>
    }

    return (
        <div className='flex flex-wrap gap-2'>
                <div key={item.id} className='flex items-center gap-1'>
                    <div className='w-6 h-6'>
                        {facilityIconMap[facility]}
                    </div>
                    <p className='text-sm'>{item}</p>
                </div>
        </div>
    )
}

export default FacilityItem