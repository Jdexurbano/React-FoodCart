import React from "react";
import {
  Button,
  Dialog,
  Card,
  CardBody,
  CardFooter,
  Typography,
  Input,
  CardHeader,
  Textarea,
} from "@material-tailwind/react";
import { useState } from "react";
function EditForm(props) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const [name, setName] = useState(props.name);
  const [description, setDescription] = useState(props.description);
  const [image, setImage] = useState(props.image);

  const handleSubmit = (event) => {
    event.preventDefault();
    props.updateFood(props.id, name, description, image);
  };
  return (
    <>
      <Button onClick={handleOpen}>
        <span>Edit</span>
      </Button>
      <Dialog open={open} handler={handleOpen}>
        <Card>
          <CardHeader className="mb-4">
            <Typography
              variant="h4"
              className="text-center py-[20px] font-semibold text-gray-800"
            >
              Food Details
            </Typography>
          </CardHeader>
          <form onSubmit={handleSubmit} id="updateForm">
            <CardBody className="flex flex-col gap-5">
              <label htmlFor="image">
                <Input
                  label="Image URL"
                  type="text"
                  id="image"
                  value={image}
                  onChange={(e) => {
                    setImage(e.target.value);
                  }}
                />
              </label>
              <label htmlFor="name">
                <Input
                  label="Name"
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </label>
              <div>
                <Textarea
                  label="Description"
                  variant="outlined"
                  value={description}
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                />
              </div>
            </CardBody>
            <CardFooter className="flex justify-end items-center gap-4">
              <Button onClick={handleOpen}>
                <span>Cancel</span>
              </Button>
              <Button
                onClick={handleOpen}
                variant="outlined"
                className="hover:bg-gray-900 hover:text-gray-300"
                type="submit"
                form="updateForm"
              >
                <span>Confirm</span>
              </Button>
            </CardFooter>
          </form>
        </Card>
      </Dialog>
    </>
  );
}

export default EditForm;
