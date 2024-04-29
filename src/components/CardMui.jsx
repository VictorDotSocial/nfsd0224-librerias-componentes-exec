import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import MyCustomButton from "./MyCustomButton";

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://www.wallpapertip.com/wmimgs/0-1496_hd-nature-wallpapers-hd-park-hd-background.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Button size="small" sx={{ backgroundColor: "black" }}>
          Share
        </Button> */}
        <Button size="small" className="my-custom-button">
          Learn More
        </Button>
        <MyCustomButton />
      </CardActions>
    </Card>
  );
}
