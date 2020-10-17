import React, { createContext, useReducer, useState, useContext } from "react";
import { initalState } from "../share/UserProp";
import UserReducer from './UserReducer';

interface langProp {
    lang: string;
}

const GlobalContext = createContext(initalState);
const UpdateLanguageContext = createContext(()=>{})
const LanguageContext = createContext(true)

export const useLanguage = () => useContext(LanguageContext);


export const useUpdateLanguage = () => useContext(UpdateLanguageContext);


export const GlobalProvider:React.FC = ({ children }) => {

    const [state, dispatch] = useReducer(UserReducer, initalState);
    const [lang, setLang] = useState(true);

    const toggleLanguage = ():void => {
        setLang(prevLang => !prevLang)
    }

    return (
        <GlobalContext.Provider value={state}>
            <LanguageContext.Provider value={lang} >
                <UpdateLanguageContext.Provider value={toggleLanguage} >
                    {children}
                </UpdateLanguageContext.Provider>
            </LanguageContext.Provider>
        </GlobalContext.Provider>
    )
}