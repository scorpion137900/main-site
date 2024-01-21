import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';

import Slide from '@mui/material/Slide';
import CloseIcon from '@mui/icons-material/Close';
import { AppBar, IconButton, Toolbar } from '@mui/material';
import { useFileDialogContext } from '../../Context/FileDialogContext';
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FileDialog() {
  const { open, setOpen } = useFileDialogContext()
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>

      <Dialog
        fullScreen
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>

          </Toolbar>
        </AppBar>

        <DialogContent>
          <iframe width="100%" height="100%" src="https://drive.google.com/file/d/0B1HXnM1lBuoqMzVhZjcwNTAtZWI5OS00ZDg3LWEyMzktNzZmYWY2Y2NhNWQx/preview?resourcekey=0-5DqnTtXPFvySMiWstuAYdA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </DialogContent>

      </Dialog>
    </>
  );
}