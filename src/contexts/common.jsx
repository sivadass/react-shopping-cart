import React, { useReducer, createContext } from "react";

const initialState = {
  isSearchBarOpen: false
};

export const CommonStateContext = createContext();
export const CommonDispatchContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_SEARCH_BAR":
      return {
        ...state,
        isSearchBarOpen: !state.isSearchBarOpen
      };
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
};

export const toggleSearchBar = (dispatch) => {
  return dispatch({
    type: "TOGGLE_SEARCH_BAR"
  });
};

const CommonProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <CommonDispatchContext.Provider value={dispatch}>
      <CommonStateContext.Provider value={state}>
        {children}
      </CommonStateContext.Provider>
    </CommonDispatchContext.Provider>
  );
};

export default CommonProvider;
