import Home from "./routes/home/Home.component";
import Navigation from "./routes/navigation/Navigation.component";
import { Routes, Route } from "react-router-dom";
import Authentication from "./routes/authentication/Authentication.component";
import Shop from "./routes/shop/Shop.component";
import Checkout from "./routes/checkout/Checkout.component";
import { checkUserSession } from "./store/user/user.action";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const App = () => {
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(checkUserSession())
  }, [dispatch]);

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop/*" element={<Shop />} />
        <Route path="/auth" element={<Authentication />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </>
  );
};

export default App;
