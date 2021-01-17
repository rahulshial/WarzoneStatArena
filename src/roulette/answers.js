import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import SwitchesSize from "./checkbox";
import ClassesNesting from "./rouletteButton";

const useStyles = makeStyles({
  root: {
    minWidth: 500,
    maxWidth: 500,
    minHeight: 400,
    maxHeight: 400,
    margin: 20,

  },
  media: {
    height: 200,
  },
  text: {
   fontFamily: "Times New Roman, serif",
   fontSize: 20,
  }
});

export default function MediaCard(props) {
  const classes = useStyles();
  
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.image}
          title={props.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" className={classes.text}>
           <SwitchesSize 
            label={props.title} checked={props.checked} onChange={props.onChange}/>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className={classes.text}>
          {props.selected}
          <br/>
          {props.class}
          </Typography>
        </CardContent>
      </CardActionArea>
      
    </Card>
  );
}