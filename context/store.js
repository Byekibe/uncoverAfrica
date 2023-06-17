import {createContext, useReducer} from "react";
import Reducer from './reducer'


const initialState = {
    error: null,
    user:localStorage.getItem('auth_token')
};

const Store = ({children}) => {
    const [state, dispatch] = useReducer(Reducer, initialState);
   
    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
};

export const Context = createContext(initialState);
export default Store;
