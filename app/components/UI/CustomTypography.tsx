import { Typography, TypographyProps } from "@mui/material";
import React, { ReactNode } from "react";

interface TypographyNegativeProps {
  children: ReactNode;
  variant: TypographyProps["variant"];
  color?: string;
  styles?: any;
}

export default function CustomTypography({ children, variant, color = "#fff", styles }: TypographyNegativeProps) {
  return (
    <Typography
      variant={variant}
      sx={{ ...styles, color }}
    >
      {children}
    </Typography>
  );
}
