import React from "react";
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import InputBase from '@material-ui/core/InputBase';
import { makeStyles, withStyles } from '@material-ui/core/styles';


const BootstrapInput = withStyles((theme) => ({
    root: {
      'label + &': {
        marginTop: theme.spacing(3),
      },
    },
    input: {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #ced4da',
      fontSize: 16,
      padding: '10px 26px 10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        borderRadius: 4,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    },
  }))(InputBase);

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

