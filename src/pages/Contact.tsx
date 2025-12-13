import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
    const { toast } = useToast();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        role: "",
        message: ""
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        toast({
            title: "Mensaje enviado",
            description: "Gracias por contactarnos. Nuestro equipo te responderá a la brevedad.",
        });
        setFormData({ name: "", email: "", company: "", role: "", message: "" });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Navbar />

            <main className="flex-grow pt-24 pb-16 px-4">
                <div className="container mx-auto">
                    <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">

                        {/* Left Column: Context & Info */}
                        <div className="space-y-8">
                            <div>
                                <div className="inline-flex px-4 py-1 rounded-full bg-primary/10 text-primary font-semibold mb-4 text-sm">Contáctanos</div>
                                <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
                                    Hablemos de tu próximo{" "}
                                    <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                                        desafío de IA
                                    </span>
                                </h1>
                                <p className="text-lg text-muted-foreground">
                                    Completa el formulario y uno de nuestros consultores expertos analizará tu caso sin compromiso. Respondemos en menos de 24 horas.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-lg bg-card border shadow-sm text-primary">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-foreground">Correo</h3>
                                        <p className="text-muted-foreground">info@blueanalytics.cl</p>
                                    </div>
                                </div>


                            </div>
                        </div>

                        {/* Right Column: Form */}
                        <Card className="p-6 md:p-8 bg-card shadow-lg border-border/50">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="space-y-2">
                                    <Label htmlFor="name">Nombre completo</Label>
                                    <Input
                                        id="name"
                                        placeholder="Ej. Juan Pérez"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="bg-background"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="email">Correo corporativo</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="juan@empresa.com"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="bg-background"
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="company">Empresa</Label>
                                        <Input
                                            id="company"
                                            placeholder="Nombre empresa"
                                            required
                                            value={formData.company}
                                            onChange={handleChange}
                                            className="bg-background"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="role">Cargo</Label>
                                        <Input
                                            id="role"
                                            placeholder="Ej. Gerente TI"
                                            value={formData.role}
                                            onChange={handleChange}
                                            className="bg-background"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="message">¿Cuál es tu desafío?</Label>
                                    <Textarea
                                        id="message"
                                        placeholder="Cuéntanos brevemente qué problema de negocio buscas resolver con datos o IA..."
                                        className="min-h-[120px] bg-background resize-none"
                                        required
                                        value={formData.message}
                                        onChange={handleChange}
                                    />
                                </div>

                                <Button type="submit" variant="gradient" className="w-full group">
                                    Enviar mensaje
                                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </Button>

                                <p className="text-xs text-center text-muted-foreground">
                                    Al enviar este formulario aceptas nuestra política de privacidad.
                                </p>
                            </form>
                        </Card>

                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Contact;
