import UserContext from "./UserContext";
import { useState } from "react";

const UserContextProvider = ({children}) => {

  const [user, setUser] = useState({});

  return (
    <div className="border-2 border-black max-w-xl mx-auto mt-12">
      <UserContext.Provider value={{ user, setUser }}>
        {children}
      </UserContext.Provider>
    </div>
  );
};

export default UserContextProvider;
