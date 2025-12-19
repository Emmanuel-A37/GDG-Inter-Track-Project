import { cn } from "../utils/cn";

const Button = ({ type = "button", title, onClick, disabled, icon, customClass }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        `bg-primary text-white font-bold rounded-lg w-full h-10 md:h-14 cursor-pointer ${
          disabled ? "opacity-50 cursor-not-allowed" : ""
        }`,
        customClass
      )}
    >
      {title} {icon && <img src={icon} alt="icon" className="inline ml-2" />}
    </button>
  );
};

export default Button;
