'use client'

import { useSearchParams } from "next/navigation"

const page = () => {
  const searchParams = useSearchParams();
  let type = searchParams.get('type');

  if (type !== 'purchase' && type !== 'rent') {
    type = 'rent';
  }

  return (
    <div className="bg-black">
      <div className="sm:px-32 px-12 py-8">
        <header>
          <h1 className="text-primaryText text-4xl font-display font-medium">Search Properties to {type.charAt(0).toUpperCase() + type.slice(1)}</h1>
          <input type="text" />
        </header>
      </div>
    </div>
  )
}

export default page