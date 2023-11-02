import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: 'rgba(var(--dark), <alpha-value>)',
        primary: 'rgba(var(--primary), <alpha-value>)',
        primaryhighlight: 'rgba(var(--primaryhighlight), <alpha-value>)',
        secondary: 'rgba(var(--secondary), <alpha-value>)',
        secondaryhighlight: 'rgba(var(--secondaryhighlight), <alpha-value>)',
        secondarylight: 'rgba(var(--secondarylight), <alpha-value>)',
      },
    },
  },
  plugins: [],
}
export default config
