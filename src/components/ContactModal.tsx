import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight } from "lucide-react";

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
    const { toast } = useToast();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // TODO: Replace with your actual Formspree Endpoint
        const FORMSPREE_ENDPOINT = "https://formspree.io/f/xnneyajv";

        try {
            const response = await fetch(FORMSPREE_ENDPOINT, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({ ...formData, source: "Agents Landing Page Demo" }),
            });

            if (response.ok) {
                toast({
                    title: "Solicitud recibida",
                    description: "Te contactaremos para agendar tu demo personalizada.",
                });
                setFormData({ name: "", email: "", company: "", message: "" });
                onClose();
            } else {
                toast({
                    title: "Error",
                    description: "Hubo un problema. Inténtalo nuevamente o escríbenos por WhatsApp.",
                    variant: "destructive",
                });
            }
        } catch (error) {
            toast({
                title: "Error de conexión",
                description: "Verifica tu internet e inténtalo de nuevo.",
                variant: "destructive",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Agenda tu Demo Interactiva</DialogTitle>
                    <DialogDescription>
                        Déjanos tus datos y un experto te mostrará cómo Blue Analytics puede escalar tu soporte.
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="grid gap-4 py-4">
                    <div className="grid gap-2">
                        <Label htmlFor="name">Nombre</Label>
                        <Input id="name" placeholder="Tu nombre" required value={formData.name} onChange={handleChange} />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="email">Correo Corporativo</Label>
                        <Input id="email" type="email" placeholder="tu@empresa.com" required value={formData.email} onChange={handleChange} />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="company">Empresa</Label>
                        <Input id="company" placeholder="Nombre de tu empresa" required value={formData.company} onChange={handleChange} />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="message">¿Qué desafío de soporte tienes?</Label>
                        <Textarea id="message" placeholder="Ej. mucho volumen de tickets, respuestas lentas..." value={formData.message} onChange={handleChange} />
                    </div>
                    <Button type="submit" disabled={isSubmitting} variant="gradient" className="w-full">
                        {isSubmitting ? "Enviando..." : "Solicitar Demo"}
                        {!isSubmitting && <ArrowRight className="ml-2 h-4 w-4" />}
                    </Button>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default ContactModal;
