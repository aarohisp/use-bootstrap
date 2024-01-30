// import logo from "./logo.svg";
import "./App.css";
import Card from "./components/Card";
import CardsCollection from "./components/CardsCollection";
import Navbar from "./components/Navbar";
// import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <CardsCollection />
    </div>
  );
}

export default App;
