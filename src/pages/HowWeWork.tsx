import PageHero from "@/components/PageHero";
import SectionWrapper from "@/components/SectionWrapper";
import SectionHeader from "@/components/SectionHeader";
import Timeline from "@/components/Timeline";
import IconCard from "@/components/IconCard";
import { howWeWorkIntro, workSteps, approachPoints } from "@/data/howWeWork";

const HowWeWork = () => {
  return (
    <>
      <PageHero title={howWeWorkIntro.title} description={howWeWorkIntro.description} breadcrumb="How We Work" />

      {/* Process Steps */}
      <SectionWrapper>
        <SectionHeader title="Our Process" description="A proven step-by-step model for community healthcare transformation." />
        <Timeline steps={workSteps} />
      </SectionWrapper>

      {/* Why It Works */}
      <SectionWrapper alternate>
        <SectionHeader title="Why Our Approach Works" description="Our model is built on principles that ensure lasting impact." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {approachPoints.map((point) => (
            <IconCard key={point.title} title={point.title} description={point.description} icon={point.icon} variant="outline" />
          ))}
        </div>
      </SectionWrapper>
    </>
  );
};

export default HowWeWork;
