"use client";
import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  palette: {
    mode: "light",
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === "info" && {
            backgroundColor: "#60a5fa",
          }),
        }),
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          padding: "8px 16px",
          borderRadius: "12px",
          cursor: "pointer",
          fontFamily: "Onest, sans-serif",
          fontSize: "14px",
          fontWeight: 600,
          lineHeight: "20px",
          letterSpacing: "-0.14px",
          height: "fit-content",
          whiteSpace: "nowrap",
        },
        contained: {
          backgroundColor: "#ff7800",
          color: "#ffffff",
          "&:hover": {
            backgroundColor: "#ff9800",
          },
        },
        outlined: {
          backgroundColor: "transparent",
          color: "#ff7800",
          border: "1px solid #ff7800",
          "&:hover": {
            backgroundColor: "#fff9f3",
          },
        },
      },
    },
  },
});

export default theme;
