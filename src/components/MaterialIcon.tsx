interface MaterialIconProps {
  name: string;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

const sizeMap = {
  sm: "text-lg",
  md: "text-2xl",
  lg: "text-4xl",
  xl: "text-5xl",
};

const MaterialIcon = ({ name, className = "", size = "md" }: MaterialIconProps) => {
  return (
    <span className={`material-icons-outlined ${sizeMap[size]} ${className}`}>
      {name}
    </span>
  );
};

export default MaterialIcon;
