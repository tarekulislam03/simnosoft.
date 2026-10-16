/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          light: '#FFFFFF',
          alt: '#F7F8FA',
          dark: '#0B1F3A',
          footer: '#0B1F3A',
        },
        heading: '#0B1F3A',
        body: '#475467',
        border: '#E4E7EC',
        muted: '#98A2B3',
        accent: {
          DEFAULT: '#1D4ED8',
          hover: '#1E40AF',
        },
      },
      fontFamily: {
        serif: ['"Source Serif 4"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      borderRadius: {
        card: '12px',
        btn: '10px',
        input: '10px',
        tag: '999px',
      },
      maxWidth: {
        container: '1200px',
        heroText: '720px',
      },
      boxShadow: {
        none: 'none',
        sm: '0 1px 2px 0 rgba(16, 24, 40, 0.04)',
      },
    },
  },
  plugins: [],
}
