import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ComoEmpezar from "./pages/blog/ComoEmpezar";
import CincoFormas from "./pages/blog/CincoFormas";
import Contact from "./pages/Contact";
import ScrollToAnchor from "./components/ScrollToAnchor";
import WhatsAppButton from "./components/WhatsAppButton";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/">
        <ScrollToAnchor />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/blog/como-empezar" element={<ComoEmpezar />} />
          <Route path="/blog/cinco-formas" element={<CincoFormas />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <WhatsAppButton />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
