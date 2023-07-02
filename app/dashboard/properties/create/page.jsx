'use client'
import { useForm } from "react-hook-form"
const page = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const onSubmit = data => console.log(data)
  return (
    <div>
      <h1 className='text-primaryText text-2xl font-semibold whitespace-nowrap'>Add a Property</h1>
      <div className="bg-primary rounded-xl p-4 mx-2 mt-3">
        <form onSubmit={handleSubmit(onSubmit)}>
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
              <input type="text" id="price" {...register("price", { required: true })} className="px-2 py-3 focus:outline-none rounded-lg bg-primary border-[1px] border-secondaryText" />
            </div>
          </div>

        </form>
      </div>
    </div>
  )
}

export default page