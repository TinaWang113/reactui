import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import PlusOneIcon from '@material-ui/icons/PlusOne';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { red, deepPurple } from '@material-ui/core/colors';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import clsx from 'clsx';


const useStyles = makeStyles((theme) =>({
  root: {
    flexGrow: 1,
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
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
    purple: {
      color: theme.palette.getContrastText(deepPurple[900]),
      backgroundColor: deepPurple[900],
    },
  }));

const ItemCard =(props) =>{
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    //get data
    const {title, subtitle, data, price, description, imgSrc, ingredients} = props;
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };


    return (
       <Card className={classes.root}>
       <CardHeader
        avatar={
          <Avatar className={classes.purple} aria-label="Special">SP</Avatar>
        }
        action ={
          <IconButton color="primary" aria-label="add one">
            <PlusOneIcon />
          </IconButton>
        }
        title={title}
        subheader={data}
      />
      <CardMedia
        className={classes.media}
        image={imgSrc}
        title={title}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
         {subtitle}, {price}/set
        </Typography>    
      <CardActions disableSpacing>      
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="Detail"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      </CardContent>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Ingredients:</Typography>
          <Typography paragraph>
            {description}
          </Typography>
          <Typography paragraph>
            {ingredients}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default ItemCard;