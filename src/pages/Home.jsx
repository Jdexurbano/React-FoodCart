import React from "react";
import NavigationBar from "../components/NavigationBar";
import { useState } from "react";
import ItemCard from "../components/ItemCard";
import { Typography } from "@material-tailwind/react";

function Home() {
  const [food, setFood] = useState([
    {
      id: 1,
      name: "Bruschetta",
      description:
        "A traditional Italian appetizer that is nowadays popular throughout the world.",
      image:
        "https://cdn.tasteatlas.com//images/dishes/eeeabf62647b459391edfd213800583b.jpg?w=905&h=510",
    },
    {
      id: 2,
      name: "Kimbap",
      description:
        "A Korean dish consisting of seaweed (kim), seasoned rice (bap), and other, optional ingredients that are usually rolled, sliced, and served.",
      image:
        "https://cdn.tasteatlas.com//Images/Dishes/31ddd0a3661844c8a10b858ab8151933.jpg?w=905&h=510",
    },
    {
      id: 3,
      name: "Nigiri",
      description:
        "A special kind of hand-pressed sushi where the meat is sliced and pressed on top of sushi rice",
      image:
        "https://cdn.tasteatlas.com//images/dishes/f3abe602fe794beba2f00deee03dee9e.jpg?w=905&h=510",
    },
    {
      id: 4,
      name: "Banchan",
      description:
        "The term banchan encompasses a wide variety of Korean dishes that are traditionally served on small plates.",
      image:
        "https://cdn.tasteatlas.com//images/dishes/5cc560fb728646eb8f525c7febff201e.jpg?w=905&h=510",
    },
    {
      id: 5,
      name: "Pulled Pork",
      description:
        "Pulled pork is an American barbecue technique of cooking pork meat slowly over low heat, resulting in tender meat that can easily be pulled into small pieces.",
      image:
        "https://cdn.tasteatlas.com//Images/Dishes/77c0b1d19f8a49509278bde67c1d6cb7.jpg?w=905&h=510",
    },
    {
      id: 6,
      name: "Pad Thai",
      description:
        "Thailand national dish, a flavorful stir-fry (pad in Thai) dish consisting of rice noodles, tofu, dried shrimp, bean sprouts, and eggs. If its made with meat, chicken and pork are some of the most popular choices.",
      image:
        "https://cdn.tasteatlas.com//images/dishes/ad3ef1fb39eb42958e7462961951e45c.jpg?w=905&h=510",
    },
  ]);

  function updateFood(id, newName, newDescription, newImage) {
    const updatedFood = food.map((item) => {
      if (id === item.id) {
        return {
          ...item,
          name: newName,
          description: newDescription,
          image: newImage,
        };
      }
      return item;
    });

    setFood(updatedFood);
  }

  function deleteFood(id) {
    const updatedData = food.filter((item) => item.id !== id);
    setFood(updatedData);
  }

  return (
    <>
      <NavigationBar food={food} setFood={setFood} />

      {food.length === 0 ? (
        <div className=" mx-[50px] h- flex justify-center items-center h-[80vh]">
          <Typography variant="h3" color="red" textGradient>
            Food Cart is Empty!!!
          </Typography>
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-5 md:mx-[50px] md:mt-5">
          {food.map((item, index) => {
            return (
              <ItemCard
                key={index}
                id={item.id}
                image={item.image}
                name={item.name}
                description={item.description}
                updateFood={updateFood}
                food={food}
                deleteFood={deleteFood}
              />
            );
          })}
        </div>
      )}
    </>
  );
}

export default Home;
