import { Link } from "react-router-dom";
import PageHero from "@/components/PageHero";
import SectionWrapper from "@/components/SectionWrapper";
import SectionHeader from "@/components/SectionHeader";
import IconCard from "@/components/IconCard";
import { whoWeServeIntro, targetCommunities, collectiveActionPromise, testimonials } from "@/data/whoWeServe";

const WhoWeServe = () => {
  return (
    <>
      <PageHero title={whoWeServeIntro.title} description={whoWeServeIntro.description} breadcrumb="Who We Serve" />

      {/* Target Communities */}
      <SectionWrapper>
        <SectionHeader title="Communities We Reach" description="We focus on those most excluded from consistent healthcare." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {targetCommunities.map((community) => (
            <IconCard key={community.title} title={community.title} description={community.description} icon={community.icon} variant="accent" />
          ))}
        </div>
      </SectionWrapper>

      {/* Collective Action Promise */}
      <SectionWrapper alternate>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">{collectiveActionPromise.title}</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {collectiveActionPromise.points.map((point) => (
              <div key={point.text} className="bg-card rounded-xl p-6 shadow-card border border-border/50">
                <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="material-icons-outlined text-secondary text-2xl">{point.icon}</span>
                </div>
                <p className="text-foreground font-medium leading-relaxed">{point.text}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Testimonials */}
      <SectionWrapper>
        <SectionHeader title="Voices From the Community" description="Real stories from real people whose lives have been transformed through collective action." />
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="bg-card rounded-xl p-6 shadow-card border border-border/50 hover:shadow-elevated transition-all">
              <span className="material-icons-outlined text-brand-gold text-3xl mb-4 block">format_quote</span>
              <p className="text-foreground/80 leading-relaxed italic mb-6">"{testimonial.quote}"</p>
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
                <p className="text-muted-foreground text-xs">{testimonial.community}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper alternate>
        <div className="bg-secondary rounded-2xl py-16 px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-4">
            Help Us Reach More Communities
          </h2>
          <p className="text-secondary-foreground/80 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Your support enables us to expand our collective action model to more vulnerable communities across Uganda.
          </p>
          <Link
            to="/get-involved"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-gold text-foreground font-semibold rounded-lg hover:brightness-110 transition-all shadow-lg"
          >
            <span className="material-icons-outlined">volunteer_activism</span>
            Get Involved
          </Link>
        </div>
      </SectionWrapper>
    </>
  );
};

export default WhoWeServe;
