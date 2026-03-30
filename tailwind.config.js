/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./app/**/*.{js,vue,ts}",
    "./error.vue",
    "./app/data/*.json"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "on-primary-fixed-variant": "#515c73",
        "primary-container": "#d7e2ff",
        "on-background": "#2b3437",
        "primary-dim": "#48526a",
        "outline": "#737c7f",
        "on-tertiary-container": "#3a5069",
        "on-secondary": "#f7f9ff",
        "on-secondary-fixed-variant": "#445d7b",
        "surface-container": "#eaeff1",
        "on-tertiary-fixed": "#273d56",
        "surface-bright": "#f8f9fa",
        "on-surface": "#2b3437",
        "secondary-fixed": "#d1e4ff",
        "secondary": "#48617e",
        "on-primary-fixed": "#353f56",
        "surface-dim": "#d1dce0",
        "on-primary": "#f7f7ff",
        "inverse-on-surface": "#9b9d9e",
        "surface": "#f8f9fa",
        "primary-fixed-dim": "#c9d4f0",
        "on-tertiary-fixed-variant": "#445a73",
        "outline-variant": "#abb3b7",
        "error-container": "#fe8983",
        "surface-variant": "#dbe4e7",
        "surface-container-high": "#e3e9ec",
        "inverse-primary": "#d7e2ff",
        "on-error-container": "#752121",
        "on-secondary-fixed": "#27415d",
        "secondary-dim": "#3c5572",
        "on-secondary-container": "#3a5470",
        "tertiary-dim": "#3f556e",
        "secondary-fixed-dim": "#bdd7f9",
        "on-tertiary": "#f7f9ff",
        "surface-container-low": "#f1f4f6",
        "on-primary-container": "#475269",
        "background": "#f8f9fa",
        "on-error": "#fff7f6",
        "error": "#9f403d",
        "tertiary": "#4b617b",
        "on-surface-variant": "#586064",
        "inverse-surface": "#0c0f10",
        "surface-container-highest": "#dbe4e7",
        "primary": "#545e76",
        "secondary-container": "#d1e4ff",
        "primary-fixed": "#d7e2ff",
        "surface-tint": "#545e76",
        "tertiary-fixed-dim": "#bad1ef",
        "error-dim": "#4e0309",
        "tertiary-fixed": "#c8dffe",
        "surface-container-lowest": "#ffffff",
        "tertiary-container": "#c8dffe"
      },
      fontFamily: {
        "headline": ["Manrope"],
        "body": ["Inter"],
        "label": ["Manrope"]
      },
      borderRadius: { "DEFAULT": "0.125rem", "lg": "0.25rem", "xl": "0.5rem", "full": "0.75rem" }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries')
  ]
}
