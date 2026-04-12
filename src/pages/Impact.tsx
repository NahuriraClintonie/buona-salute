import { Link } from "react-router-dom";
import PageHero from "@/components/PageHero";
import SectionWrapper from "@/components/SectionWrapper";
import SectionHeader from "@/components/SectionHeader";
import MetricCard from "@/components/MetricCard";
import { impactIntro, impactMetrics, kayonzaPilot, impactCta } from "@/data/impact";

const Impact = () => {
  return (
    <>
      <PageHero
        title={impactIntro.title}
        description={impactIntro.description}
        breadcrumb="Impact"
      />

      {/* Metrics */}
      <SectionWrapper>
        <SectionHeader title="Collective Action in Practice" description="Real results from real communities across Uganda." />
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
          {impactMetrics.map((metric) => (
            <MetricCard key={metric.label} metric={metric} />
          ))}
        </div>
      </SectionWrapper>

      {/* Kayonza Pilot */}
      <SectionWrapper alternate>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-sm text-brand-gold font-semibold uppercase tracking-wide mb-2">Case Study</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">{kayonzaPilot.title}</h2>
            <p className="text-lg text-muted-foreground">{kayonzaPilot.subtitle}</p>
          </div>

          <p className="text-muted-foreground text-lg leading-relaxed text-center mb-10">
            {kayonzaPilot.summary}
          </p>

          {/* Coverage stats */}
          <div className="grid sm:grid-cols-3 gap-4 mb-10">
            <div className="bg-card rounded-xl p-6 text-center shadow-card border border-border/50">
              <span className="material-icons-outlined text-primary text-3xl mb-2 block">people</span>
              <p className="text-3xl font-bold text-foreground">{kayonzaPilot.coverage.patients}</p>
              <p className="text-sm text-muted-foreground mt-1">Patients Mobilized</p>
            </div>
            <div className="bg-card rounded-xl p-6 text-center shadow-card border border-border/50">
              <span className="material-icons-outlined text-secondary text-3xl mb-2 block">location_on</span>
              <p className="text-3xl font-bold text-foreground">{kayonzaPilot.coverage.parishes.length}</p>
              <p className="text-sm text-muted-foreground mt-1">Parishes Covered</p>
            </div>
            <div className="bg-card rounded-xl p-6 text-center shadow-card border border-border/50">
              <span className="material-icons-outlined text-brand-green text-3xl mb-2 block">local_hospital</span>
              <p className="text-3xl font-bold text-foreground">1</p>
              <p className="text-sm text-muted-foreground mt-1">Health Center Partnered</p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* How the Model Works in Kayonza */}
      <SectionWrapper>
        <SectionHeader
          title={kayonzaPilot.model.title}
          description="The step-by-step intervention model proven in Kayonza Sub-county."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {kayonzaPilot.model.steps.map((step, idx) => (
            <div key={step.title} className="bg-card rounded-xl p-6 shadow-card border border-border/50 hover:shadow-elevated transition-all relative">
              <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm font-bold">
                {idx + 1}
              </div>
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4 mt-2">
                <span className="material-icons-outlined text-secondary text-2xl">{step.icon}</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Key Results */}
      <SectionWrapper alternate>
        <SectionHeader title="Key Results & Achievements" />
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {kayonzaPilot.keyResults.map((result) => (
              <div key={result} className="flex items-start gap-3 bg-card rounded-lg p-4 border border-border/50">
                <span className="material-icons-outlined text-brand-green text-xl mt-0.5 shrink-0">check_circle</span>
                <span className="text-foreground/80 leading-relaxed">{result}</span>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Lessons Learned */}
      <SectionWrapper>
        <SectionHeader title="Lessons Learned" description="Insights from the Kayonza pilot that inform our scaling strategy." />
        <div className="max-w-3xl mx-auto space-y-3">
          {kayonzaPilot.lessons.map((lesson) => (
            <div key={lesson.point} className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
              <span className="material-icons-outlined text-brand-gold text-xl mt-0.5 shrink-0">lightbulb</span>
              <span className="text-foreground/80 leading-relaxed">{lesson.point}</span>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper alternate>
        <div className="bg-secondary rounded-2xl py-16 px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-4">
            {impactCta.title}
          </h2>
          <p className="text-secondary-foreground/80 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            {impactCta.description}
          </p>
          <Link
            to={impactCta.buttonHref}
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-gold text-foreground font-semibold rounded-lg hover:brightness-110 transition-all shadow-lg"
          >
            <span className="material-icons-outlined">volunteer_activism</span>
            {impactCta.buttonLabel}
          </Link>
        </div>
      </SectionWrapper>
    </>
  );
};

export default Impact;
