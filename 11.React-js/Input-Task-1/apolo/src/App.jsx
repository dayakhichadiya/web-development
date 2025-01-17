import "./App.css";
import UseRefExample from "./useRef/InputTask-1";
import ImageScroll from "./useRef/ImageScroll-2";
import VideoPlayer from "./useRef/VedioTask-3";
import ExposeRefExample from "./useRef/Exposing-ref-4";
import ClickCounter from "./useRef/Counter-5";
import Stopwatch from "./useRef/Stopwatch-6";
import ShopPage from "./ContextAPI/ShopPage";
import { ProductsProvider } from "./ContextAPI/ProductContext";

function App(){
  return (
    <>
    {/* <UseRefExample/> */}
    {/* <ImageScroll/> */}
    {/* <VideoPlayer/> */}
    {/* <ExposeRefExample/> */}
    {/* <ClickCounter/> */}
    {/* <Stopwatch/> */}

    <ProductsProvider>
      <ShopPage />
    </ProductsProvider>
    </>
  )
}

export default App;
