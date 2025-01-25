import "./App.css";
import Login from "./component/Login";
import Profile from "./component/Profile";
import UserContextProvider from "./context/UserContextProvider";
function App() {

  return (
    <>
    <h1 className="heading">This is App Components</h1>
      <UserContextProvider>
        <Profile />
        <Login />
      </UserContextProvider>
    </>
  );
}

export default App;
