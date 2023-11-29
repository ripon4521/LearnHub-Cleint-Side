import { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";


const Private = ({children}) => {
    const {user ,loading} = useContext(AuthContext);
    let location = useLocation();
    if (loading) {
      return  <span className="loading md:ml-40 lg:ml-96 w-[500px] loading-infinity "></span>
    }
    if (user) {
        return children;
    }
   
    return <Navigate to="/login" state={{from:location}} replace></Navigate>
        
    
};

export default Private;