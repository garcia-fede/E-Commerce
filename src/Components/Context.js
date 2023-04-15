import { createContext, useState } from "react";

export const context = createContext()
const { Provider } = context

const ContextProvider = ({children}) => {

    const contextValue = {
        
    }

    return (
        <Provider value={contextValue}>
            {children}
        </Provider>
    )
}

export default ContextProvider