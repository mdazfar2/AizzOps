import { Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import Story from './components/Story';
import Story2 from './components/Story2';
import Howitworks from './components/Howitworks';
import Testimonials from './components/Testimonials';
import Interests from './components/Interests';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Work from './components/Work';
import ProjectDetail from './components/ProjectDetail';

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