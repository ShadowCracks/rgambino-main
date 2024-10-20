import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "outline";
  onClick?: () => void;
  type?: "button" | "submit" | "reset"; // Add type prop here
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  onClick,
  type = "button", // Default type is "button" if not specified
}) => {
  const baseClasses = "px-8 py-2.5 text-center rounded-[100px] max-md:px-5";
  const variantClasses = {
    primary: "text-white bg-blue-400",
    outline: "text-blue-400 border border-blue-400 border-solid",
  };

  return (
    <button
      type={type} // Add the type prop here
      className={`${baseClasses} ${variantClasses[variant]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
