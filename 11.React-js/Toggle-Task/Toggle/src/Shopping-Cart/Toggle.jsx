import { useDispatch, useSelector } from "react-redux";

const Toggle = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme?.darkMode || false);

  return (
    <button
      onClick={() => dispatch({ type: "TOGGLE_THEME" })}
      className={`p-2 rounded-lg transition-all ${
        darkMode ? "bg-gray-800 text-white" : "bg-blue-500 text-black"
      }`}
    >
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

export default Toggle;
