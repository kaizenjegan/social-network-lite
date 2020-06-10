import React, { useState, useEffect } from 'react';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MessageIcon from '@material-ui/icons/Message';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import CardActionArea from '@material-ui/core/CardActionArea';
import Button from '@material-ui/core/Button';
import { Post } from './Card';

const useStyles = makeStyles((theme) => ({
  root: {
    // paddingBottom: '50px'
    marginTop: "10px"
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    
  },
  fullCard: {
    width: "100%"
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  header:{
    // color: "red",
    // fontSize: "10pt",
    // height: "1px"
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));


export const Dashboard = (props) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [cards, setCard] = React.useState([]);


  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  useEffect(()=>{
    setCard(
      [{
        body: "This ixmpressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
        img: "/place-holder.jpeg",
        reactions: {
          likes: 0,
          claps: 0,
          loves: 0
        }
      },{
        body: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
        img: "/place-holder.jpeg",
        reactions: {
          likes: 0,
          claps: 0,
          loves: 0
        }
      }]
    )
  },[])

    return (
      cards.map( card => 
          {
            return <Post props={props} card={card}></Post>
        })
      );
}