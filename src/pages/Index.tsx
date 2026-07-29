import Navbar from "@/components/Navbar";
import Hero from "@/components/home/Hero";
import Mission from "@/components/home/Mission";
import ProblemSection from "@/components/home/ProblemSection";
import Services from "@/components/home/Services";
import Framework from "@/components/home/Framework";
import CaseStudy from "@/components/home/CaseStudy";
import Team from "@/components/home/Team";
import Blog from "@/components/home/Blog";
import Footer from "@/components/Footer";

/** Home corporativa: qué es Blue Analytics y todo lo que hace.
 *  La oferta de agentes vive en su propia landing (/empleados-digitales). */
const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <Hero />
    <Mission />
    <ProblemSection />
    <Services />
    <Framework />
    <CaseStudy />
    <Team />
    <Blog />
    <Footer />
  </div>
);

export default Index;
