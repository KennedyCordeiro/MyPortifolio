import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/Script";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <section>
        <div className="">
          <NavBar />
          <Banner />
        </div>
      </section>
      <section>
        <div className=" reveal">
          <Skills />
        </div>
      </section>
      <section>
        <div className=" reveal">
          <Projects />
        </div>
      </section>
      <section>
        <div className=" reveal">
          <Contact />
          <Footer />
        </div>
      </section>
    </div>
  );
}

export default App;
