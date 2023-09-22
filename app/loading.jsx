'use client'
import CircularProgress from '@mui/material/CircularProgress'

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <div className="flex flex-col items-center">
        <CircularProgress />
      </div>
    </div>
  )
}

export default Loading