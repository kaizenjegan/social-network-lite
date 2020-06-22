import React, {useState, useEffect} from "react"
import {Dashboard } from "./Dashboard"
import { makeStyles } from '@material-ui/core/styles';
import  { ReactionBar }  from '../Component/ReactionBar';
import { NewPost } from '../Component/NewPost';
import {
  ReactionContext,
  reactionReducer,
  initialReaction,
  ReactionConsumer
} from "../Contexts/ReactionContext";

const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: '#cecece',
      paddingBottom: "70px"
    },
    extraPadding:{
      padding: "1px"
    }
  }));
  
  const init = (initialCount) => {
    console.log(initialCount);
    return initialCount;
  }

export const HomePage = (props) => {
  const reactionState = React.useContext(ReactionContext);
  const { reaction } = props

    const classes = useStyles();


    React.useEffect(
      () => {
        console.log('commone')
        console.log(reactionState);
      },
      [reactionState]
    );

    return(
        
          <div className={classes.root}>
              <NewPost />
              { reaction.show && <ReactionBar />}
              <Dashboard  {...props} />
              <div className={classes.extraPadding}></div>
          </div>
       
    )
}