'use client'
import { useForm, Controller } from "react-hook-form"
import SelectFacility from "./components/SelectFacility"
const page = () => {
  const { register, handleSubmit, formState: { errors }, control } = useForm()
  const onSubmit = (data) =>{
    console.log('clicked ')
    console.log(data)
  }
  const onError = (errors, e) => console.log(errors, e)
  return (
    <div>
      <h1 className='text-primaryText text-2xl font-semibold whitespace-nowrap'>Add a Property</h1>
      <div className="bg-primary rounded-xl p-4 mx-2 mt-3">
        <form onSubmit={handleSubmit(onSubmit, onError)}>
          <div className="flex flex-col gap-2">
            <label htmlFor="title" className="text-lg">Property Title</label>
            <input type="text" id="title" {...register("title", { required: true })} className="px-2 py-3 focus:outline-none rounded-lg bg-primary border-[1px] border-secondaryText" />
          </div>
          <div className="flex flex-col gap-2 mt-3">
            <label htmlFor="description" className="text-lg">Enter Description</label>
            <textarea id="description" {...register("description", { required: true })} className="px-2 py-3 h-[100px] resize-none focus:outline-none rounded-lg bg-primary border-[1px] border-secondaryText" />
          </div>
          <div className="flex mt-3 gap-6 items-center">
            <div className="flex flex-1 flex-col gap-2">
              <label htmlFor="type" className="text-lg">Select Property Type</label>
              <select id="type" {...register("type", { required: true })} className="px-2 py-3 focus:outline-none rounded-lg bg-primary border-[1px] border-secondaryText">
                <option value="Landed">Landed</option>
                <option value="Apartment">Apartment</option>
                <option value="Condo">Condo</option>
                <option value="Others">Others</option>
              </select>
            </div>
            <div className="flex-1 flex flex-col gap-2">
              <label htmlFor="price" className="text-lg">Enter Price $</label>
              <input type="number" id="price" {...register("price", { required: true })} className="px-2 py-3 focus:outline-none rounded-lg bg-primary border-[1px] border-secondaryText" />
            </div>
          </div>
          <div className="flex mt-3 justify-between gap-3">
            <div className="flex flex-1 flex-col gap-2">
              <label htmlFor="facilities" className="text-lg">Select Facilities</label>
              <Controller
                name="facilities"
                control={control}
                render={({ field }) => (
                  <SelectFacility {...field} />
                )}
                rules={{ required: true }}
              />
            </div>
            <div className="flex flex-1 flex-col gap-2">
              <label htmlFor="bedroom" className="text-lg">Select Number of Bedrooms</label>
              <input type="number" id="bedroom" {...register("bedroom", { required: true })} className="px-2 py-3 focus:outline-none rounded-lg bg-primary border-[1px] border-secondaryText"/>
            </div>
            <div className="flex flex-1 flex-col gap-2">
              <label htmlFor="bathroom" className="text-lg">Select Number of Bathrooms</label>
              <input type="number" id="bathroom" {...register("bathroom", { required: true })} className="px-2 py-3 focus:outline-none rounded-lg bg-primary border-[1px] border-secondaryText"/>
            </div>
          </div>
          <button type="submit" className="cursor-pointer px-3 py-2 bg-blueText rounded-lg mt-3 hover:brightness-75">Add Property</button>
        </form>
      </div>
    </div>
  )
}

export default page