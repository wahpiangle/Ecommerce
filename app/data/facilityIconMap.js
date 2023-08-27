import { AiOutlineWifi } from "react-icons/ai"
import { BiBath } from "react-icons/bi"
import { FaParking } from "react-icons/fa"
import { PiCookingPotBold } from "react-icons/pi"
import { MdPool } from "react-icons/md"

export const facilityIconMap = {
    'Baths': <BiBath />,
    'Kitchen': <PiCookingPotBold />,
    'Wifi': <AiOutlineWifi />,
    'Parking': <FaParking />,
    'Pool': <MdPool />,
}

export const facilities =[
    {label: 'Baths', value: 'Baths'},
    {label: 'Kitchen', value: 'Kitchen'},
    {label: 'Wifi', value: 'Wifi'},
    {label: 'Parking', value: 'Parking'},
    {label: 'Pool', value: 'Pool'}
]

export const facilityOptions = [
    'Baths',
    'Kitchen',
    'Wifi',
    'Parking',
    'Pool',
]