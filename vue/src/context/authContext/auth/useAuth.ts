import React from "react";
import { AuthContext } from "../authProvider";
export const useAuth = () => {
    return React.useContext(AuthContext);
};
