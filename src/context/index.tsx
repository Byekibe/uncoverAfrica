import React, {useEffect, createContext, ReactNode, useReducer} from "react";   
import Reducer from './Reducer';                                                                                                                                              
import { IState} from "./Interface";

const initialState: IState = {
   user:{}
};
                                                                                                                          
export const Context = createContext<IState | any>(initialState);                               
                                                                                
const Store = ({children}: {children:ReactNode}) => {                                                 
    const [state, dispatch] = useReducer(Reducer, initialState);
    
    //persist login
    useEffect(() => {  
        const fetchLocatData = async () => {
            const localState = localStorage.getItem('user');
            const stateValue = await JSON.parse(localState || '{}');   
            if (stateValue && stateValue !== "{}") {                                                      
                dispatch({type: 'CREATE', key:'user', payload: stateValue}); 
            }  
         }
         fetchLocatData().catch(console.error);                                                                  
    }, []);                                                                     
                                                                                
    useEffect(() => {           
        localStorage.setItem('user', JSON.stringify(state.user))                    
    }, [state.user])                                                                 

    return (                                                                    
        <Context.Provider value={[state, dispatch]}>                            
            {children}                                                          
        </Context.Provider>                                                     
    )                                                                           
}; 

export default Store;


