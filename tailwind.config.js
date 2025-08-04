module.exports = {
  content: [
    "./pages/*.{html,js}",
    "./index.html",
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./components/**/*.{html,js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Warm Terracotta
        primary: {
          50: "#FDF6F4", // terracotta-50
          100: "#FBEAE5", // terracotta-100
          200: "#F6D0C4", // terracotta-200
          300: "#F1B6A3", // terracotta-300
          400: "#EC9C82", // terracotta-400
          500: "#E07A5F", // terracotta-500 (base)
          600: "#D4654A", // terracotta-600
          700: "#B8543E", // terracotta-700
          800: "#9C4332", // terracotta-800
          900: "#803226", // terracotta-900
          DEFAULT: "#E07A5F" // terracotta-500
        },
        // Secondary Colors - Sage Green
        secondary: {
          50: "#F4F9F6", // sage-50
          100: "#E8F2ED", // sage-100
          200: "#C6DFD1", // sage-200
          300: "#A4CCB5", // sage-300
          400: "#93C2A8", // sage-400
          500: "#81B29A", // sage-500 (base)
          600: "#6FA088", // sage-600
          700: "#5D8E76", // sage-700
          800: "#4B7C64", // sage-800
          900: "#396A52", // sage-900
          DEFAULT: "#81B29A" // sage-500
        },
        // Accent Colors - Golden Warmth
        accent: {
          50: "#FEF9F3", // golden-50
          100: "#FDF2E7", // golden-100
          200: "#FADFC3", // golden-200
          300: "#F7CC9F", // golden-300
          400: "#F5B780", // golden-400
          500: "#F4A261", // golden-500 (base)
          600: "#E89347", // golden-600
          700: "#DC842D", // golden-700
          800: "#C07526", // golden-800
          900: "#A4661F", // golden-900
          DEFAULT: "#F4A261" // golden-500
        },
        // Background Colors
        background: "#F2F4F3", // clean-cream
        surface: "#FFFFFF", // pure-white
        
        // Text Colors
        text: {
          primary: "#3D405B", // charcoal-700
          secondary: "#6C757D", // gray-600
        },
        
        // Status Colors
        success: "#81B29A", // sage-500
        warning: "#F4A261", // golden-500
        error: "#E76F51", // coral-red
        
        // Extended Gray Palette
        gray: {
          50: "#F9FAFB", // gray-50
          100: "#F3F4F6", // gray-100
          200: "#E5E7EB", // gray-200
          300: "#D1D5DB", // gray-300
          400: "#9CA3AF", // gray-400
          500: "#6B7280", // gray-500
          600: "#4B5563", // gray-600
          700: "#374151", // gray-700
          800: "#1F2937", // gray-800
          900: "#111827", // gray-900
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        accent: ['Crimson Pro', 'serif'],
        crimson: ['Crimson Pro', 'serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      boxShadow: {
        'soft': '0 4px 12px rgba(61, 64, 91, 0.1)',
        'medium': '0 8px 24px rgba(61, 64, 91, 0.15)',
        'card': '0 4px 12px rgba(61, 64, 91, 0.1)',
        'card-hover': '0 8px 24px rgba(61, 64, 91, 0.15)',
      },
      borderRadius: {
        'sm': '0.25rem',
        'md': '0.375rem',
        'lg': '0.5rem',
        'xl': '0.75rem',
        '2xl': '1rem',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      transitionDuration: {
        '300': '300ms',
        '400': '400ms',
      },
      transitionTimingFunction: {
        'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
      },
      animation: {
        'fade-in': 'fadeIn 300ms ease-out',
        'slide-up': 'slideUp 400ms ease-out',
        'parallax': 'parallax 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        parallax: {
          '0%': { transform: 'translateY(0px)' },
          '100%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}