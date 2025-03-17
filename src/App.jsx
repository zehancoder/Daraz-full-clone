import "./App.css";
import { Header } from "./components/common/header";
import { ProductCard } from "./components/common/ProductCard";
import { HeroSec } from "./components/landingPage/HeroSection";
import Slider from "./components/landingPage/Slider";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FeedbackLoader from "./components/landingPage/test/test";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element= {<HeroSec></HeroSec>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
