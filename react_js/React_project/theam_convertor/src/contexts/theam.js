import { useContext ,createContext,useState } from "react";

export const useCntx=createContext({
     theam:"light",
     darktheam:()=>{},
     lighttheam:()=>{}
});

export const Use_provider=useCntx.Provider;


//hook of useTheam.......we can excess theam ddarktheam and lighttheam globaly
export default function useTheam() {
    return useContext(useCntx)
}
