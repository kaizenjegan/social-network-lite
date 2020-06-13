import React from "react";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    inline: {
        margin: "10px",
        float: "left"
    }
  }));

export const SearchBar = (props) =>{
    const classes = useStyles();

    return(
        <input className={classes.inline} ></input>
        // <input />
    )
}

