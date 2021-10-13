import "./App.css";

import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import StoryPage1 from "./components/StoryPage1";
import StoryPage2 from "./components/StoryPage2";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <LandingPage />
      <StoryPage1 />
      <StoryPage2 />
      <Footer />
    </div>
  );
}

export default App;
