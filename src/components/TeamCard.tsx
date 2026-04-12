import type { TeamMember } from "../types";
import MaterialIcon from "./MaterialIcon";

interface TeamCardProps {
  member: TeamMember;
}

const TeamCard = ({ member }: TeamCardProps) => {
  return (
    <div className="bg-card rounded-xl p-6 text-center shadow-card hover:shadow-elevated transition-all border border-border/50">
      <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
        <MaterialIcon name="person" size="xl" className="text-muted-foreground" />
      </div>
      <h3 className="font-semibold text-foreground mb-1">{member.name}</h3>
      <p className="text-sm text-secondary font-medium mb-3">{member.role}</p>
      <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
    </div>
  );
};

export default TeamCard;
