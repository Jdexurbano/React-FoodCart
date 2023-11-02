import React from "react";
import { Navbar, Typography, Badge } from "@material-tailwind/react";
import AddForm from "./AddForm";

function NavigationBar({ food, setFood }) {
  let numOfFood = food.length;

  const randomId = () => {
    return Math.floor(Math.random() * 1000) + 1;
  };

  function newFood(name, image, description) {
    const newItem = {
      id: randomId(),
      name: name,
      image: image,
      description: description,
    };
    return setFood([...food, newItem]);
  }
  return (
    <>
      <Navbar className="max-w-full p-2 md:p-5">
        <div className="flex justify-between items-center">
          <Typography color="blue-gray" className="font-semibold text-[20px]">
            React Food Cart
          </Typography>
          <Badge content={numOfFood} withBorder>
            <AddForm addFood={newFood} />
          </Badge>
        </div>
      </Navbar>
    </>
  );
}

export default NavigationBar;
