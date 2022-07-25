import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Tools } from "./components/Tools";
import { Tests } from "./components/Tests";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Tools />
      <Tests />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
