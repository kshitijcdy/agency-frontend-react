import "./app.scss"
import Hero from "./componentes/hero/Hero";
import Navbar from "./componentes/navbar/navbar";
import Test from "./componentes/Test";
import Parallax from "./componentes/parallax/Parallax";

const App=()=>{
 return (
  <div>
    <section id="Homepage" > <Navbar/>
    <Hero/> </section>
    <section id="Services"><Parallax type="services"/></section>
    <section>Serices</section>
    <section id="Portfolio"><Parallax type="portfolio"/></section>
    <section>Portfolio1</section>
    <section>portfolio2</section>
    <section>portfolio3</section>
    <section id="Contact">Contact</section>
  </div>
  // <Test/>
 )
}

export default App;