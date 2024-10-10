import { createContext } from "react";

const ApiPathContext= createContext();

export default function ApiPathProvider({children}){
    const [apipath, setApiPath] = useState("");
    return (
        <ApiPathContext.Provider value={{apipath, setApiPath}}>
            {children}
        </ApiPathContext.Provider>
    )
}
