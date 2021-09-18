import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Categories from "./Components/Categories";
import Campaigns from "./Components/Campaigns";
import Favorites from "./Components/Favorites";
import Mobile from "./Components/Mobile";
import Cards from "./Components/Cards";
import Footer from "./Components/Footer";
import { useWindowWidth } from "@react-hook/window-size";

function App() {
  const windowWidth = useWindowWidth();

  return (
    <>
      <Header />
      {windowWidth <= 768 && <Campaigns />}
      <Hero />
      <Categories />
      {windowWidth > 768 && <Campaigns />}
      <Favorites />
      <Mobile />
      <Cards />
      <Footer />
    </>
  );
}

export default App;
