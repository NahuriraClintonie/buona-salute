import MaterialIcon from "./MaterialIcon";

interface IconCardProps {
  title: string;
  description: string;
  icon: string;
  variant?: "default" | "accent" | "outline";
}

const IconCard = ({ title, description, icon, variant = "default" }: IconCardProps) => {
  const variantStyles = {
    default: "bg-card shadow-card hover:shadow-elevated border border-border/50",
    accent: "bg-secondary/10 border border-secondary/20 hover:border-secondary/40",
    outline: "bg-background border-2 border-border hover:border-brand-gold",
  };

  return (
    <div className={`rounded-xl p-6 md:p-8 transition-all duration-300 ${variantStyles[variant]}`}>
      <div className="w-14 h-14 rounded-lg bg-secondary/10 flex items-center justify-center mb-5">
        <MaterialIcon name={icon} size="lg" className="text-secondary" />
      </div>
      <h3 className="text-lg font-semibold text-foreground mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed text-sm">{description}</p>
    </div>
  );
};

export default IconCard;
