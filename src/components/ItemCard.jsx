import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
  Button,
} from "@material-tailwind/react";
import EditForm from "./EditForm";
import DeleteAlert from "./DeleteAlert";
function ItemCard(props) {
  return (
    <>
      <Card className="">
        <CardHeader className="mt-2">
          <img src={props.image} alt="" className="w-96 h-[200px]" />
        </CardHeader>
        <CardBody className="h-40">
          <Typography variant="h4" color="black">
            {props.name}
          </Typography>
          <Typography variant="paragraph" className="mt-2">
            {props.description}
          </Typography>
        </CardBody>
        <CardFooter className="flex justify-end gap-3">
          <EditForm
            key={props.id}
            id={props.id}
            image={props.image}
            name={props.name}
            description={props.description}
            updateFood={props.updateFood}
            food={props.food}
          />
          <DeleteAlert
            name={props.name}
            deleteFood={props.deleteFood}
            id={props.id}
          />
        </CardFooter>
      </Card>
    </>
  );
}

export default ItemCard;
