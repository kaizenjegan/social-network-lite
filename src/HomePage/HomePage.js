import React from "react"
import {Dashboard } from "./Dashboard"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      // paddingBottom: '50px'
      // marginBottom: "45px"
      backgroundColor: '#cecece'
    }
  }));
  
export const HomePage = (props) => {
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <Dashboard {...props} />
        </div>
    )
}