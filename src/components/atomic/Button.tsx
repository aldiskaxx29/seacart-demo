interface ButtonProps {
  link: string;
  text: string;
  icon?: React.ReactNode;
  iconPosition?: "before" | "after";
  variant: "Primary" | "Secondary";
  classNames?: string;
}

const Button: React.FC<ButtonProps> = ({
  link,
  text,
  icon,
  iconPosition,
  variant, classNames
}) => {
  const buttonClass = `
    ${variant === "Primary" ? "bg-primary text-white hover:bg-gray-700" : "bg-gray-300 hover:bg-blue-700 text-white"}
    py-2 px-8 font-regular rounded flex items-center justify-center ${classNames}
  `;

  return (
    <a href={link} className={buttonClass}>
      {icon && iconPosition === "before" && (
        <span className="mr-2">{icon}</span>
      )}
      {text}
      {icon && iconPosition === "after" && <span className="ml-2">{icon}</span>}
    </a>
  );
};

export default Button;
