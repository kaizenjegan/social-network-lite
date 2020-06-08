import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import React, { useState, useEffect } from "react"
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles"
import { ApolloProvider } from "react-apollo"
import { ApolloClient } from "apollo-client"
import { InMemoryCache } from "apollo-cache-inmemory"
import { onError } from "apollo-link-error"
import { ApolloLink } from "apollo-link"
import { split } from "apollo-link"
import { WebSocketLink } from "apollo-link-ws"
import { getMainDefinition } from "apollo-utilities"
import { createHttpLink } from "apollo-link-http"
import { setContext } from "apollo-link-context"


import { makeStyles, useTheme } from "@material-ui/core/styles"
import {
  HeaderImageContext,
  headerImageReducer,
  initialState as headerInitialState,
  setHeaderImage,
} from "./Contexts/HeaderImageContext"

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
