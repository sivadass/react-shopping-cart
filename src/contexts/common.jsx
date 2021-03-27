import React, { useReducer, createContext } from "react";

const initialState = {
  isSearchBarOpen: false,
  searchKeyword: ""
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
    case "SET_SEARCH_KEYWORD":
      return {
        ...state,
        searchKeyword: action.payload.searchKeyword
      };
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
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

export const toggleSearchBar = (dispatch) => {
  return dispatch({
    type: "TOGGLE_SEARCH_BAR"
  });
};

export const setSearchKeyword = (dispatch, searchKeyword) => {
  return dispatch({
    type: "SET_SEARCH_KEYWORD",
    payload: {
      searchKeyword: searchKeyword
    }
  });
};

export default CommonProvider;
