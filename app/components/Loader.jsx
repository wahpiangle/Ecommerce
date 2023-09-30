import { CircularProgress } from "@mui/material"

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screenw-full">
      <div className="flex flex-col items-center">
        <CircularProgress />
      </div>
    </div>
  )
}

export default Loader