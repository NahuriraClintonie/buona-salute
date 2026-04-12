import MaterialIcon from "./MaterialIcon";
import type { WorkStep } from "../types";

interface TimelineProps {
  steps: WorkStep[];
}

const Timeline = ({ steps }: TimelineProps) => {
  return (
    <div className="relative">
      {/* Desktop: horizontal flow */}
      <div className="hidden lg:grid lg:grid-cols-4 gap-6">
        {steps.map((step, index) => (
          <div key={step.step} className="relative">
            {/* Connector line */}
            {index < steps.length - 1 && (
              <div className="absolute top-8 left-[60%] right-0 h-0.5 bg-border z-0" />
            )}
            <div className="relative z-10 bg-card rounded-xl p-5 shadow-card border border-border/50 hover:shadow-elevated transition-all">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
                  <span className="text-secondary-foreground font-bold text-sm">{step.step}</span>
                </div>
                <MaterialIcon name={step.icon} size="md" className="text-brand-gold" />
              </div>
              <h4 className="font-semibold text-foreground text-sm mb-2">{step.title}</h4>
              <p className="text-muted-foreground text-xs leading-relaxed">{step.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile: vertical list */}
      <div className="lg:hidden space-y-4">
        {steps.map((step) => (
          <div key={step.step} className="flex gap-4 items-start">
            <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shrink-0 mt-1">
              <span className="text-secondary-foreground font-bold text-sm">{step.step}</span>
            </div>
            <div className="bg-card rounded-xl p-5 shadow-card border border-border/50 flex-1">
              <div className="flex items-center gap-2 mb-2">
                <MaterialIcon name={step.icon} size="sm" className="text-brand-gold" />
                <h4 className="font-semibold text-foreground text-sm">{step.title}</h4>
              </div>
              <p className="text-muted-foreground text-xs leading-relaxed">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
