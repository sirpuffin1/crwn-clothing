import Home from "./routes/home/Home.component";
import Navigation from "./routes/navigation/Navigation.component";
import { Routes, Route} from "react-router-dom";
import SignIn from "./routes/sign-in/SignIn.component";

const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signIn" element={<SignIn/>} />
      </Routes>
    </>
  );
};

export default App;
