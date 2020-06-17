import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import RefreshIcon from '@material-ui/icons/Refresh';

const useStyles = makeStyles((theme) => ({
    root: {
        background: "#28b28d",
        position: "fixed",
        marginLeft: "auto",
        marginRight: "auto",
        left: 130,
        right: 130,
        textAlign: "center",
        zIndex: 1000000000,
        paddingBottom: "10px",
        borderRadius: "25px",
        paddingTop: "10px"
      },
      refresh: {
        //   marginTop: "2px"
      },
      typeFace: {
        paddingTop: "-1px"
      }
  }));

export const NewPost = () =>{
    const classes = useStyles();
    
    return (<div className={classes.root}> 
             <span className={classes.refresh}> <RefreshIcon/> </span>
             <span className={classes.typeFace}> New Post  </span>
            </div> )
}


// export default NewPost;