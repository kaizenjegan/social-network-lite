import React, {useState, useEffect} from "react"
import {Dashboard } from "./Dashboard"
import { makeStyles } from '@material-ui/core/styles';
import  { ReactionBar }  from '../Component/ReactionBar';
import { NewPost } from '../Component/NewPost';

const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: '#cecece',
      paddingBottom: "70px"
    },
    extraPadding:{
      padding: "1px"
    }
  }));
  
export const HomePage = (props) => {
    const classes = useStyles();
    const [showReaction, handleShow] = useState(false);
    const toggleReaction = () =>{
      handleShow(!showReaction);
    } 

    useEffect(()=>{
      handleShow(true)
    }, []);

    return(
        <div className={classes.root}>
            <NewPost />
            { showReaction && <ReactionBar />}
            <Dashboard handleReaction={showReaction} {...props} />
            <div className={classes.extraPadding}></div>
        </div>
    )
}