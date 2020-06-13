import React, { useState, useEffect } from 'react';

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
import MessageIcon from '@material-ui/icons/Message';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import CardActionArea from '@material-ui/core/CardActionArea';
import Button from '@material-ui/core/Button';

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
    cardHeader:{
      border: "1px solid #e1e9ee",
      paddingTop: "5px",
      height: "26px"
    },
    left: {
      float: "left",
      paddingLeft: "10px"
    },
    bold: {
      fontWeight: "bold"
    }
  }));


  export const Post = ({card, props}) => {
    const classes = useStyles();

    return(
        <div>
          
          <Card className={classes.root}>
          <div className={classes.cardHeader}> 
            <div className={classes.left}>
              <span className={classes.bold}>header</span> loves this 
            </div>
            {/* <div>   
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>    
            </div> */}
          </div>
              <CardActionArea>        
                <CardContent>
                  {/* <CardHeader
                    className={classes.header}
                    action={
                      <IconButton aria-label="settings">
                        <MoreVertIcon />
                      </IconButton>
                    }
                    title="Mr Chorizo likes this"
                  /> */}
                  {/* <Avatar aria-label="recipe" className={classes.avatar}>
                      R
                    </Avatar>  */}
                  <Typography variant="body2" color="textSecondary" component="p">
                    {card.body}
                  </Typography>
                </CardContent>
                <CardMedia
                  className={classes.media}
                  image={card.img}
                  title="Contemplative Reptile"
                />
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Reaction
                </Button>
                <Button size="small" color="primary">
                  Comments
                </Button>
              </CardActions>
              <CardActions>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton size="small" color="primary" 
                  onClick={() => {
                      props.history.push("/post/4273956")
                    }}>
                  <MessageIcon/>
                  Comment
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
                {/* <Button size="small" color="primary">
                  Like
                </Button>
                <Button size="small" color="primary">
                  Comment
                </Button> */}
                
              </CardActions>
            </Card>
          </div>
    )
  }