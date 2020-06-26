import React from "react"
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import NotificationsIcon from '@material-ui/icons/Notifications';
import WorkIcon from '@material-ui/icons/Work';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: "#fff", 
      color: "black",  
      position: "fixed",
      bottom: "0", left: "0", right: "0", height: "50px",
      paddingTop: "15px",
      borderTop: "1px solid #d6d6d6"
    },
    span:{ 
        paddingRight: "20px",
        paddingLeft: "20px"
    }
  }));
  

export const Footer = (props) =>{
    const classes = useStyles();
    
    // change to div
    return(
        <div className={classes.root}>
            <span  onClick={() => { props.history.push("/")}} className={classes.span}> <HomeIcon/>  </span>
            
            <span className={classes.span} onClick={() => { props.history.push("/myNetwork")}} > <PeopleIcon /> </span>
            
            <span onClick={() => { props.history.push("/newPost")}} className={classes.span}> <AddIcon /> 
              {/* <span>post</span> */}
            </span>

            <span onClick={() => { props.history.push("/notification")}}  className={classes.span}> <NotificationsIcon/> </span>
            <span onClick={() => { props.history.push("/jobs")}}  className={classes.span}> <WorkIcon/> </span>
{/* , PeopleIcon}       */}
        </div>
    )
}