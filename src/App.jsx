import "./App.css";
import { Heading } from "./components/common/Headings";
import { ProductCard } from "./components/common/ProductCard";
import { HeroSec } from "./components/landingPage/HeroSection";
import Slider from "./components/landingPage/Slider";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FeedbackLoader from "./components/landingPage/test/test";
import { ForYouItem } from "./components/landingPage/LinkingPages/ForyouItem";
function App() {
  return (
    <>
      <BrowserRouter>
        <Heading />
        <Routes>
          <Route path="/" element={<HeroSec></HeroSec>} />
          <Route path="/forYouItem" element= {<ForYouItem/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
 