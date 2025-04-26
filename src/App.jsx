import styles from "./App.module.css";
import { Navbar } from "./componets/Navbar/Navbar";
import { Contact } from "./componets/Contact/Contact";
import { Experience } from "./componets/Experience/Experience";
import { About } from "./componets/About/About";
import { Hero } from "./componets/Hero/Hero";
import { Projects } from "./componets/Projects/Projects";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
