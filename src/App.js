import Home from "./routes/home/Home.component";
import Navigation from "./routes/navigation/Navigation.component";
import { Routes, Route } from "react-router-dom";
import Authentication from "./routes/authentication/Authentication.component";
import Shop from "./routes/shop/Shop.component";
import Checkout from "./routes/checkout/Checkout.component";
import { setCurrentUser } from "./store/user/user.action";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  createUserDocumentFromAuth,
  getCurrentUser,
  onAuthStateChangedListener,
} from "./utils/firebase/firebase.utils";

const App = () => {
  useEffect(() => {
    getCurrentUser().then((user) => console.log(user))
  }, []);

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
