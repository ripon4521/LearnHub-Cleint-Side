import { useContext } from "react";
import { AuthContext } from "../../providers/Authprovider";
import { Navigate, useLocation } from "react-router-dom";


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