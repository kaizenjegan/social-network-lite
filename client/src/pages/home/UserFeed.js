import React, { useState, useEffect, Fragment } from 'react';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MessageIcon from '@material-ui/icons/Message';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import CardActionArea from '@material-ui/core/CardActionArea';
import Button from '@material-ui/core/Button';
import { Post } from './Post';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
const useStyles = makeStyles((theme) => ({
  root: {
    // paddingBottom: '50px'
    marginTop: "10px"
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    
  },
  fullCard: {
    width: "100%"
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  header:{
    // color: "red",
    // fontSize: "10pt",
    // height: "1px"
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export const GET_DASHBOARD_CARDS = gql`
  query getDashboard {
    dashboard(id: "1") {
      id
      body
      image
      reaction{
      	like
        love
        celebration
        insightful
      }
    }
  }
`;

export const UserFeed = (props) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  //todo add type
  const { data, loading, error } = useQuery(
    GET_DASHBOARD_CARDS
  );

  if (!data) 
    return <p>Not found</p>
  else
    return ((
      <Fragment>
        {data.dashboard.map( card => 
            {
              return <Post props={props} card={card}></Post>
          })
        }
      </Fragment>
    ))    
}