import { createContext, useContext, useState } from "react";

const AuthContext = createContext(); // Create context

const AuthProvider = ({ children }) => {
    const [isAuth, setIsAuth] = useState(false); 
    const [currentUser, setCurrentUser] = useState(null); 
    const [users, setUsers] = useState([
        { username: "daya", password: "daya09" }, 
    ]);

    const login = (username, password) => {
        const user = users.find(
            (u) => u.username === username && u.password === password
        );
        if (user) {
            setIsAuth(true);
            setCurrentUser(user);
            return true;
        }
        return false;
    };

    const register = (username, password) => {
        const userExists = users.some((u) => u.username === username);
        if (userExists) {
            return false; 
        }
        setUsers((prevUsers) => [...prevUsers, { username, password }]);
        return true; 
    };


    const logout = () => {
        setIsAuth(false);
        setCurrentUser(null);
    };

    return (
        <AuthContext.Provider
            value={{ isAuth, login, logout, register, currentUser }}
        >
            {children}
        </AuthContext.Provider>
    );
};


export const useAuth = () => useContext(AuthContext);

export default AuthProvider;
