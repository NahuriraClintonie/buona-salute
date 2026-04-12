import MaterialIcon from "./MaterialIcon";
import type { ImpactMetric } from "../types";

interface MetricCardProps {
  metric: ImpactMetric;
}

const MetricCard = ({ metric }: MetricCardProps) => {
  return (
    <div className="bg-card rounded-xl p-6 text-center shadow-card hover:shadow-elevated transition-all border border-border/50">
      <div className="w-16 h-16 rounded-full bg-brand-gold/10 flex items-center justify-center mx-auto mb-4">
        <MaterialIcon name={metric.icon} size="lg" className="text-brand-gold" />
      </div>
      <p className="text-3xl md:text-4xl font-bold text-primary mb-2">{metric.value}</p>
      <p className="text-muted-foreground text-sm font-medium">{metric.label}</p>
    </div>
  );
};

export default MetricCard;
