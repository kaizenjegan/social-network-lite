import React, {useEffect, useState} from "react";
import { Input } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import PersonIcon from '@material-ui/icons/Person';
import MessageIcon from '@material-ui/icons/Message';
import { SearchBar } from '../Component/SearchBar';

const useStyles = makeStyles((theme) => ({
    root: { 
        background: "#28b28d", 
        color: "white", 
        height: "50px"
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
        paddingTop: "12px",
        float: "left"
    }
  }));

export const Header = (props) =>{
    const classes = useStyles();
    

    return(
            <div className={classes.root}>
        
                    <div className={classes.inline}> <PersonIcon/> </div>
                    <SearchBar /> 
                    <div className={classes.icon}> <MessageIcon/></div>
                    
                
            </div>
    )
}