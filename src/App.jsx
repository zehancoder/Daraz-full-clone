import "./App.css";
import { Heading } from "./components/common/Headings";
import { HeroSec } from "./components/landingPage/HeroSection";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ForYouItem } from "./components/landingPage/LinkingPages/ForyouItem";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
 