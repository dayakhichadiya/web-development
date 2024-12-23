import "./App.css";
import ThemeContextProvider from "./context/themeContextProvider";
import Card from "./component/Card";
import ThemeButton from "./component/ThemeButton";
function App() {

  return (
    <>
    <h1 className="heading">This is App Components</h1>
      <ThemeContextProvider>
        <Card/>
        <ThemeButton/>
      </ThemeContextProvider>
    </>
  );
}

export default App;
