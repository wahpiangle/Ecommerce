import { facilityIconMap } from "@/app/data/facilityIconMap"
const FacilityItem = ({ facility }) => {
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