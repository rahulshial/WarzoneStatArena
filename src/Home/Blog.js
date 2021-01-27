// react imports
import React from "react";
import clsx from "clsx";
import ReactPlayer from "react-player";
// material UI imports
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import LinkIcon from "@material-ui/icons/Link";

const useStyles = makeStyles((theme) => ({
  root: {
    height: 450,
    width: 650,
    background: "#151518",
    color: "#fff",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
  header: {
    display: "flex",
    justifyContent: "center",
  },
}));

export default function Blogs(props) {
  const classes = useStyles();
  
  // expanded state
  const [expanded, setExpanded] = React.useState(false);

  // expanding the page for news
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  if (expanded) {
    return (
      <Card className={classes.root}>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
          </IconButton>
          <IconButton aria-label="link" target="_blank" href={props.link}>
            <LinkIcon></LinkIcon>
          </IconButton>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>{props.text}</Typography>
          </CardContent>
        </Collapse>
      </Card>
    );
  }
  return (
    <Card className={classes.root}>
      <CardHeader
        className={classes.header}
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {props.avatar}
          </Avatar>
        }
        action={
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        }
        title={props.title}
        subheader={props.subheader}
      />

      <ReactPlayer style={{ paddingLeft: "10px" }} url={props.url} />
    </Card>
  );
}
