import { Link } from "react-router-dom";
import PageHero from "@/components/PageHero";
import SectionWrapper from "@/components/SectionWrapper";
import SectionHeader from "@/components/SectionHeader";
import {
  partnersIntro,
  partners,
  partnershipBenefits,
  partnershipTypes,
  partnersCta,
} from "@/data/partners";

const Partners = () => {
  return (
    <>
      <PageHero
        title={partnersIntro.title}
        description={partnersIntro.description}
        breadcrumb="Partners"
      />

      {/* Partners Auto-Scrolling Marquee */}
      {/* <SectionWrapper>
        <SectionHeader
          title="Our Partners & Collaborators"
          description="Organizations and institutions who support our collective action mission."
        />
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee gap-8">
            {[...partners, ...partners].map((partner, i) => (
              <div
                key={`${partner.name}-${i}`}
                className="bg-card rounded-xl px-8 py-6 flex items-center justify-center text-center shadow-card border border-border/50 hover:shadow-elevated hover:border-brand-gold/30 transition-all min-h-[100px] min-w-[220px] shrink-0"
              >
                {partner.logoUrl ? (
                  <img
                    src={partner.logoUrl}
                    alt={partner.name}
                    className="max-h-12 w-auto object-contain"
                    loading="lazy"
                  />
                ) : (
                  <div className="flex flex-col items-center gap-2">
                    <span className="material-icons-outlined text-brand-blue-muted text-3xl">business</span>
                    <p className="text-sm font-medium text-foreground/80 whitespace-nowrap">{partner.name}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper> */}

      {/* Why Partner With Us */}
      <SectionWrapper alternate>
        <SectionHeader
          title="Why Partner With Buona Salute"
          description="Our model is community-driven, transparent, and designed for lasting impact."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {partnershipBenefits.map((benefit) => (
            <div
              key={benefit.title}
              className="bg-card rounded-xl p-6 shadow-card border border-border/50 hover:shadow-elevated transition-all text-center"
            >
              <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                <span className="material-icons-outlined text-secondary text-2xl">{benefit.icon}</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Partnership Types */}
      <SectionWrapper>
        <SectionHeader
          title="Partnership Opportunities"
          description="We welcome collaboration across multiple areas of impact."
        />
        <div className="grid md:grid-cols-2 gap-6">
          {partnershipTypes.map((type) => (
            <div
              key={type.title}
              className="bg-card rounded-xl p-6 md:p-8 shadow-card border border-border/50 hover:shadow-elevated hover:border-brand-gold/30 transition-all"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="material-icons-outlined text-primary text-2xl">{type.icon}</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground">{type.title}</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{type.description}</p>
              <div className="flex flex-wrap gap-2">
                {type.examples.map((ex) => (
                  <span
                    key={ex}
                    className="text-xs bg-muted px-3 py-1.5 rounded-full text-muted-foreground font-medium"
                  >
                    {ex}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper alternate>
        <div className="bg-secondary rounded-2xl py-16 px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-4">
            {partnersCta.title}
          </h2>
          <p className="text-secondary-foreground/80 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            {partnersCta.description}
          </p>
          <Link
            to={partnersCta.buttonHref}
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-gold text-foreground font-semibold rounded-lg hover:brightness-110 transition-all shadow-lg"
          >
            <span className="material-icons-outlined">handshake</span>
            {partnersCta.buttonLabel}
          </Link>
        </div>
      </SectionWrapper>
    </>
  );
};

export default Partners;
