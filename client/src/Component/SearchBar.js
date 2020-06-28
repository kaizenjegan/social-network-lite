import React, {useEffect } from "react";
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import InputBase from '@material-ui/core/InputBase';
import { makeStyles, withStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    inline: {
        margin: "10px",
        float: "left",
        padding: '10px 111px 0px 12px',
        fontSize: "16px"
    }
  }));

export const SearchBar = (props) =>{
    const classes = useStyles();

    return(
        <div>
        <input className={classes.inline} ></input>
            {/* <FormControl className={classes.margin}>
            <InputLabel htmlFor="demo-customized-textbox">Age</InputLabel>
            <BootstrapInput id="demo-customized-textbox" />
        </FormControl> */}
        </div>
    )
}

