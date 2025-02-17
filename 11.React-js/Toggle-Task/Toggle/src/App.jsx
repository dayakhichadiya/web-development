import { useSelector } from 'react-redux';
import Navbar from './component/Navbar';
import Toggle from './Shopping-Cart/Toggle';
import './App.css';

const App = () => {
  const darkMode = useSelector((state) => state?.theme?.darkMode || false); // Handle undefined state

  return (
    <>
    <div className={`${darkMode ? 'bg-black text-white' : 'bg-white text-black'} min-h-screen`}>
      <Navbar />
       <div className="flex justify-center items-center min-h-screen">
        <Toggle />
       </div>
     </div>
    </>
  );
};

export default App;
