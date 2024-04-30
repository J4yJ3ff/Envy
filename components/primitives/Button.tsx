import React from "react";
import { Button as CustomButton } from "../ui/button";

interface ButtonProps {
  variant: any;
  label: string;
  styles?: string;
  type: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant,
  label,
  styles,
  type,
}) => {
  return (
    <CustomButton
      variant={variant}
      className={`rounded-3xl border-2 border-primary px-8 py-4 text-secondary-100 ${styles}`}
    >
      {label}
    </CustomButton>
  );
};
