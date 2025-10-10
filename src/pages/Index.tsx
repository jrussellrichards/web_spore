import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import Framework from "@/components/Framework";
import CaseStudy from "@/components/CaseStudy";
import Team from "@/components/Team";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ProblemSection />
      <Framework />
      <CaseStudy />
      <Team />
      <Blog />
      <Footer />
    </div>
  );
};

export default Index;
