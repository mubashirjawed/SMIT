import "./App.css";
import landingPageData from "./Contant/webData";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Features from "./Components/Features";
import Testimonials from "./Components/Testimonials";
import Footer from "./Components/Footer";

function App() {
  console.log(landingPageData);
  const { header, hero, features, testimonials } = landingPageData;

  return (
    <>
      <Header header={header} />
      <Hero hero={hero} />
      <Features features={features} />
      <Testimonials testimonials={testimonials} />
      <Footer header={header} />
    </>
  );
}

export default App;
