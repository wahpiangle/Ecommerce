import { CircularProgress } from "@mui/material"

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-black w-full">
      <div className="flex flex-col items-center">
        <CircularProgress />
      </div>
    </div>
  )
}

export default Loader