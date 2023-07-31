type ButtonProps = {
  color: string;
  bgColor: string;
  text: string;
  borderRadius: string;
  size?: "md";
  icon?: React.ReactElement;
};

const Button = ({
  icon,
  bgColor,
  size,
  color,
  text,
  borderRadius,
}: ButtonProps) => {
  return (
    <button
      type="button"
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={` text-${size} p-3  hover:drop-shadow-xl `}
    >
      {icon} {text}
    </button>
  );
};

export default Button;
