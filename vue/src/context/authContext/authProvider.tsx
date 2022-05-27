import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { saveSessionToken } from "../../utils/helpers";
import { authProvider } from "./auth";

interface authContextType {
    user: any;
    setUser: Function;
    signIn: (user: string) => void;
    signOut: (callback: VoidFunction) => void;
    signUp: (user: any) => void;
}
export const AuthContext = React.createContext<authContextType>(null!);
const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState<any>(null);
    const [token, setToken] = useState<any>(null);
    const signUp = (newUser: any) => {
        authProvider.signUp(newUser).then((res) => {
            return authProvider.signIn(() => {
                saveSessionToken(res.data.token);
                setUser(res.data.user);
                setToken(res.data.token);
                navigate("/");
            });
        });
    };

    const signIn = (user: any) => {
        console.log("user", user);
        authProvider.signIn(async () => {
            await axios
                .post("http://localhost:8000/api/login", user)
                .then((res) => {
                    saveSessionToken(res.data.token);
                    setUser(res.data.user);
                    setToken(res.data.token);
                    navigate("/");
                })
                .catch((err) => {
                    console.log(err);
                });
        });
    };
    const signOut = (callback: VoidFunction) => {
        return authProvider.signOut(() => {
            setUser(null);
            callback();
        });
    };
    let value = { user, signIn, signOut, setUser, signUp };
    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;
