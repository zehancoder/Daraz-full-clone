import "./App.css";
import { Heading } from "./components/common/Headings";
import { HeroSec } from "./components/landingPage/HeroSection";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ForYouItem } from "./components/landingPage/LinkingPages/ForyouItem";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import { ViewItem } from "./components/common/ViewItem";
import { Massege } from "./components/common/Massege";
import { ShopAllItem } from "./components/landingPage/LinkingPages/ShopAll";
import { LoginPage } from "./components/common/Login";
import { CartWorking } from "./components/common/Cart";
import SearchFoundItems from "./components/common/SearchFoundItems";
function App() {
  const [productID, setProductID] = useState(null);

  const IdHandler = (mainId) => {
    setProductID(mainId);
  };

  const [loginStart, setLoginStart] = useState(false);

  const [loginSuccess, setLoginSuccess] = useState(null);

  // add forgot password functionality
  const [forgotPass, setForgotPass] = useState(false);
  const forgotPssHandler = (ans) => {
    setForgotPass(ans);
  };

  // adding items system
  const [addingProduct, setAddingProduct] = useState([]);
  const [addingMassege, setaddingMassege] = useState(true);
  // const [NewId, setNewId] = useState();
  const handleCartItems = (ids) => {
    setAddingProduct((prev) => [...prev, parseInt(ids)]);
    setAddingProduct((prev) => [...new Set(prev)]);
    // setNewId(parseInt(ids))
  };

  // remove same items
  // let [newItms, setNewItms] = useState();

  // useEffect(() => {
  //   setNewItms(
  //     addingProduct.filter((addingId) => parseInt(addingId) !== parseInt(addingId))
  //   );
  //   addingProduct.length == 0 && setNewId(0)
  // }, [addingProduct]);

  // console.log(newItms);

  const [cartItems, setCartItems] = useState();
  const handleCart = (mainItem) => {
    setCartItems(mainItem);
  };

  console.log(cartItems);

  const [load, setLoad] = useState(false);

  // search filterign items
  const [searchItems, setSearchItems] = useState([]);
  const handleSearchItems = (item) => {
    setSearchItems(item);
  };

  
  // login success and signup succes notification

  const [signUpMassege, setSignUpMassege] = useState(false);

    // login an sign Up massege text
    const [massegeText, setMassegeText] = useState("");
  

  return (
    <>
      <BrowserRouter>
        <Heading
          handleSearchItems={handleSearchItems}
          setLoginStart={setLoginStart}
          loginStart={loginStart}
          loginSuccess={loginSuccess}
          addingItems={addingProduct}
          signUpMassege = {signUpMassege}
          setSignUpMassege = {setSignUpMassege}
           massegeText ={ massegeText}
          setMassegeText = {setMassegeText}
        />
        <Routes>
          <Route path="/" element={<HeroSec IdHandler={IdHandler}></HeroSec>} />
          <Route
            path="/viewItem"
            element={
              <ViewItem
                productId={productID}
                handleCartItems={handleCartItems}
                handleCart={handleCart}
                setloginStart={setLoginStart}
                load={load}
                setLoad={setLoad}
                loginSuccess={loginSuccess}
                setaddingMassege={setaddingMassege}
                addingMassege={addingMassege}
              ></ViewItem>
            }
          />
          <Route path="/forYouItem" element={<ForYouItem />} />
          <Route
            path="/shopAll"
            element={<ShopAllItem IdHandler={IdHandler} />}
          />
          <Route
            path="/cart"
            element={
              <CartWorking
                productID={productID}
                addingProduct={addingProduct}
                cartItems={cartItems}
                handleCart={handleCart}
                setAddingProduct={setAddingProduct}
              />
            }
          />
          <Route
            path="/searchResult"
            element={<SearchFoundItems searchItems={searchItems} />}
          />
        </Routes>
        <LoginPage
          loginStart={loginStart}
          setLoginStart={setLoginStart}
          loginSuccess={loginSuccess}
          setLoginSuccess={setLoginSuccess}
          forgotPass={forgotPass}
          forgotPssHandler={forgotPssHandler}
          signUpMassege = {signUpMassege}
          setSignUpMassege = {setSignUpMassege}
          massegeText ={ massegeText}
          setMassegeText = {setMassegeText}
        />
        <Massege />
      </BrowserRouter>
    </>
  );
}

export default App;
