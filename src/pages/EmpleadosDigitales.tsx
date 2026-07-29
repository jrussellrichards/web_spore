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
import { whatsappUrl } from "@/lib/whatsapp";

const links = [
  { label: "Empleados", id: "products" },
  { label: "El flujo", id: "flow" },
  { label: "Cómo trabajamos", id: "how" },
  { label: "Caso", id: "case" },
  { label: "FAQ", id: "faq" },
];

/** Landing dedicada a vender empleados digitales. Usa su propia paleta
 *  (.theme-landing) para no alterar la marca corporativa de la home. */
const EmpleadosDigitales = () => (
  <div className="theme-landing min-h-screen bg-background text-foreground">
    <SmoothScroll />
    <Navbar
      links={links}
      basePath="/empleados-digitales"
      cta={{ label: "Habla con el agente", href: whatsappUrl(), external: true, icon: "chat" }}
    />
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

export default EmpleadosDigitales;
