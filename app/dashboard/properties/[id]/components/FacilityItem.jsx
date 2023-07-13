import { facilityIconMap } from "@/app/data/facilityIconMap"
const FacilityItem = ({ facility }) => {
    return (
        <div className='flex flex-wrap gap-2'>
                <div key={facility.id} className='flex items-center gap-1'>
                    <div className='w-6 h-6 flex items-center justify-center'>
                        {facilityIconMap[facility]}
                    </div>
                    <p className='text-sm'>{facility}</p>
                </div>
        </div>
    )
}

export default FacilityItem