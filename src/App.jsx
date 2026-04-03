import { useLayoutEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
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
import HelpOpsHubDetail from './components/project/project_details/HelpOpsHubDetail';
import MernEksCicdDetail from './components/project/project_details/MernEksCicdDetail';
import SpaceWebDetail from './components/project/project_details/SpaceWebDetail';
import SpringBootGitOpsDetail from './components/project/project_details/SpringBootGitOpsDetail';
import NetflixDevSecOpsDetail from './components/project/project_details/NetflixDevSecOpsDetail';
import TwoTierFlaskDetail from './components/project/project_details/TwoTierFlaskDetail';
import ThreeTierWanderlustDetail from './components/project/project_details/ThreeTierWanderlustDetail';
import AzureWebAppCicdDetail from './components/project/project_details/AzureWebAppCicdDetail';
import FingerConnectAiDetail from './components/project/project_details/FingerConnectAiDetail';
import EksJenkinsOperatorDetail from './components/project/project_details/EksJenkinsOperatorDetail';
import EzyShopDetail from './components/project/project_details/EzyShopDetail';
import EywaDetail from './components/project/project_details/EywaDetail';
import AzfarBroadcastDetail from './components/project/project_details/AzfarBroadcastDetail';
import StudiumDetail from './components/project/project_details/StudiumDetail';
import DfaVisualDetail from './components/project/project_details/DfaVisualDetail';
import GfBanaoDetail from './components/project/project_details/GfBanaoDetail';
import DbgmiTournamentDetail from './components/project/project_details/DbgmiTournamentDetail';
import RapidGigDetail from './components/project/project_details/RapidGigDetail';
import CertifyDetail from './components/project/project_details/CertifyDetail';
import JecForgeDetail from './components/project/project_details/JecForgeDetail';
import GestureDockerDetail from './components/project/project_details/GestureDockerDetail';
import DevBurnDetail from './components/project/project_details/DevBurnDetail';
import VirtualAiMouseDetail from './components/project/project_details/VirtualAiMouseDetail';
import AzfarsFirstAppDetail from './components/project/project_details/AzfarsFirstAppDetail';
import Links from './components/Links';

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

function ScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />
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
          path="/links" 
          element={
            <>
              <Navbar />
              <Links />
              <Footer />
            </>
          } 
        />
        <Route 
          path="/project/helpops-hub" 
          element={
            <>
              <Navbar />
              <HelpOpsHubDetail />
              <Footer />
            </>
          } 
        />
        <Route 
          path="/project/mern-eks-cicd-pipeline" 
          element={
            <>
              <Navbar />
              <MernEksCicdDetail />
              <Footer />
            </>
          } 
        />
        <Route 
          path="/project/spaceweb-ci-cd-automation" 
          element={
            <>
              <Navbar />
              <SpaceWebDetail />
              <Footer />
            </>
          } 
        />
        <Route 
          path="/project/spring-boot-gitops-cicd-pipeline" 
          element={
            <>
              <Navbar />
              <SpringBootGitOpsDetail />
              <Footer />
            </>
          } 
        />
        <Route 
          path="/project/netflix-devsecops-cicd-pipeline" 
          element={
            <>
              <Navbar />
              <NetflixDevSecOpsDetail />
              <Footer />
            </>
          } 
        />
        <Route 
          path="/project/two-tier-flask-app-deployment" 
          element={
            <>
              <Navbar />
              <TwoTierFlaskDetail />
              <Footer />
            </>
          } 
        />
        <Route 
          path="/project/three-tier-wanderlust-app-deployment" 
          element={
            <>
              <Navbar />
              <ThreeTierWanderlustDetail />
              <Footer />
            </>
          } 
        />
        <Route 
          path="/project/azure-webapp-cicd-pipeline" 
          element={
            <>
              <Navbar />
              <AzureWebAppCicdDetail />
              <Footer />
            </>
          } 
        />
        <Route 
          path="/project/fingerconnect-ai-web-app" 
          element={
            <>
              <Navbar />
              <FingerConnectAiDetail />
              <Footer />
            </>
          } 
        />
        <Route 
          path="/project/eks-jenkins-operator-cicd-pipeline" 
          element={
            <>
              <Navbar />
              <EksJenkinsOperatorDetail />
              <Footer />
            </>
          } 
        />
        <Route 
          path="/project/ezyshop-e-commerce-platform" 
          element={
            <>
              <Navbar />
              <EzyShopDetail />
              <Footer />
            </>
          } 
        />
        <Route 
          path="/project/eywa-private-communication-platform" 
          element={
            <>
              <Navbar />
              <EywaDetail />
              <Footer />
            </>
          } 
        />
        <Route 
          path="/project/azfar-broadcast-video-platform" 
          element={
            <>
              <Navbar />
              <AzfarBroadcastDetail />
              <Footer />
            </>
          } 
        />
        <Route 
          path="/project/studyrium-study-tracker" 
          element={
            <>
              <Navbar />
              <StudiumDetail />
              <Footer />
            </>
          } 
        />
        <Route 
          path="/project/dfa-visual-simulator" 
          element={
            <>
              <Navbar />
              <DfaVisualDetail />
              <Footer />
            </>
          } 
        />
        <Route 
          path="/project/gfbanao-learning-connection-platform" 
          element={
            <>
              <Navbar />
              <GfBanaoDetail />
              <Footer />
            </>
          } 
        />
        <Route 
          path="/project/dbgmi-tournament-platform" 
          element={
            <>
              <Navbar />
              <DbgmiTournamentDetail />
              <Footer />
            </>
          } 
        />
        <Route 
          path="/project/rapidgig-labs-agency-website" 
          element={
            <>
              <Navbar />
              <RapidGigDetail />
              <Footer />
            </>
          } 
        />
        <Route 
          path="/project/certify-certificate-verification-system" 
          element={
            <>
              <Navbar />
              <CertifyDetail />
              <Footer />
            </>
          } 
        />
        <Route 
          path="/project/jec-forge-community-platform" 
          element={
            <>
              <Navbar />
              <JecForgeDetail />
              <Footer />
            </>
          } 
        />
        <Route 
          path="/project/gesture-controlled-docker-launcher" 
          element={
            <>
              <Navbar />
              <GestureDockerDetail />
              <Footer />
            </>
          } 
        />
        <Route 
          path="/project/devburn-github-activity-analyzer" 
          element={
            <>
              <Navbar />
              <DevBurnDetail />
              <Footer />
            </>
          } 
        />
        <Route 
          path="/project/virtual-ai-mouse" 
          element={
            <>
              <Navbar />
              <VirtualAiMouseDetail />
              <Footer />
            </>
          } 
        />
        <Route 
          path="/project/azfars-first-app" 
          element={
            <>
              <Navbar />
              <AzfarsFirstAppDetail />
              <Footer />
            </>
          } 
        />
        <Route 
          path="/howitworks" 
          element={
            <>
              <Navbar />
              <Howitworks />
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