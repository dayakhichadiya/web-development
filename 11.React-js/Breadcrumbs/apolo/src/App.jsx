import "./App.css";
import React, {useState} from "react";
import BreadCrumbs from "./component/BreadCrumbs";

function App() {
    const [crumbs, setCrumbs] = useState(['Home', 'Category', 'Sub-Category'])

    const selected = crumb => {
      console.log(crumb);
    }
  return (
    <>
    <div className="App container">
      <BreadCrumbs crumbs = { crumbs } selected = {selected} />
    </div>
    
    </>
  );
}

export default App;
