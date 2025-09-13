import { About } from "./components/About/about";
import { Contact } from "./components/Contact/contact";
import { Education } from "./components/Education/education";
import { Experience } from "./components/Experience/experience";
import { Footer } from "./components/Footer/footer";
import { HeroSection } from "./components/hero/heroSection";
import { NavBar } from "./components/NavBar/navBar";
import { Projects } from "./components/Projects/projects";
import { Skills } from "./components/Skills/skills";

function App() {
  return (
    <main className="lg:w-11/12 mx-auto">
      <NavBar />
      <HeroSection />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
