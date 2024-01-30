// import logo from "./logo.svg";
import "./App.css";
// import Card from "./components/Card";
import CardsCollection from "./components/CardsCollection";
import Carousel from "./components/Carousel";
import Navbar from "./components/Navbar";
// import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <CardsCollection />
    </div>
  );
}

export default App;
