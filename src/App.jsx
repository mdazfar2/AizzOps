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
import Works from './components/Works';
import ProjectDetail from './components/project/ProjectDetail';
import About from './components/About';
import Work from './components/project/project';

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
            </>
          } 
        />
        
        <Route 
          path="/works" 
          element={
            <>
              <Navbar />
              <Works />
              <Footer />
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
        <Route 
          path="/project" 
          element={
            <>
              <Navbar />
              <Work />
              <Footer />
            </>
          } 
        />
        <Route 
          path="/project/:projectSlug" 
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