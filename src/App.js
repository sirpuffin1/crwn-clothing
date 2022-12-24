import { Routes, Route } from "react-router-dom";
import { checkUserSession } from "./store/user/user.action";
import { useDispatch } from "react-redux";
import { useEffect, lazy, Suspense } from "react";
import Spinner from "./components/spinner/Spinner.component";
import Navigation from "./routes/navigation/Navigation.component";

const Home = lazy(() => import("./routes/home/Home.component"))
const Authentication = lazy(() => import("./routes/authentication/Authentication.component"))
const Shop = lazy(() => import("./routes/shop/Shop.component"))
const Checkout =lazy(() => import("./routes/checkout/Checkout.component")) ;

const App = () => {
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(checkUserSession())
  }, [dispatch]);

  return (
    <>
    <Navigation />
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/shop/*" element={<Shop />} />
        <Route path="/auth" element={<Authentication />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      </Suspense>
      </>
  );
};

export default App;
