import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import Avatar from "@material-ui/core/Avatar";
import ShareIcon from "@material-ui/icons/Share";
import IconButton from "@material-ui/core/IconButton";
import { CardMedia } from "@material-ui/core";

const CoffeCard = (props) => {
  console.log(props);
  const { avatarUrl, title, price, description, imageUrl } = props.cardData;

  return (
    <Card>
      <CardHeader
        avatar={<Avatar src={avatarUrl} />}
        action={
          <IconButton>
            <ShareIcon />
          </IconButton>
        }
        title={title}
        subheader={price}
      />
      <CardMedia style={{ height: "150px" }} image={imageUrl} />
      <CardContent>
        <Typography variant="body2" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Buy Now</Button>
        <Button size="small">Offer</Button>
      </CardActions>
    </Card>
  );
};

export default CoffeCard;
