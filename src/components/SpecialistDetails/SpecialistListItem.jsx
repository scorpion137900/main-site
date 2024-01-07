import React from 'react'
import { ExpandLess, ExpandMore } from '@mui/icons-material'
import { Collapse, List, ListItemButton, ListItemText } from '@mui/material'

const SpecialistListItem = ({ text, children }) => {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <ListItemButton onClick={handleClick} sx={{ my: "20px" }}>

        <ListItemText primary={text} sx={{
          color: "primary.main",
          "& span": {
            fontWeight: "700 ",
          }
        }} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            {children}
            {/* <ListItemText primary="" /> */}
          </ListItemButton>
        </List>
      </Collapse>
    </>
  )
}

export default SpecialistListItem