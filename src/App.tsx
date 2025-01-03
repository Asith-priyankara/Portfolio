import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

const App = () => {

  return (
    <div className="min-h-screen bg-gray-50">
    <Header/>
    <Hero/>
    <Experience/>
    <Projects/>
    <Skills/>
    <Contact/>
    </div>
  )
}

export default App;