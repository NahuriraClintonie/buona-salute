interface FocusAreaCardProps {
  title: string;
  description: string;
  icon: string;
}

const FocusAreaCard = ({ title, description, icon }: FocusAreaCardProps) => {
  return (
    <div className="relative bg-card rounded-xl pt-10 pb-8 px-6 border border-border/50 shadow-card hover:shadow-elevated transition-all duration-300 group overflow-visible mt-6">
      {/* Circular icon at top-left corner, center on the edge */}
      <div className="absolute -top-6 -left-3 w-14 h-14 rounded-full bg-secondary flex items-center justify-center shadow-lg border-4 border-card group-hover:scale-110 transition-transform duration-300">
        <span className="material-icons-outlined text-secondary-foreground text-2xl">{icon}</span>
      </div>

      <h3 className="text-lg font-bold text-foreground mb-3 mt-1">{title}</h3>
      <p className="text-muted-foreground leading-relaxed text-sm">{description}</p>
    </div>
  );
};

export default FocusAreaCard;
