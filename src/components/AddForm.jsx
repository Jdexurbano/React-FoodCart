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
function AddForm(props) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setName("");
    setImage("");
    setDescription("");
    props.addFood(name, image, description);
  };
  return (
    <>
      <Button onClick={handleOpen} className="rounded-full">
        <span>Add Food</span>
      </Button>
      <Dialog open={open} handler={handleOpen}>
        <Card>
          <CardHeader className="mb-4">
            <Typography
              variant="h4"
              className="text-center py-[20px] font-semibold text-gray-800"
            >
              Add your favorite food
            </Typography>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardBody className="flex flex-col gap-5">
              <label htmlFor="image">
                <Input
                  label="Image URL"
                  value={image}
                  id="image"
                  required
                  onChange={(e) => setImage(e.target.value)}
                ></Input>
              </label>
              <label htmlFor="name">
                <Input
                  label="Name"
                  value={name}
                  id="name"
                  required
                  onChange={(e) => setName(e.target.value)}
                ></Input>
              </label>

              <Textarea
                label="Description"
                onChange={(e) => setDescription(e.target.value)}
              />
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

export default AddForm;
