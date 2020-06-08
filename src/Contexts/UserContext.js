import React from "react"
export const initialUserState = {
  token: "",
  userId: "",
}

const EDIT = "EDIT"
const REPLACE = "REPLACE"

export const userReducer = (state, action) => {
  let result = state
  switch (action.type) {
    case EDIT:
      result = {
        ...state,
        [action.payload.authKey]: action.payload.value,
      }
      break
    case REPLACE:
      result = action.payload
      break
    default:
      result = state
  }
  sessionStorage.setItem("auth", JSON.stringify(result))
  console.log(">>>>>>>>>>>>>", result)
  return result
}

export const replaceUserAuth = (authObject) => {
  console.log(",,,,,,,,,,,,,,,,,", authObject)
  return {
    type: REPLACE,
    payload: authObject,
  }
}

export const editUserAuth = ({ authKey, value }) => {
  return {
    type: EDIT,
    payload: {
      authKey,
      value,
    },
  }
}

export const UserContext = React.createContext(null)
