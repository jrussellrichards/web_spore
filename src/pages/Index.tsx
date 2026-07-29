import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ClientsStrip from "@/components/ClientsStrip";
import ProductsSection from "@/components/ProductsSection";
import FlowBento from "@/components/FlowBento";
import HowWeWork from "@/components/HowWeWork";
import CaseStory from "@/components/CaseStory";
import Team from "@/components/Team";
import Faq from "@/components/Faq";
import Blog from "@/components/Blog";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/fx/SmoothScroll";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SmoothScroll />
      <Navbar />
      <Hero />
      <ClientsStrip />
      <ProductsSection />
      <FlowBento />
      <div className="hairline mx-auto max-w-5xl" />
      <HowWeWork />
      <CaseStory />
      <div className="hairline mx-auto max-w-5xl" />
      <Team />
      <Faq />
      <Blog />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
