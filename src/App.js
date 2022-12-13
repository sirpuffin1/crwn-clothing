import Home from "./routes/home/Home.component";
import Navigation from "./routes/navigation/Navigation.component";
import { Routes, Route} from "react-router-dom";
import Authentication from "./routes/authentication/Authentication.component";
import Shop from "./routes/shop/Shop.component";
import Checkout from "./routes/checkout/Checkout.component";

const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop/*" element={<Shop/>} />
        <Route path="/auth" element={<Authentication/>} />
        <Route path="/checkout" element={<Checkout/>} />
      </Routes>
    </>
  );
};

export default App;
