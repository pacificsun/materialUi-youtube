import { Grid } from "@material-ui/core";
import React from "react";
import CoffeCard from "./CoffeCard";

import coffeMakerList from "./Constants";

// Data for Designing card UI

const cardData = {
  title: "Hamilton Beach Flexbrew",
  price: "$89.99",
  description:
    "No two coffee drinkers are the same – so, the flexibility to customize how and what you brew is key. From fresh grounds to K-Cup pods, the Hamilton Beach FlexBrew 2-Way Coffee Maker gives you the options to please fans of all types of coffees.",
  avatarUrl:
    "https://images-na.ssl-images-amazon.com/images/I/81mjh5ZSu1L._AC_SL1500_.jpg",
  imageUrl:
    "https://images-na.ssl-images-amazon.com/images/I/818rz3CIaFL._AC_SL1500_.jpg",
};

const Content = () => {
  return (
    <Grid container spacing={2}>
      {/* <CoffeCard cardData={coffeMakerList} /> */}
      {coffeMakerList.map((item) => (
        <Grid key={item.id} item xs={12} sm={4}>
          <CoffeCard cardData={item} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Content;
