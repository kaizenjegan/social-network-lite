import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import RefreshIcon from '@material-ui/icons/Refresh';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import FavoriteIcon from '@material-ui/icons/Favorite';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';

import {
  ReactionContext,
} from "../Contexts/ReactionContext";



const useStyles = makeStyles((theme) => ({
    root: {
        background: "#fff",
        position: "fixed",
        marginLeft: "auto",
        marginRight: "auto",
        top: 300,
        left: 110,
        right: 110,
        textAlign: "center",
        zIndex: 1000000000,
        paddingBottom: "10px",
        borderRadius: "25px",
        paddingTop: "10px"
      },
      icons: {
        //   marginTop: "2px"
        paddingLeft: "10px"
      }
  }));

export const ReactionBar = (props) => {
    const classes = useStyles();
    const reactionDispatch = React.useContext(ReactionContext)

    const closeReaction =  ()=>{
      reactionDispatch({type: "CLOSE" })
    }
    return (<div className={classes.root} onClick={closeReaction}> 
                <span className={classes.icons}> <ThumbUpIcon /> </span>
                <span className={classes.icons}> <FavoriteIcon /> </span>
                <span className={classes.icons}>  <EmojiObjectsIcon/> </span>
                <span className={classes.icons}>  <SentimentDissatisfiedIcon /> </span>
            </div> )
}
