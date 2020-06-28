import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import { Post as Card } from '../pages/homePage/Card';
const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: '#cecece'
    }
  }));

const card = {
  body: "This ixmpressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
  img: "/place-holder.jpeg",
  reactions: {
    likes: 0,
    claps: 0,
    loves: 0
  }
}
  
export const Post = (props) => {
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <Card props={props} card={card}></Card>
        </div>
    )
}