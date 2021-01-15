import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import news1 from "./img/news1.jpg";
import ReactPlayer from "react-player"
import LinkIcon from '@material-ui/icons/Link';

const useStyles = makeStyles((theme) => ({
  root: {
   height: 480,
   width: 650,
   background: 'skyblue',
    
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  hello: {
    width:500,
  },
 
}));

export default function RecipeReviewCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  if (expanded) {
    return (
      
        <Card className={classes.root}>
          <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="link" target="_blank" href={props.link}>
        <LinkIcon>
        </LinkIcon>
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
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
          <Typography paragraph>
          </Typography>
          <Typography paragraph>
            The DMR-14 has become a fan-favorite weapon ever since Warzone Season 1 went live, but now it appears to have some competition as YouTuber ‘FaZe Swagg’ has found another gun that he claims is even better.
          </Typography>
          <Typography paragraph>
            With Warzone Season 1 well underway, players have taken the time to get used to the different weapons and loadouts that are available to them. There is a great variety of guns to choose from in the latest update, and one that’s gained a lot of popularity is the DMR-14.

            This high-powered weapon is capable of destroying armor, and bringing down your foes at any range. It does more damage than any other weapon in the game, and comes with a 40 round magazine for long gunfights.
          </Typography>
          <Typography>
            All of these factors have led to many fans considering the DMR-14 to be the best weapon in Warzone, but FaZe Swagg claims to have found a contender that’s similar “but way better”.
          </Typography>
        </CardContent>
      </Collapse>

      </Card>
        
    )
  } else {

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
   
        <ReactPlayer 
        url={props.url}
        />
       {/* <img
        className={classes.hello}
        src={news1}
      />  */}
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        </Typography>
      </CardContent>
      {/* <Typography>
      Call of Duty: Warzone Supposedly Has a New "Broken" OP Gun
      </Typography> */}
      
      
      
    </Card>
  );
}