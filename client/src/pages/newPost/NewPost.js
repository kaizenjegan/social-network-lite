import React from "react";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
      },
      paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        boxShadow: "none"
      },
      image: {
        width: 128,
        height: 128,
      },
      img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
      },
}));

export const NewPost = (props)=>{
    const classes = useStyles();
    const FormRow = () => {
        return (
          <React.Fragment>
            <Grid item xs={4}>
              <Paper className={classes.paper}>Profile</Paper>
            </Grid>
            <Grid item xs={7}>
              <Paper className={classes.paper}>Jegan Matthews</Paper>
              <Paper className={classes.paper}>Public</Paper>
            </Grid>
          </React.Fragment>
        );
      }

    return(
        <div className={classes.root}>
            <Grid container spacing={1}>
                <Grid container item xs={12} spacing={1}>
                    <FormRow />
                </Grid>
            </Grid>

            <TextField
            id="standard-multiline-static"
            label="Share your thoughts"
            multiline
            rows={4}
            /> 
        </div>
    );
}

