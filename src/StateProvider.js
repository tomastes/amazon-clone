//!setup data layer
import React, { createContext, useContext, useReducer } from "react";
//?this is data layer
export const StateContext = createContext();

//?build a Provider helps you to overcome the prop drilling (from grandparent to parent to children to subchildren on so on)
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//!this how to use it inside of a component
export const useStateValue = () => useContext(StateContext);
