import { useEffect, useState } from 'react'

export default function SelectAddress() {

    const [source, setSource] = useState()
    const [addressList, setAddressList] = useState([])

    useEffect(() => {
        const delayedDebounceFn = setTimeout(() => {

            const getAddress = async () => {
                const res = await fetch('/api/search-address?q=' + source, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                const { data } = await res.json();
                console.log(data)
                setAddressList(data?.suggestions || [])
            }
            getAddress()

        }, 1000)

        return () => clearTimeout(delayedDebounceFn)
    }, [source])


    return (
        <div className='mt-3'>
            <h1>What is the address?</h1>
            <input type="text"
                value={source}
                onChange={(e) => setSource(e.target.value)}
                className='rounded-xl p-2 w-full mt-2 focus:outline-none bg-primary border-[1px] border-secondaryText'
            />
            {addressList.length > 0 && (
                <div>
                    {addressList.map((item, index) => (
                        <h2 key={index}>{item.place_formatted}</h2>
                    ))}
                </div>
            )}
        </div>
    )
}
