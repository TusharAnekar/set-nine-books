import { Route, Routes } from "react-router-dom";

import "./App.css";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Favourite } from "./pages/Favourite";
import { Read } from "./pages/Read";
import { Profile } from "./pages/Profile";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/favourites" element={<Favourite />}></Route>
        <Route path="/read" element={<Read />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
      </Routes>
    </div>
  );
}

export default App;
