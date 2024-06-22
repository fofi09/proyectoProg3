import { createContext, useContext, useState } from "react";
import { createHistorialClinico } from "../api/historial";

const HistorialContext= createContext();

export const useHistorial=()=>{
    const context= useContext(HistorialContext);
    if(!context){
        throw new Error("frase rara");
    }
    return context;
}
export function HistorialProvide({children}){
    const [historial, setHistorial]= useState([]);

    const createHistorial= async (historial)=>{
      const res= await createHistorialClinico(historial)
      console.log(res)
    }//

    return(
        <HistorialContext.Provider value={{
            historial,
            createHistorial
        }}
        >
            {children}
        </HistorialContext.Provider>
    );
};