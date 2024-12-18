import{
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,

} from "@mui/material";
import React from "react";

function ConfirmDialog({open,onClose,onConfirm}){
  const handleClose = () =>{
    onClose(false);
  }

  const handleClose = () =>{
    onConfirm(false);
    onClose(false);
  };

return (
  <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Confirm Deletion</DialogTitle>
        <DialogContent>
          Are you sure you want to delete this recipe?
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>No</Button>
          <Button onClick={handleConfirm} color="primary">
            Yes
          </Button>
        </DialogActions>
      </Dialog>

);

}
export default ConfirmDialog;
