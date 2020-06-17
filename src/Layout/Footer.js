import React from "react"
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import NotificationsIcon from '@material-ui/icons/Notifications';
import WorkIcon from '@material-ui/icons/Work';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: "#fff", 
      color: "black",  
      position: "fixed",
      bottom: "0", left: "0", right: "0", height: "50px"
    },
    span:{ 
        paddingRight: "20px",
        paddingLeft: "20px"
    }
  }));
  

export const Footer = (props) =>{
    const classes = useStyles();
    
    return(
        <div className={classes.root}>
            <span  onClick={() => { props.history.push("/")}} className={classes.span}> <HomeIcon/>  </span>
            <span className={classes.span}> <PeopleIcon /> </span>
            <span className={classes.span}> <NotificationsIcon/> </span>
            <span className={classes.span}> <WorkIcon/> </span>
{/* , PeopleIcon}       */}
        </div>
    )
}