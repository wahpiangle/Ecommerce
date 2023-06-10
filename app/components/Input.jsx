const Input = ({ label, id, type, register, disabled, placeholder, required }) => {
    return (
        <div className="mb-4">
            <label htmlFor={id} className="text-md">
                {label}
            </label>
            <div className="my-2">
                {/*spread syntax is used as register from react-hook-forms is an object */}
                <input id={id} type={type} disabled={disabled} {...register(id, { required })}
                    className="bg-primary border-[1px] border-[#272B30] rounded-lg p-3 w-full focus:outline-none"
                    placeholder={placeholder}
                />
            </div>
        </div>
    )
}

export default Input