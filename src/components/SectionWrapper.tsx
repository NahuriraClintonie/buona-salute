import type { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
  alternate?: boolean;
}

const SectionWrapper = ({ children, className = "", id, alternate = false }: SectionWrapperProps) => {
  return (
    <section
      id={id}
      className={`py-16 md:py-24 ${alternate ? "bg-muted/50" : "bg-background"} ${className}`}
    >
      <div className="container-max">{children}</div>
    </section>
  );
};

export default SectionWrapper;
