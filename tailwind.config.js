/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    color: {
      '--white': '#FFF',
      '--black': '#1A1A1A',
      '--red': '#EA1D2C',
      '--gray-100': '#A6A6A6',
      '--gray-200': '#717171',
      '--gray-400': '#3E3E3E',
      '--gray-h2': '#3F3E3E',
      '--green': '#50A773',
    },

    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
