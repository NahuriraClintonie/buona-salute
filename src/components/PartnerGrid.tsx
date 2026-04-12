import { Partner } from "@/types";

interface PartnerGridProps {
  partners: Partner[];
}

const PartnerGrid = ({ partners }: PartnerGridProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {partners.map((partner) => (
        <div
          key={partner.name}
          className="bg-card rounded-xl p-6 flex items-center justify-center text-center shadow-card border border-border/50 hover:shadow-elevated hover:border-brand-gold/30 transition-all min-h-[120px]"
        >
          {partner.logoUrl ? (
            <img
              src={partner.logoUrl}
              alt={partner.name}
              className="max-h-16 w-auto object-contain"
              loading="lazy"
            />
          ) : (
            <p className="text-sm font-medium text-foreground/80">{partner.name}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default PartnerGrid;
