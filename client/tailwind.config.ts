import type { Config } from "tailwindcss";
import { createColorSet, withAccountKitUi } from '@account-kit/react/tailwind';

/*
const config: Config = {
  content: [
    here
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
*/


export default withAccountKitUi(
  {
      darkMode: ['class'],
    content: [
          './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
          './src/components/**/*.{js,ts,jsx,tsx,mdx}',
          './src/app/**/*.{js,ts,jsx,tsx,mdx}',
      ],
      theme: {
      	extend: {
      		backgroundImage: {
      			'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      			'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      			themelinear: 'linear-gradient(91.11deg, #84DFDD -0.97%, #157D7A 167.27%)'
      		},
      		borderRadius: {
      			lg: 'var(--radius)',
      			md: 'calc(var(--radius) - 2px)',
      			sm: 'calc(var(--radius) - 4px)'
      		},
      		colors: {
      			background: 'hsl(var(--background))',
      			foreground: 'hsl(var(--foreground))',
      			card: {
      				DEFAULT: 'hsl(var(--card))',
      				foreground: 'hsl(var(--card-foreground))'
      			},
      			popover: {
      				DEFAULT: 'hsl(var(--popover))',
      				foreground: 'hsl(var(--popover-foreground))'
      			},
      			primary: {
      				DEFAULT: 'hsl(var(--primary))',
      				foreground: 'hsl(var(--primary-foreground))'
      			},
      			secondary: {
      				DEFAULT: 'hsl(var(--secondary))',
      				foreground: 'hsl(var(--secondary-foreground))'
      			},
      			muted: {
      				DEFAULT: 'hsl(var(--muted))',
      				foreground: 'hsl(var(--muted-foreground))'
      			},
      			accent: {
      				DEFAULT: 'hsl(var(--accent))',
      				foreground: 'hsl(var(--accent-foreground))'
      			},
      			destructive: {
      				DEFAULT: 'hsl(var(--destructive))',
      				foreground: 'hsl(var(--destructive-foreground))'
      			},
      			border: 'hsl(var(--border))',
      			input: 'hsl(var(--input))',
      			ring: 'hsl(var(--ring))',
      			chart: {
      				'1': 'hsl(var(--chart-1))',
      				'2': 'hsl(var(--chart-2))',
      				'3': 'hsl(var(--chart-3))',
      				'4': 'hsl(var(--chart-4))',
      				'5': 'hsl(var(--chart-5))'
      			}
      		}
      	}
      },
      plugins: [require("tailwindcss-animate")],
  },
  {
      colors: {
        "btn-primary": createColorSet("#363FF9", "#9AB7FF"),
        "fg-accent-brand": createColorSet("#363FF9", "#9AB7FF"),
      },
  }
);

//export default config;