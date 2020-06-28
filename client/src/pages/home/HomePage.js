import React, {useState, useEffect} from "react"
import {UserFeed } from "./UserFeed"
import { makeStyles } from '@material-ui/core/styles';
import  { ReactionBar }  from '../../component/ReactionBar';
// import { NewPostRefreshBar } from '../../component/NewPostRefreshBar';
import {
  ReactionContext,
  reactionReducer,
  initialReaction,
  ReactionConsumer
} from "../../contexts/ReactionContext";

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
              {/* <NewPostRefreshBar /> */}
              { reaction.show && <ReactionBar />}
              <UserFeed  {...props} />
              <div className={classes.extraPadding}></div>
          </div>
       
    )
}