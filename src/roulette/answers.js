// react imports
import React from "react";
// material UI imports
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
// local imports and styling
import SwitchesSize from "./checkbox";

const useStyles = makeStyles({
  root: {
    minWidth: 350,
    maxWidth: 350,
    minHeight: 300,
    maxHeight: 300,
    margin: 20,
    backgroundColor: "#2a313c",
  },
  media: {
    height: 100,
    backgroundColor: "#2a313c",
  },
  text: {
    fontFamily: "Times New Roman, serif",
    fontSize: 13,
    color: "#DADADA",
  },
});

export default function MediaCard(props) {
  const classes = useStyles();

  // card for roulette page
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={props.classStyle}
          image={props.image}
          title={props.title}
        />

        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            className={classes.text}
          >
            <SwitchesSize
              label={props.title}
              checked={props.checked}
              onChange={props.onChange}
            />
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.text}
          >
            {props.selected}
            <br />
            {props.class}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
