import { Link } from "react-router-dom";
import PageHero from "@/components/PageHero";
import SectionWrapper from "@/components/SectionWrapper";
import SectionHeader from "@/components/SectionHeader";
import MaterialIcon from "@/components/MaterialIcon";
import {
  getInvolvedIntro,
  involvementOptions,
  donationImpact,
  volunteerRoles,
  getInvolvedCta,
} from "@/data/getInvolved";

const GetInvolved = () => {
  return (
    <>
      <PageHero
        title={getInvolvedIntro.title}
        description={getInvolvedIntro.description}
        breadcrumb="Get Involved"
      />

      {/* Ways to Contribute */}
      <SectionWrapper>
        <SectionHeader
          title="Ways to Contribute"
          description="There are many ways to support our mission. Choose what fits you best."
        />
        <div className="grid sm:grid-cols-2 gap-6">
          {involvementOptions.map((option) => (
            <div
              key={option.title}
              className="bg-card rounded-xl p-6 md:p-8 shadow-card border border-border/50 hover:shadow-elevated hover:border-brand-gold/30 transition-all group"
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <MaterialIcon name={option.icon} size="lg" className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">{option.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm mb-5">{option.description}</p>
              <Link
                to={option.linkHref}
                className="inline-flex items-center gap-2 text-secondary font-semibold text-sm hover:underline"
              >
                {option.linkLabel}
                <span className="material-icons-outlined text-lg">arrow_forward</span>
              </Link>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Donation Impact */}
      <SectionWrapper alternate>
        <SectionHeader
          title="Your Donation at Work"
          description="See how your contribution translates into real impact for patients and communities."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {donationImpact.map((item) => (
            <div
              key={item.amount}
              className="bg-card rounded-xl p-6 shadow-card border border-border/50 text-center hover:shadow-elevated transition-all"
            >
              <div className="w-14 h-14 rounded-full bg-brand-gold/10 flex items-center justify-center mx-auto mb-4">
                <span className="material-icons-outlined text-brand-gold text-2xl">{item.icon}</span>
              </div>
              <p className="text-2xl font-bold text-foreground mb-1">{item.amount}</p>
              <p className="text-xs text-muted-foreground mb-3">{item.approx}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Volunteer Opportunities */}
      <SectionWrapper>
        <SectionHeader
          title="Volunteer With Us"
          description="Lend your skills to help strengthen healthcare access in communities across Uganda."
        />
        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {volunteerRoles.map((role) => (
            <div
              key={role.title}
              className="flex gap-4 bg-card rounded-xl p-6 shadow-card border border-border/50 hover:shadow-elevated transition-all"
            >
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                <span className="material-icons-outlined text-secondary text-2xl">{role.icon}</span>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">{role.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{role.description}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper>
        <div className="bg-secondary rounded-2xl py-16 px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-4">
            {getInvolvedCta.title}
          </h2>
          <p className="text-secondary-foreground/80 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            {getInvolvedCta.description}
          </p>
          <Link
            to={getInvolvedCta.buttonHref}
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-gold text-foreground font-semibold rounded-lg hover:brightness-110 transition-all shadow-lg"
          >
            <span className="material-icons-outlined">mail</span>
            {getInvolvedCta.buttonLabel}
          </Link>
        </div>
      </SectionWrapper>
    </>
  );
};

export default GetInvolved;
