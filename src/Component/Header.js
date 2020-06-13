import React from "react";
import { Input } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import PersonIcon from '@material-ui/icons/Person';
import MessageIcon from '@material-ui/icons/Message';

const useStyles = makeStyles((theme) => ({
    root: { 
        background: "#2867B2", 
        color: "white", 
        height: "40px"
    },
    inline: {
        margin: "10px",
        float: "left"
    },
    search:{
        margin: "10px",
        float: "left"
    },
    icon: {
        padding: "8px",
        float: "left"
    }
  }));

export const Header = (props) =>{
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <div className={classes.inline}> <PersonIcon/> </div>
            <input className={classes.inline} ></input>  <div className={classes.icon}> <MessageIcon/></div>
            {/* <button class={classes.inline}>search</button>             */}
             {/* <TextField id="standard-search" label="Search field" type="search" style={{ background: "white" }}/><button>search</button> */}
        </div>
    )
}