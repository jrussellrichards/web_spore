import Navbar from "@/components/Navbar";
import Hero from "@/components/home/Hero";
import ClientsStrip from "@/components/ClientsStrip";
import Capabilities from "@/components/home/Capabilities";
import TeamEnablement from "@/components/home/TeamEnablement";
import Method from "@/components/home/Method";
import Impact from "@/components/home/Impact";
import Team from "@/components/home/Team";
import Blog from "@/components/home/Blog";
import FinalCTA from "@/components/home/FinalCTA";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/fx/SmoothScroll";

const links = [
  { label: "Qué hacemos", id: "capabilities" },
  { label: "Método", id: "framework" },
  { label: "Casos", id: "cases" },
  { label: "Equipo", id: "team" },
  { label: "Blog", id: "blog" },
];

/** Home corporativa: qué es Blue Analytics y todo lo que hace.
 *  La oferta de agentes tiene su propia landing (/empleados-digitales). */
const Index = () => (
  <div className="min-h-screen bg-background text-foreground">
    <SmoothScroll />
    <Navbar links={links} />
    <Hero />
    <ClientsStrip />
    <Capabilities />
    <TeamEnablement />
    <div className="hairline mx-auto max-w-5xl" />
    <Method />
    <Impact />
    <div className="hairline mx-auto max-w-5xl" />
    <Team />
    <Blog />
    <FinalCTA />
    <Footer />
  </div>
);

export default Index;
