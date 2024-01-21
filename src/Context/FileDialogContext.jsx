import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

export const FileDialogContext = createContext({})
const FileDialogProvider = ({ children }) => {
  const [File, setFile] = useState(null)
  const [open, setOpen] = useState(false)
  return (
    <FileDialogContext.Provider value={{
      File,
      setFile,
      open,
      setOpen
    }}>{children}</FileDialogContext.Provider>
  )
}
export const useFileDialogContext = () => useContext(FileDialogContext)
export default FileDialogProvider;