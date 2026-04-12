import PageHero from "@/components/PageHero";
import SectionWrapper from "@/components/SectionWrapper";
import SectionHeader from "@/components/SectionHeader";
import IconCard from "@/components/IconCard";
import TeamCard from "@/components/TeamCard";
import { aboutIntro, missionIdentity, founderStory, teamMembers } from "@/data/about";

const About = () => {
  return (
    <>
      <PageHero title={aboutIntro.title} description={aboutIntro.description} breadcrumb="About Us" />

      {/* Mission & Vision */}
      <SectionWrapper>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-card rounded-xl p-8 shadow-card border border-border/50">
            <div className="flex items-center gap-3 mb-4">
              <span className="material-icons-outlined text-3xl text-secondary">flag</span>
              <h3 className="text-xl font-semibold text-foreground">Our Mission</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">{missionIdentity.mission}</p>
          </div>
          <div className="bg-card rounded-xl p-8 shadow-card border border-border/50">
            <div className="flex items-center gap-3 mb-4">
              <span className="material-icons-outlined text-3xl text-brand-gold">visibility</span>
              <h3 className="text-xl font-semibold text-foreground">Our Vision</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">{missionIdentity.vision}</p>
          </div>
        </div>
      </SectionWrapper>

      {/* Values */}
      <SectionWrapper alternate>
        <SectionHeader title="Our Values" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {missionIdentity.values.map((value) => (
            <IconCard key={value.title} title={value.title} description={value.description} icon={value.icon} variant="accent" />
          ))}
        </div>
      </SectionWrapper>

      {/* Founder Story */}
      <SectionWrapper>
        <div className="max-w-3xl mx-auto">
          <SectionHeader title={founderStory.title} />
          <p className="text-muted-foreground text-lg leading-relaxed text-center">{founderStory.content}</p>
        </div>
      </SectionWrapper>

      {/* Team */}
      <SectionWrapper alternate>
        <SectionHeader title="Our Team" description="Dedicated individuals driving change in healthcare access." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <TeamCard key={`${member.role}-${index}`} member={member} />
          ))}
        </div>
      </SectionWrapper>
    </>
  );
};

export default About;
