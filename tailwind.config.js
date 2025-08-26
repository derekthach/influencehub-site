/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0EA5E9', // sky-500
        dark: '#0F172A', // slate-900
        light: '#F8FAFC', // slate-50
        accent: '#22C55E', // green-500
      },
      fontFamily: {
        sans: ['DM Sans', 'Inter', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        'dm-sans': ['DM Sans', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
        display: ['Playfair Display', 'serif'],
      },
      fontSize: {
        'display-1': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.03em' }],
        'display-2': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        'display-3': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        'hero': ['4rem', { lineHeight: '1.1', letterSpacing: '-0.04em' }],
        'hero-lg': ['5rem', { lineHeight: '1.1', letterSpacing: '-0.04em' }],
        'hero-xl': ['6rem', { lineHeight: '1.1', letterSpacing: '-0.04em' }],
      },
      letterSpacing: {
        'tighter': '-0.04em',
        'tight': '-0.02em',
        'wide': '0.02em',
        'wider': '0.05em',
      },
    },
  },
  plugins: [],
} 