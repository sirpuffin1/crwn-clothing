import Home from "./routes/home/Home.component";
import Navigation from "./routes/navigation/Navigation.component";
import { Routes, Route} from "react-router-dom";
import Authentication from "./routes/authentication/Authentication.component";

const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Authentication/>} />
      </Routes>
    </>
  );
};

export default App;
