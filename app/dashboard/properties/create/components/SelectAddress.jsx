import { useEffect, useState } from 'react'

export default function SelectAddress() {

    const [source, setSource] = useState()
    const [ addressList, setAddressList ] = useState([])

    useEffect(()=>{
        const delayedDebounceFn = setTimeout(()=>{
            getAddress();
        }, 1000)

        return () => clearTimeout(delayedDebounceFn)

    }, [source])

    const getAddress = async () => {
        const res = await fetch('/api/search-address?q=' + source, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const result = await res.json();
        setAddressList(result)
    }
    // ! error here: it's always undefined, fix
    console.log(addressList.suggestions)
    return (
        <div className='mt-3'>
            <h1>What's the address?</h1>
            <input type="text"
            onChange={(e) => setSource(e.target.value)}
            className='rounded-xl p-2 w-full mt-2 focus:outline-none bg-primary border-[1px] border-secondaryText'
            value={source}
            />
            { addressList?.suggestions ? <div>
            {addressList?.suggestions.map((item, index)=>(
                <h2>{item.full_address}</h2>
            ))}
            </div> : null }
        </div>
    )
}
