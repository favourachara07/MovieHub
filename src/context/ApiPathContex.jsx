import { createContext, useContext, useState } from "react";

const ApiPathContext= createContext();

function ApiPathProvider({children}){
    const [apipath, setApiPath] = useState("");
    return (
        <ApiPathContext.Provider value={{apipath, setApiPath}}>
            {children}
        </ApiPathContext.Provider>
    )
}
function useApiPath(){
    const context = useContext(ApiPathContext);
    if (!context) {
        throw new Error('useApiPath must be used within a ApiPathProvider');
    }
    return context;
}

export {ApiPathProvider, useApiPath};