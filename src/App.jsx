import "./App.css";
import { Heading } from "./components/common/Headings";
import { HeroSec } from "./components/landingPage/HeroSection";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ForYouItem } from "./components/landingPage/LinkingPages/ForyouItem";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import { ViewItem } from "./components/common/ViewItem";
import { ForyouProduct } from "./components/landingPage/JustforYouProduct";
import { Massege } from "./components/common/Massege";
import { ShopAllItem } from "./components/landingPage/LinkingPages/ShopAll";
import { CommonFooter } from "./components/common/CommonFooter";
import { LoginPage } from "./components/common/Login";
import { CartWorking } from "./components/common/Cart";
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
  const [addingMassege, setaddingMassege] = useState(true)
  // const [NewId, setNewId] = useState();
  const handleCartItems = (ids) => {
    setAddingProduct((prev) => [...prev, parseInt(ids)]);
    setaddingMassege(false)
    setAddingProduct((prev) => [...new Set(prev)]);
    // setNewId(parseInt(ids))
  };
  console.log(addingProduct)

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

  // All select items

  // bg dark when remove contain


  return (
    <>
      <BrowserRouter >
        <Heading
          setLoginStart={setLoginStart}
          loginStart={loginStart}
          loginSuccess={loginSuccess}
          addingItems={addingProduct}
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
                setaddingMassege = {setaddingMassege}
                addingMassege = {addingMassege}
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
        </Routes>
        <LoginPage
          loginStart={loginStart}
          setLoginStart={setLoginStart}
          loginSuccess={loginSuccess}
          setLoginSuccess={setLoginSuccess}
          forgotPass={forgotPass}
          forgotPssHandler={forgotPssHandler}
        />
        <Massege />
      </BrowserRouter>
    </>
  );
}

export default App;
