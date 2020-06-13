import React from "react"
export const InitialState = {
  searchTerm: ""
}

const EDIT = "EDIT"

export const SearchReducer = (state, action) => {
  switch (action.type) {
    case EDIT:
      return {
        ...state,
        [action.payload.searchParam]: action.payload.value,
      }
    default:
      return state
  }
}

export const EditSearch = ({ searchParam, value }) => {
  return {
    type: EDIT,
    payload: {
      searchParam,
      value,
    },
  }
}

export const SearchContext = React.createContext(null)
