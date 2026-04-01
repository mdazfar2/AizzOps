import { Routes, Route } from 'react-router-dom';
import Hero from './components/homepage/Hero';
import Story from './components/homepage/Story';
import Story2 from './components/homepage/Story2';
import Howitworks from './components/homepage/Howitworks';
import Testimonials from './components/homepage/Testimonials';
import Interests from './components/homepage/Interests';
import Contact from './components/homepage/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Work from './components/Work';
import ProjectDetail from './components/ProjectDetail';
import About from './components/about/About';

function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar is included here for the Landing Page layout */}
      <Navbar />
      <Hero />
      <Story />
      <Story2 />
      <Howitworks />
      <Testimonials />
      <Interests />
      <Contact />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route 
          path="/about" 
          element={
            <>
              <Navbar />
              <About />
              <Footer />
            </>
          } 
        />
        <Route 
          path="/work" 
          element={
            <>
              <Navbar />
              <Work />
            </>
          } 
        />
        <Route 
          path="/work/:projectSlug" 
          element={
            <>
              <Navbar />
              <ProjectDetail />
            </>
          } 
        />
      </Routes>
    </>
  );
}

export default App;