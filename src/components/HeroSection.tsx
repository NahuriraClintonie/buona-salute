import { Link } from "react-router-dom";
import { heroData } from "@/data/home";

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Overlay */}
      <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />

      {/* Content */}
      <div className="relative z-10 container-max text-center py-20">
        <p className="text-brand-gold font-semibold text-sm md:text-base uppercase tracking-widest mb-4 animate-fade-in-up">
          {heroData.tagline}
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          {heroData.headline}
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          {heroData.subheading}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <a
            href={heroData.ctaPrimary.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-gold text-foreground font-semibold rounded-lg hover:brightness-110 transition-all shadow-lg hover:shadow-xl"
          >
            <span className="material-icons-outlined text-xl">group_add</span>
            {heroData.ctaPrimary.label}
          </a>
          <Link
            to={heroData.ctaSecondary.href}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-foreground/10 text-primary-foreground font-semibold rounded-lg border-2 border-primary-foreground/30 hover:bg-primary-foreground/20 transition-all"
          >
            <span className="material-icons-outlined text-xl">handshake</span>
            {heroData.ctaSecondary.label}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
