import React from "react";

const Button = ({
  children,
  onClick,
  className = "",
  type = "button",
  disabled = false,
  href,
}) => {
  const base = `px-4 py-2 rounded ${className}`;
  if (href) {
    return (
      <a href={href} className={base} aria-disabled={disabled}>
        {children}
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} className={base} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
