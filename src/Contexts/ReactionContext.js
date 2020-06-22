import React, {useState} from "react"

export const initialReaction = {
  show: false
}

const OPEN = "OPEN";
const CLOSE = "CLOSE";

export const reactionReducer = (state, action) => {
  console.log(action.type);
  switch (action.type) {
    case OPEN:
      return { ...state, show: true}
    case CLOSE:
      return { ...state, show: false}
    default:
      return state
  }
}


export const ReactionContext = React.createContext(initialReaction)

export const ReactionProvider = ReactionContext.Provider;

export const ReactionConsumer = ReactionContext.Consumer;