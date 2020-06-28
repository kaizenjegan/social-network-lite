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
  SearchReducer,
  InitialState,
  EditSearch,
} from "./contexts/SearchContext";

import {
  UserContext,
  userReducer,
  initialUserState,
} from "./contexts/UserContext";

import {
  ReactionContext,
  reactionReducer,
  initialReaction,
  ReactionProvider,
  ReactionConsumer
} from "./contexts/ReactionContext";

import { HomePage } from "./pages/home";
import { Post } from "./pages/post";
import { MainLayout } from "./pages/layout/MainLayout";
import { NewPost } from './pages/newPost';
import { MyNetwork } from './pages/myNetwork';
import { Jobs } from './pages/jobs';
import { Notification } from './Notification';

import logo from "./logo.svg";
import "./App.css";

function App() {
  // Context for Search terms / genres / categories
  const [searchInfo, dispatch] = React.useReducer(SearchReducer, InitialState);
  const [userInfo, userDispatch] = React.useReducer(
    userReducer,
    initialUserState
  );
  const [reaction, reactionDispatch] = React.useReducer(reactionReducer, initialReaction);

  const createClient = () => {
    const httpLink = createHttpLink({
      uri: `http://localhost:4000/graphql`,
    });

    const authLink = setContext((_, { headers }) => {
      const localToken = sessionStorage.getItem("auth");
      // console.log("localToken: ", localToken);
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
      uri: `ws://localhost:4000/graphql`,
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

  const [client, setClient] = useState(createClient()); //TS get type def

  return (
    <div className="App">
      <ReactionProvider value={reactionDispatch}>
        <SearchContext.Provider value={dispatch}>
          <UserContext.Provider value={userDispatch}>
            <ApolloProvider client={client}>
              {/* add ThemeProvider */}

              <Router>
                <Switch>
                  <Route
                    exact
                    path="/"
                    render={(props) => {
                      return (
                        <MainLayout {...props}>
                          <HomePage reaction={reaction} {...props} />
                        </MainLayout>
                      );
                    }}
                  />
                  <Route
                    exact
                    path={"/post/:postId"}
                    render={(props) => {
                      return (
                        <MainLayout {...props}>
                          <Post {...props} />
                        </MainLayout>
                      );
                    }}
                  />
                  <Route
                    exact
                    path={"/newPost"}
                    render={(props) => {
                      return (
                        <MainLayout {...props}>
                          <NewPost {...props} />
                        </MainLayout>
                      );
                    }}
                  />
                  <Route
                    exact
                    path={"/myNetwork"}
                    render={(props) => {
                      return (
                        <MainLayout {...props}>
                          <MyNetwork {...props} />
                        </MainLayout>
                      );
                    }}
                  />

                  <Route
                    exact
                    path={"/jobs"}
                    render={(props) => {
                      return (
                        <MainLayout {...props}>
                          <Jobs {...props} />
                        </MainLayout>
                      );
                    }}
                  />

                  <Route
                    exact
                    path={"/Notification"}
                    render={(props) => {
                      return (
                        <MainLayout {...props}>
                          <Notification {...props} />
                        </MainLayout>
                      );
                    }}
                  />
                </Switch>
              </Router>
            </ApolloProvider>
          </UserContext.Provider>
        </SearchContext.Provider>
      </ReactionProvider>
    </div>
  );
}

export default App;
