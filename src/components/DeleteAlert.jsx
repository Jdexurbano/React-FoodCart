import React from "react";
import { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
} from "@material-tailwind/react";
function DeleteAlert(props) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  const handleDelete = () => {
    props.deleteFood(props.id);
    setOpen(!open);
  };
  return (
    <>
      <Button color="red" onClick={handleOpen}>
        Delete
      </Button>
      <Dialog open={open} handler={handleOpen}>
        <DialogBody className="text-center">
          <Typography variant="h4">
            Do you want to delete {props.name}
          </Typography>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleDelete}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}

export default DeleteAlert;
