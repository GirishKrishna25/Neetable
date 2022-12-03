import Logobar from "./components/01 Header/Logobar";
import Navbar from "./components/01 Header/Navbar";
import Hero from "./components/02 Main/01 hero/Hero";
import Blobs from "./components/02 Main/02 blobs/Blobs";
import LandingPages from "./components/02 Main/03 landingPages/LandingPages";
import Features from "./components/02 Main/04 features/Features";
import CTA from "./components/03 Footer/CTA";
import { useToggle } from "./toggleContext";

function App() {
  const { isLightModeOn } = useToggle();
  const styles = {
    app: {
      "background-color": isLightModeOn ? "#fff" : "#131022",
      color: isLightModeOn ? "#131022" : "#fff",
    },
  };
  return (
    <>
      <div className="app" style={styles.app}>
        <header className="logobarAndNavbar">
          <Logobar />
          <Navbar />
        </header>
        <main>
          <Hero />
          <Blobs />
          <LandingPages />
          <Features />
        </main>
        <footer>
          <CTA />
        </footer>
      </div>
    </>
  );
}

export default App;
