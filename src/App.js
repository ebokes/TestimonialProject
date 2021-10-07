import "./App.css";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <LandingPage />
      {/* <CallToAction /> */}
      <Footer />
    </div>
  );
}

export default App;
