
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../Redux/themeSlice";

const ToggleButton = () => {
  const theme = useSelector((state) => state.theme?.mode || "light"); // ✅ Safe access
  const dispatch = useDispatch();

  return (
    <div className={`app ${theme}`}>
      <h1>{theme === "light" ? "Light Mode on" : "Dark Mode on"}</h1>
      <button onClick={() => dispatch(toggleTheme())}>Toggle Theme</button>
    </div>
  );
};

export default ToggleButton;
