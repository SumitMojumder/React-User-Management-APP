import { createContext, useState } from "react";

export const userContext = createContext()


const UserProvider = ({children}) =>{
    const [users, setUsers]=useState([{id:1, name: "Sumit Mojumder"},
                                        {id: 2, name: "Geeti Saha Kathi"}])
    return (<userContext.Provider value={{users, setUsers}}>
        {children}
    </userContext.Provider>)
}

export default UserProvider
