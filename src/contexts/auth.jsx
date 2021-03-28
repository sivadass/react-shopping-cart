import React, { useReducer, createContext, useEffect } from "react";
import _get from "lodash.get";
import useLocalStorage from "hooks/useLocalStorage";

const initialState = {
  isLoggedIn: false,
  user: null,
  isLoggingIn: false
};

export const AuthStateContext = createContext();
export const AuthDispatchContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_REQUEST":
      return {
        ...state,
        isLoggedIn: false,
        user: null,
        isLoggingIn: true
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload.user,
        isLoggingIn: false
      };
    case "LOGIN_FAILURE":
      return {
        ...state,
        isLoggedIn: false,
        user: null,
        isLoggingIn: false
      };
    case "LOGOUT_SUCCESS":
      return {
        ...state,
        ...initialState
      };
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
};

export const signIn = (dispatch, userData) => {
  localStorage.setItem("user", JSON.stringify(userData));
  return dispatch({
    type: "LOGIN_SUCCESS",
    payload: {
      user: userData
    }
  });
};

export const signOut = (dispatch) => {
  localStorage.clear();
  return dispatch({
    type: "LOGOUT_SUCCESS"
  });
};

const AuthProvider = ({ children }) => {
  const [persistedUser, setPersistedUser] = useLocalStorage("user", null);
  const persistedUserState = {
    ...initialState,
    user: persistedUser,
    isLoggedIn: _get(persistedUser, "username", "").length > 0
  };
  const [state, dispatch] = useReducer(reducer, persistedUserState);

  useEffect(() => {
    setPersistedUser(state.user);
  }, [state.isLoggedIn]);

  return (
    <AuthDispatchContext.Provider value={dispatch}>
      <AuthStateContext.Provider value={state}>
        {children}
      </AuthStateContext.Provider>
    </AuthDispatchContext.Provider>
  );
};

export default AuthProvider;
