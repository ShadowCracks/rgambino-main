/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'custom': '1500px', // Custom breakpoint at 1500px
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        success: { // Success animation keyframes
          '0%': { transform: 'scale(1)', backgroundColor: '#4CAF50' }, // Start normal size, green color
          '50%': { transform: 'scale(1.1)', backgroundColor: '#45A049' }, // Pulse effect, darker green
          '100%': { transform: 'scale(1)', backgroundColor: '#4CAF50' }, // Return to normal size, green color
        },
      },
      animation: {
        'slide-in': 'slideIn 1.5s ease-out forwards',
        'animate-success': 'success 0.5s ease-out forwards', // Success animation for button
      },
    },
  },
  plugins: [],
};
