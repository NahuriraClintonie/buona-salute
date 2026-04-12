import { Link } from "react-router-dom";
import HeroSection from "@/components/HeroSection";
import SectionHeader from "@/components/SectionHeader";
import FocusAreaCard from "@/components/FocusAreaCard";
import MetricCard from "@/components/MetricCard";
import heroBg from "@/assets/hero-bg.jpg";
import sectionBg from "@/assets/section-bg.jpg";
import communityImg from "@/assets/community-gathering.jpg";
import kayonzaImg from "@/assets/kayonza-pilot.jpg";
import {
  whatMakesUsDifferent,
  briefAbout,
  focusAreas,
  impactHighlights,
  kayonzaHighlight,
  ctaSection,
  trustSignals,
} from "@/data/home";

const Index = () => {
  return (
    <div
      className="relative"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <HeroSection />

      {/* All sections below hero — single fixed background image */}
      <div
        className="relative"
        style={{
          backgroundImage: `url(${sectionBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* What Makes Us Different — opaque bg hides background */}
        <section className="py-16 md:py-24 relative">
          <div className="absolute inset-0 bg-background" />
          <div className="container-max relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  {whatMakesUsDifferent.title}
                </h2>
                <div className="h-1 w-16 bg-brand-gold rounded-full mb-6" />
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  {whatMakesUsDifferent.description}
                </p>
                <ul className="space-y-3">
                  {whatMakesUsDifferent.points.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="material-icons-outlined text-brand-green text-xl mt-0.5">check_circle</span>
                      <span className="text-foreground/80">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-elevated min-h-[300px]">
                <img
                  src={communityImg}
                  alt="Community members united through collective action in rural Uganda"
                  className="w-full h-full object-cover min-h-[300px]"
                  loading="lazy"
                  width={800}
                  height={640}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Brief About — background image VISIBLE through semi-transparent overlay */}
        <section className="py-16 md:py-24 relative">
          <div className="absolute inset-0 bg-background/70" />
          <div className="container-max relative z-10">
            <SectionHeader title={briefAbout.title} description={briefAbout.description} />
            <div className="text-center">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-secondary font-semibold hover:underline"
              >
                Learn more about us
                <span className="material-icons-outlined text-lg">arrow_forward</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Focus Areas — opaque bg hides background */}
        <section className="py-16 md:py-24 relative">
          <div className="absolute inset-0 bg-background" />
          <div className="container-max relative z-10">
            <SectionHeader title="Our Focus Areas" description="We concentrate our efforts where they matter most — creating sustainable healthcare solutions from the ground up." />
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-4">
              {focusAreas.map((area) => (
                <FocusAreaCard key={area.title} title={area.title} description={area.description} icon={area.icon} />
              ))}
            </div>
          </div>
        </section>

        {/* Impact Highlights — background image VISIBLE */}
        <section className="py-16 md:py-24 relative">
          <div className="absolute inset-0 bg-background/70" />
          <div className="container-max relative z-10">
            <SectionHeader title="Our Impact in Numbers" description="Real results from real communities across Uganda." />
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {impactHighlights.map((metric) => (
                <MetricCard key={metric.label} metric={metric} />
              ))}
            </div>
          </div>
        </section>

        {/* Kayonza Pilot Highlight — opaque bg */}
        <section className="py-16 md:py-24 relative">
          <div className="absolute inset-0 bg-background" />
          <div className="container-max relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="rounded-2xl overflow-hidden shadow-elevated">
                <img
                  src={kayonzaImg}
                  alt="Healthcare workers and community members in Kayonza, Ntungamo District"
                  className="w-full h-full object-cover min-h-[280px]"
                  loading="lazy"
                  width={800}
                  height={512}
                />
              </div>
              <div>
                <p className="text-sm text-brand-gold font-semibold uppercase tracking-wide mb-2">Pilot Project</p>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                  {kayonzaHighlight.title}
                </h2>
                <p className="text-secondary font-medium mb-4">{kayonzaHighlight.subtitle}</p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {kayonzaHighlight.description}
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {kayonzaHighlight.stats.map((stat) => (
                    <div key={stat.label} className="bg-card rounded-lg p-4 border border-border/50 shadow-card text-center">
                      <span className="material-icons-outlined text-secondary text-2xl mb-1 block">{stat.icon}</span>
                      <p className="text-xl font-bold text-foreground">{stat.value}</p>
                      <p className="text-xs text-muted-foreground">{stat.label}</p>
                    </div>
                  ))}
                </div>
                <Link
                  to={kayonzaHighlight.buttonHref}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground font-semibold rounded-lg hover:brightness-110 transition-all shadow-lg"
                >
                  <span className="material-icons-outlined text-lg">arrow_forward</span>
                  {kayonzaHighlight.buttonLabel}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Signals — opaque bg */}
        <section className="py-16 md:py-24 relative">
          <div className="absolute inset-0 bg-background/70" />
          <div className="container-max relative z-10">
            <SectionHeader title="Why Partners Trust Us" description="We uphold the highest standards of transparency, accountability, and impact." />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {trustSignals.map((signal) => (
                <div key={signal.title} className="bg-card rounded-xl p-8 border border-border/50 shadow-card hover:shadow-elevated transition-all duration-300">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-5">
                    <span className="material-icons-outlined text-secondary text-2xl">{signal.icon}</span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{signal.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{signal.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section — background image VISIBLE with brand overlay */}
        <section className="py-16 md:py-24 relative">
          <div className="absolute inset-0 bg-secondary/85" />
          <div className="container-max text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-4">
              {ctaSection.title}
            </h2>
            <p className="text-secondary-foreground/80 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
              {ctaSection.description}
            </p>
            <Link
              to={ctaSection.buttonHref}
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand-gold text-foreground font-semibold rounded-lg hover:brightness-110 transition-all shadow-lg"
            >
              <span className="material-icons-outlined">volunteer_activism</span>
              {ctaSection.buttonLabel}
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;
