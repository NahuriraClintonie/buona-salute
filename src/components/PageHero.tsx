import { Link } from "react-router-dom";

interface PageHeroProps {
  title: string;
  description?: string;
  breadcrumb?: string;
}

const PageHero = ({ title, description, breadcrumb }: PageHeroProps) => {
  return (
    <section className="bg-secondary py-16 md:py-20">
      <div className="container-max text-center">
        {breadcrumb && (
          <div className="flex items-center justify-center gap-2 text-sm text-secondary-foreground/70 mb-4">
            <Link to="/" className="hover:text-secondary-foreground transition-colors">Home</Link>
            <span>/</span>
            <span className="text-secondary-foreground">{breadcrumb}</span>
          </div>
        )}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-foreground mb-4">
          {title}
        </h1>
        {description && (
          <p className="text-secondary-foreground/80 text-lg max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </section>
  );
};

export default PageHero;
