import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  const articles = [
    {
      icon: BookOpen,
      title: "¿Cómo empezar con IA en tu empresa?",
      description: "Guía práctica para priorizar casos de uso y obtener rápido valor.",
      color: "from-primary to-secondary",
      href: "/blog/como-empezar",
    },
    {
      icon: TrendingUp,
      title: "5 formas de usar tus datos para vender más",
      description: "Estrategias aplicables para equipos comerciales y marketing.",
      color: "from-secondary to-accent",
      href: "/blog/cinco-formas",
    },
  ];

  return (
    <section id="blog" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Recursos y{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Blog
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Artículos prácticos para comenzar con IA y potenciar tus decisiones de negocio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {articles.map((article, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-xl transition-all duration-300 group animate-slide-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${article.color} mb-4`}>
                <article.icon className="h-6 w-6 text-white" />
              </div>

              <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                {article.title}
              </h3>

              <p className="text-muted-foreground mb-6">
                {article.description}
              </p>

              <Link
                to={article.href}
                className="group/btn p-0 h-auto inline-flex items-center text-sm font-medium hover:text-primary transition-colors"
              >
                Leer artículo
                <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
