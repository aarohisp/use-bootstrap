// import logo from "./logo.svg";
import "./App.css";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
// import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div class="row">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default App;
