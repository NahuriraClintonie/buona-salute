import { Link } from "react-router-dom";
import PageHero from "@/components/PageHero";
import SectionWrapper from "@/components/SectionWrapper";
import SectionHeader from "@/components/SectionHeader";
import MaterialIcon from "@/components/MaterialIcon";
import kayonzaImg from "@/assets/kayonza-pilot.jpg";
import {
  programsIntro,
  flagshipProgram,
  howItWorks,
  keyResults,
  kayonzaProject,
  futurePrograms,
  programsCta,
} from "@/data/programs";

const Programs = () => {
  return (
    <>
      <PageHero
        title={programsIntro.title}
        description={programsIntro.description}
        breadcrumb="Programs"
      />

      {/* Flagship Program */}
      <SectionWrapper>
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-elevated border border-border/50">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                <MaterialIcon name={flagshipProgram.icon} size="xl" className="text-primary" />
              </div>
              <div>
                <p className="text-sm text-brand-gold font-semibold uppercase tracking-wide">Flagship Program</p>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">{flagshipProgram.title}</h2>
              </div>
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">{flagshipProgram.description}</p>
            <h4 className="font-semibold text-foreground mb-4">Key Components:</h4>
            <ul className="space-y-3">
              {flagshipProgram.details.map((detail) => (
                <li key={detail} className="flex items-start gap-3">
                  <span className="material-icons-outlined text-brand-green text-xl mt-0.5">check_circle</span>
                  <span className="text-foreground/80">{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SectionWrapper>

      {/* How It Works */}
      <SectionWrapper alternate>
        <SectionHeader
          title="How the Program Works"
          description="A step-by-step process that transforms isolated patients into organized communities capable of sustaining their own treatment."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {howItWorks.map((step) => (
            <div key={step.step} className="bg-card rounded-xl p-6 shadow-card border border-border/50 hover:shadow-elevated transition-all relative">
              <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground text-sm font-bold">
                {step.step}
              </div>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 mt-2">
                <span className="material-icons-outlined text-primary text-2xl">{step.icon}</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Key Results */}
      <SectionWrapper>
        <SectionHeader title="Key Results" description="What our collective action program delivers for communities." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {keyResults.map((result) => (
            <div key={result.label} className="bg-card rounded-xl p-6 shadow-card border border-border/50 text-center hover:shadow-elevated transition-all">
              <div className="w-14 h-14 rounded-full bg-brand-gold/10 flex items-center justify-center mx-auto mb-4">
                <span className="material-icons-outlined text-brand-gold text-2xl">{result.icon}</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">{result.label}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{result.description}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Kayonza Pilot Project - Detailed */}
      <SectionWrapper alternate id="kayonza-pilot">
        <SectionHeader
          title={kayonzaProject.title}
          description={kayonzaProject.subtitle}
        />
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-start mb-12">
            <div className="rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={kayonzaImg}
                alt="Kayonza pilot project in Ntungamo District"
                className="w-full h-full object-cover min-h-[280px]"
                loading="lazy"
                width={800}
                height={512}
              />
            </div>
            <div>
              <p className="text-muted-foreground leading-relaxed mb-6">{kayonzaProject.summary}</p>
              <h4 className="font-semibold text-foreground mb-3">Geographic Coverage:</h4>
              <div className="flex flex-wrap gap-2 mb-4">
                {kayonzaProject.coverage.parishes.map((p) => (
                  <span key={p} className="text-xs bg-secondary/10 text-secondary px-3 py-1.5 rounded-full font-medium">{p}</span>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-card rounded-lg p-4 border border-border/50 text-center">
                  <p className="text-2xl font-bold text-foreground">{kayonzaProject.coverage.patients}</p>
                  <p className="text-xs text-muted-foreground">Patients Mobilized</p>
                </div>
                <div className="bg-card rounded-lg p-4 border border-border/50 text-center">
                  <p className="text-sm font-bold text-foreground">{kayonzaProject.coverage.healthCenter}</p>
                  <p className="text-xs text-muted-foreground">Health Center</p>
                </div>
              </div>
            </div>
          </div>

          {/* Intervention Model */}
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">{kayonzaProject.model.title}</h3>
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {kayonzaProject.model.steps.map((step) => (
              <div key={step.title} className="bg-card rounded-xl p-6 shadow-card border border-border/50">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <span className="material-icons-outlined text-primary text-2xl">{step.icon}</span>
                </div>
                <h4 className="font-semibold text-foreground mb-2">{step.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>

          {/* Key Results */}
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Key Results & Achievements</h3>
          <div className="bg-card rounded-2xl p-8 shadow-card border border-border/50 mb-12">
            <ul className="grid sm:grid-cols-2 gap-3">
              {kayonzaProject.keyResults.map((result) => (
                <li key={result} className="flex items-start gap-3">
                  <span className="material-icons-outlined text-brand-green text-xl mt-0.5">check_circle</span>
                  <span className="text-foreground/80 text-sm">{result}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Lessons Learned */}
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Key Lessons Learned</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {kayonzaProject.lessons.map((lesson) => (
              <div key={lesson.point} className="bg-card rounded-xl p-5 border border-border/50 shadow-card">
                <span className="material-icons-outlined text-secondary text-xl mb-2 block">{lesson.icon}</span>
                <p className="text-sm text-muted-foreground leading-relaxed">{lesson.point}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper>
        <div className="bg-secondary rounded-2xl py-16 px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-4">
            {programsCta.title}
          </h2>
          <p className="text-secondary-foreground/80 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            {programsCta.description}
          </p>
          <Link
            to={programsCta.buttonHref}
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-gold text-foreground font-semibold rounded-lg hover:brightness-110 transition-all shadow-lg"
          >
            <span className="material-icons-outlined">volunteer_activism</span>
            {programsCta.buttonLabel}
          </Link>
        </div>
      </SectionWrapper>
    </>
  );
};

export default Programs;
