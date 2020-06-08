import React from "react"
export const initialState = {
  searchTerm: ""
}

const EDIT = "EDIT"

export const searchReducer = (state, action) => {
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

export const editSearch = ({ searchParam, value }) => {
  return {
    type: EDIT,
    payload: {
      searchParam,
      value,
    },
  }
}

export const SearchContext = React.createContext(null)
