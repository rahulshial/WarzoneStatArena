import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import SwitchesSize from "./checkbox";

const useStyles = makeStyles({
  root: {
    minWidth: 400,
    maxWidth: 400,
    minHeight: 400,
    maxHeight: 400,
    margin: 20,
    backgroundColor:"#858d9b"

  },
  media: {
    height: 200,
    backgroundColor:"#62676f"
  },
  text: {
   fontFamily: "Times New Roman, serif",
   fontSize: 18,
   color:"#ffd369"
  }
});

export default function MediaCard(props) {
  const classes = useStyles();
  
  // card for roulette page
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