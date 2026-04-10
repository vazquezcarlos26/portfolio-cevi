import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import About from "../components/about/About";
import Stack from "../components/stack/Stack";
import Projects from "../components/projects/Projects";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";

export default function Home() {
  return (
      <main className="relative">
        <Navbar/>
        <Hero/>
        <About/>
        <Stack/>
        <Projects/>
        <Contact/>
        <Footer/>
      </main>
  );
}
