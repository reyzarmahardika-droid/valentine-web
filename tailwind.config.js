/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'valentine-pink': '#ff4f95',
        'valentine-rose': '#ff2f7f',
        'valentine-blush': '#ffd6e8',
        'valentine-plum': '#3a2a33',
      },
      backgroundImage: {
        'gradient-valentine': "radial-gradient(900px 600px at 20% 10%, rgba(255,255,255,.75) 0%, rgba(255,255,255,0) 55%), radial-gradient(900px 600px at 80% 30%, rgba(255,255,255,.65) 0%, rgba(255,255,255,0) 60%), linear-gradient(135deg, #ffd6e8 0%, #ffeef6 55%, #ffd6e8 100%)",
      },
      boxShadow: {
        'soft': '0 18px 50px rgba(0,0,0,.10)',
      },
      keyframes: {
        floaty: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pop: {
          '0%': { transform: 'translateY(8px) scale(.98)', opacity: 0 },
          '100%': { transform: 'translateY(0px) scale(1)', opacity: 1 },
        },
        sway: {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        }
      },
      animation: {
        floaty: 'floaty 3s ease-in-out infinite',
        pop: 'pop .35s ease forwards',
        sway: 'sway 3.5s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
