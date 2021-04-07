// setup data layer
// We need this to track the basket

import React, {createContext, useContext, useReducer} from 'react';

// THIS IS TH DATA LAYER
export const StateContext= createContext();

// BUILD A PROVIDER
export const StateProvider=(props)=>(
    <StateContext.Provider value={useReducer(props.reducer, props.initialState)}>
        {props.children}
    </StateContext.Provider>
);

export const useStateValue=()=> useContext(StateContext);