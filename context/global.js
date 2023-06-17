
import React  from "react";

/**
 * We create a global context here
 */
const GlobalContext = React.createContext({
    store:{},
    setStore:() => {},
});


export default GlobalContext;
