import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

export const VideoDialogContext = createContext({})
const VideoDialogProvider = ({ children }) => {
  const [video, setVideo] = useState(null)
  const [open, setOpen] = useState(false)
  return (
    <VideoDialogContext.Provider value={{
      video,
      setVideo,
      open,
      setOpen
    }}>{children}</VideoDialogContext.Provider>
  )
}
export const useVideoDialogContext = () => useContext(VideoDialogContext)
export default VideoDialogProvider;