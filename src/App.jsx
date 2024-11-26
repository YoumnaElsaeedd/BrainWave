import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./commponents/Benefits";
import Collaboration from "./commponents/Collaboration";
import Footer from "./commponents/Footer";
import Header from "./commponents/Header";
import Hero from "./commponents/Hero";
import Pricing from "./commponents/Pricing";
import Roadmap from "./commponents/Roadmap";
import Services from "./commponents/Services";


function App() {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header/>
        <Hero/>
        <Benefits/>
        <Collaboration/>
        <Services/>
        <Pricing/>
        <Roadmap/>
        <Footer/>
      </div>
      <ButtonGradient/>
      
    </>
  );
}

export default App;
