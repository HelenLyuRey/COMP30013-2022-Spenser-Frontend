import { createContext } from "react";

export const AuthContext = createContext({
	userID: 0,
	isLoggedIn: false,
	onLogout: () => {},
	onLogin: (userID) => {},
});

export default AuthContext;
