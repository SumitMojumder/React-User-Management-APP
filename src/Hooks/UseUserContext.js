import { useContext } from "react";
import { userContext } from "../userContext/UserContext";

export const UseUserContext = ()=>{
    return useContext(userContext)
}