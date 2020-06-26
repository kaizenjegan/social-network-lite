import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import RefreshIcon from '@material-ui/icons/Refresh';

const useStyles = makeStyles((theme) => ({
    root: {
        background: "#28b28d",
        position: "fixed",
        marginLeft: "auto",
        marginRight: "auto",
        left: "100px",
        right: "100px",
        textAlign: "center",
        zIndex: 1000000000,
        paddingBottom: "10px",
        borderRadius: "25px",
        paddingTop: "10px"
      },
      refresh: {
        float: "left",
        textAlign: "center",
        paddingLeft: "40px",
        paddingRight: "10px"
      },
      typeFace: {
        float: "left",
        paddingTop: "4px"
      }
  }));

export const NewPostRefreshBar = () =>{
    const classes = useStyles();
    
    return (<div className={classes.root}> 
             <div className={classes.refresh}> <RefreshIcon/> </div>
             <div className={classes.typeFace}> New Post </div>
            </div> )
}


// export default NewPost;