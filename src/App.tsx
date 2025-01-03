import Contact from "./components/Contact";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

const App = () => {

  return (
    <div className="min-h-screen bg-gray-50">
    <Header/>
    <Hero/>
    <Projects/>
    <Contact/>
    </div>
  )
}

export default App;