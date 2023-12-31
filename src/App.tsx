import "./App.css";
import { Header } from "../src/components/Header";
import { NavBar } from "../src/components/NavBar";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { TVShows } from "./components/pages/TVShows";
import { People } from "./components/pages/People";

function App() {
  return (
    <div>
      <Header></Header>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shows" element={<TVShows/>}/>
        <Route path="/people" element={<People/>}/>
      </Routes>
    </div>
  );
}

export default App;
