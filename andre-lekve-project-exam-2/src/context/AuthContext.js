import React from "react";
import useLocalStorage from "../hooks/localStorage";

export const AuthContext = React.createContext([null, () => {}]);

export const AuthProvider = (props) => {
	const [auth, setAuth] = useLocalStorage("auth", null);
	return <AuthContext.Provider value={[auth, setAuth]}>{props.children}</AuthContext.Provider>;
};
