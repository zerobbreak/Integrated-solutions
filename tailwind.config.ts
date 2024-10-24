import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Existing color variables
        gold: "#FFD700",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },

        // Custom Color Scheme (renamed to avoid conflicts)
        brandPrimary: {
          DEFAULT: '#0077cc', // Electric Blue
          dark: '#005fa3',    // Darker shade for hover/active states
        },
        brandAccent: {
          DEFAULT: '#00cc66', // Vibrant Green
          dark: '#009a4d',    // Darker shade for hover/active states
        },
        brandNeutral: {
          DEFAULT: '#f0f0f0', // Soft Gray
          dark: '#cccccc',    // Darker neutral if needed
        },
        brandDarkAccent: {
          DEFAULT: '#333333', // Charcoal Gray
        },

        // Secondary Color Scheme
        brandSecondary: {
          DEFAULT: '#1a8cff', // Deep Sky Blue
        },
        brandHighlight: {
          DEFAULT: '#ff9900', // Bright Orange
        },
        brandBackground: {
          DEFAULT: '#fef8e7', // Light Cream
        },
        brandTextDark: {
          DEFAULT: '#003366', // Dark Navy for text
        },

        // Alternative Color Scheme
        alternativeTeal: {
          DEFAULT: '#009688',     // Teal Green
        },
        alternativeSunYellow: {
          DEFAULT: '#fbc02d',  // Sun Yellow
        },
        alternativeBlueGray: {
          DEFAULT: '#e0eaf1',  // Soft Blue-Gray
        },
        alternativeMidnight: {
          DEFAULT: '#002b5c',  // Midnight Blue
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
