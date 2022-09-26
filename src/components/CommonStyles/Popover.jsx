import { Popover } from '@mui/material';
import React from 'react';

const PopoverMui = ({ children, open, anchorEl, handleClose }) => {
  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
    >
      {children}
    </Popover>
  );
};

export default PopoverMui;
