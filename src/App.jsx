import "./App.css";
import "./components/Reset.css";
import Header from "./components/Header";
import Body from "./components/Body";
import BodyM from "./components/BodyM.jsx";
import BodyBottom from "./components/BodyBottom";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <BodyM />
      <BodyBottom />
      <Footer />
    </div>
  );
}

export default App;
