import './App.css';
import { Recipe } from './component/Pure';
import { Tea } from './component/Impure';
import Event from './component/Event';

function App() {
  return (
   <>
    <Recipe drinkers={2} />
    <Recipe drinkers={3} />
    <Recipe drinkers={5} />
    <br/>
    <Tea guest={3} />
    <Tea guest={2} />
    <Tea guest={6} />
    <br/>
    <Event/>
   </>

  );
}

export default App;
