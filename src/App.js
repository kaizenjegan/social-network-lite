import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { onError } from "apollo-link-error";
import { ApolloLink } from "apollo-link";
import { split } from "apollo-link";
import { WebSocketLink } from "apollo-link-ws";
import { getMainDefinition } from "apollo-utilities";
import { createHttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  SearchContext,
  searchReducer,
  initialState,
  editSearch,
} from "./Contexts/SearchContext";

import {
  UserContext,
  userReducer,
  initialUserState,
} from "./Contexts/UserContext";

import { HomePage } from "./HomePage"
import { Post } from "./Post"
import { Layout } from './Component/Layout'

import logo from "./logo.svg";
import "./App.css";

function App() {
  // Context for Search terms / genres / categories
  const [searchInfo, dispatch] = React.useReducer(searchReducer, initialState);
  const [userInfo, userDispatch] = React.useReducer(
    userReducer,
    initialUserState
  );

  const createClient = () => {
    const httpLink = createHttpLink({
      uri: `https://localhost:3001/graphql`,
    });

    const authLink = setContext((_, { headers }) => {
      const localToken = sessionStorage.getItem("auth");
      console.log("localToken: ", localToken);
      return {
        headers: {
          ...headers,
          authorization: localToken
            ? `Bearer ${JSON.parse(localToken).token}`
            : "",
        },
      };
    });

    const wsLink = new WebSocketLink({
      // TODO : fix so not hardcoded localhost
      uri: `ws://localhost:3001/graphql`,
      options: {
        // reconnect: true,
        connectionParams: {
          authToken: localStorage.getItem("auth"),
        },
      },
    });

    const link = split(
      ({ query }) => {
        const { kind, operation } = getMainDefinition(query);
        return kind === "OperationDefinition" && operation === "subscription";
      },
      wsLink,
      authLink.concat(httpLink)
    );

    const client = new ApolloClient({
      link,
      cache: new InMemoryCache(),
    });
    return client;
  };

  const [client, setClient] = useState(createClient());

  return (<div className="App">
    <SearchContext.Provider value={dispatch}>
        <UserContext.Provider value={userDispatch}>
            <ApolloProvider client={client}>
            {/* add ThemeProvider */}
              <Layout>
                  <Router>
                    <Switch>
                      <Route
                        exact
                        path="/"
                        render={(props) => {
                          return (
                            <HomePage
                              {...props}
                            />
                          )
                        }}
                      />  
                      <Route
                        exact
                        path={"/post/:postId"}
                        render={(props) => {
                          return (
                            <Post {...props} />
                          )
                        }}
                      />  
                    </Switch>    
                </Router>
              </Layout>
            </ApolloProvider>
          </UserContext.Provider>
    </SearchContext.Provider>
    
  </div>);
}

export default App;
