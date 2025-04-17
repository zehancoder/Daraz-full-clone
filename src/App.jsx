import "./App.css";
import { Heading } from "./components/common/Headings";
import { HeroSec } from "./components/landingPage/HeroSection";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ForYouItem } from "./components/landingPage/LinkingPages/ForyouItem";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import { ViewItem } from "./components/common/ViewItem";
import { ForyouProduct } from "./components/landingPage/JustforYouProduct";
function App() {
  const [productID, setProductID] = useState(null)

  const IdHandler = (mainId) => {
    setProductID(mainId)
  }
  return (
    <>
      <BrowserRouter>
        <Heading />
        <Routes>
          <Route path="/" element={<HeroSec IdHandler = {IdHandler}></HeroSec>} />
          <Route path="/viewItem" element={<ViewItem productId ={productID}></ViewItem>}/>
          <Route path="/forYouItem" element= {<ForYouItem/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
 