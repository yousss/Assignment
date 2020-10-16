import React, { createContext, useReducer } from "react";
import { initalState } from "./UserProp";
import UserReducer from './UserReducer';


export const GlobalContext = createContext(initalState);


export const GlobalProvider:React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(UserReducer, initalState);

    return (
        <GlobalContext.Provider value={
            state
        }>
            {children}
        </GlobalContext.Provider>
    )
}