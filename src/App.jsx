import "./app.scss";
import Hero from "./componentes/hero/Hero";
import Navbar from "./componentes/navbar/navbar";
import Test from "./componentes/Test";
import Parallax from "./componentes/parallax/Parallax";
import Services from "./componentes/services/Services";
import Portfolio from "./componentes/portfolio/Portfolio";

const App = () => {
  return (
    <div>
      <section id="Homepage">
        {" "}
        <Navbar />
        <Hero />{" "}
      </section>
      <section id="Services">
        <Parallax type="services" />
      </section>
      <section>
        <Services />
      </section>
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <Portfolio />
      <section id="Contact">Contact</section>
    </div>
    // <Test/>
  );
};

export default App;
