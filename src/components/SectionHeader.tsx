interface SectionHeaderProps {
  title: string;
  description?: string;
  centered?: boolean;
}

const SectionHeader = ({ title, description, centered = true }: SectionHeaderProps) => {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? "text-center" : ""}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{title}</h2>
      {description && (
        <p className={`text-muted-foreground text-lg md:text-xl leading-relaxed ${centered ? "max-w-3xl mx-auto" : "max-w-4xl"}`}>
          {description}
        </p>
      )}
      <div className={`mt-4 h-1 w-16 bg-brand-gold rounded-full ${centered ? "mx-auto" : ""}`} />
    </div>
  );
};

export default SectionHeader;
