import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Linkedin, Mail, Link } from "lucide-react";
import javierImg from "../../imgs/javier.jpeg";
import rodrigoImg from "../../imgs/rodrigo.jpeg";
import nicolasImg from "../../imgs/nicolas.jpeg";

const Team = () => {
  const team = [
    {
      name: "Javier R.",
      role: "CEO & Co-Founder",
      img: javierImg,
      linkedin: "https://www.linkedin.com/in/javier-richards-valenzuela",
      email: "mailto:richards.javier@gmail.com",
      bio: "El radar de negocio del equipo. Javier asegura que no hagamos IA solo por moda, sino por ganancias. Su única 'pasión' es ver cómo el capital invertido se multiplica gracias a una estrategia de datos implacable.",
    },
    {
      name: "Rodrigo R.",
      role: "Lead ML Engineer",
      img: rodrigoImg,
      linkedin: "https://www.linkedin.com/in/rrichards95/",
      email: "mailto:rodrigo.a.richards@gmail.com",
      bio: "Nuestro 'Geek' de cabecera. Experto en gobernar el caos de los datos, Rodrigo es quien transforma las ideas ambiciosas en modelos de ML que funcionan de verdad y a escala industrial. ¡Desafíalo a resolver cualquier problema!",
    },
    {
      name: "Nicolas S.",
      role: "COO & Co-Founder",
      img: nicolasImg,
      linkedin: "https://www.linkedin.com/in/nicol%C3%A1s-s%C3%A1ez-orellana-1b277a106/",
      email: "mailto:nicolas.saez@uc.cl",
      bio: "El maestro de la ejecución. Es el antídoto contra los proyectos que se desvían. Nicolas lidera la metodología para garantizar que el valor sea una entrega eficiente y documentada, a tiempo y en presupuesto.",
    },
  ];

  return (
    <section id="team" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-2">
            Nuestro <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Equipo</span>
          </h2>
          <p className="text-muted-foreground">Profesionales que combinan experiencia técnica y enfoque en negocio.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch">
          {team.map((m, idx) => (
            <Card key={idx} className="p-0 bg-transparent shadow-none h-full" style={{ animationDelay: `${idx * 0.06}s` }}>
              <div className="group overflow-hidden rounded-2xl transform transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl h-full">
                <div className="p-[1px] bg-gradient-to-br from-primary/60 via-secondary/40 to-accent/30 rounded-2xl h-full">
                  <div className="bg-card/80 backdrop-blur-md rounded-2xl p-6 md:p-8 flex flex-col items-center text-center h-full justify-between">
                    <Avatar className="mb-4 h-28 w-28">
                      {m.img ? (
                        <AvatarImage src={m.img} alt={m.name} className="object-cover" />
                      ) : (
                        <AvatarFallback className="text-sm">{m.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
                      )}
                    </Avatar>

                    <div className="flex-1 flex flex-col items-center justify-start">
                      <div>
                        <h3 className="text-lg md:text-xl font-semibold">{m.name}</h3>
                        <p className="text-sm text-muted-foreground mb-3">{m.role}</p>
                      </div>

                      <p className="text-sm text-muted-foreground mb-4 max-w-[20rem]">{m.bio}</p>
                    </div>

                    <div className="flex items-center gap-3 mt-2">
                      <a href={m.linkedin} aria-label={`${m.name} LinkedIn`} className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-muted/20 text-muted-foreground hover:bg-primary hover:text-white transition">
                        <Linkedin className="h-4 w-4" />
                      </a>
                      <a href={m.email} aria-label={`Email ${m.name}`} className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-muted/20 text-muted-foreground hover:bg-primary hover:text-white transition">
                        <Mail className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
