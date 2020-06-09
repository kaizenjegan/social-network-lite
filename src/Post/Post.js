import React from "react"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      // paddingBottom: '50px'
      // marginBottom: "45px"
      backgroundColor: '#cecece'
    }
  }));
  
export const Post = (props) => {
    const classes = useStyles();
    return(
        <div className={classes.root}>
            post
        </div>
    )
}