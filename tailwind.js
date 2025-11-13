module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        // Primary Colors - warm earth tone for trust and grounding
        primary: {
          DEFAULT: "#8B7355", // primary
          50: "#F8F6F3",
          100: "#F0EBE5",
          200: "#E1D7CB",
          300: "#D2C3B1",
          400: "#C3AF97",
          500: "#8B7355", // primary
          600: "#7A6449",
          700: "#69553D",
          800: "#584631",
          900: "#473725",
        },
        // Secondary Colors - gentle sophistication for secondary actions
        secondary: {
          DEFAULT: "#A8956B", // secondary
          50: "#F9F7F3",
          100: "#F3EFE7",
          200: "#E7DFCF",
          300: "#DBCFB7",
          400: "#CFBF9F",
          500: "#A8956B", // secondary
          600: "#97845F",
          700: "#867353",
          800: "#756247",
          900: "#64513B",
        },
        // Accent Colors - calm focus for wisdom highlights
        accent: {
          DEFAULT: "#6B8E7F", // accent
          50: "#F4F7F6",
          100: "#E9EFED",
          200: "#D3DFDB",
          300: "#BDCFC9",
          400: "#A7BFB7",
          500: "#6B8E7F", // accent
          600: "#5F7F72",
          700: "#537065",
          800: "#476158",
          900: "#3B524B",
        },
        // Background Colors
        background: "#FEFCF8", // soft warmth for comfortable reading
        surface: "#F7F4EF", // subtle depth for content containers
        
        // Text Colors
        text: {
          primary: "#2D2A26", // rich readability for extended engagement
          secondary: "#5A5651", // clear hierarchy without harsh contrast
        },
        
        // Status Colors
        success: {
          DEFAULT: "#7A9B76", // encouraging growth without celebration overload
          50: "#F5F8F5",
          100: "#EBF1EB",
          200: "#D7E3D7",
          300: "#C3D5C3",
          400: "#AFC7AF",
          500: "#7A9B76", // success
          600: "#6E8B6A",
          700: "#627B5E",
          800: "#566B52",
          900: "#4A5B46",
        },
        warning: {
          DEFAULT: "#B8956A", // gentle attention without alarm
          50: "#FBF8F4",
          100: "#F7F1E9",
          200: "#EFE3D3",
          300: "#E7D5BD",
          400: "#DFC7A7",
          500: "#B8956A", // warning
          600: "#A6865F",
          700: "#947754",
          800: "#826849",
          900: "#70593E",
        },
        error: {
          DEFAULT: "#A67B5B", // helpful concern with warmth intact
          50: "#FAF6F4",
          100: "#F5EDE9",
          200: "#EBDBD3",
          300: "#E1C9BD",
          400: "#D7B7A7",
          500: "#A67B5B", // error
          600: "#956F52",
          700: "#846349",
          800: "#735740",
          900: "#624B37",
        },
        
        // Border Colors
        border: {
          DEFAULT: "#E8E3DB", // subtle borders for form inputs and content separation
          light: "#F0EBE5",
          dark: "#D2C3B1",
        },
      },
      fontFamily: {
        // Headlines - modern warmth that feels approachable yet authoritative
        sans: ['Inter', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        // Body - exceptional readability for extended advice consumption
        body: ['Source Sans 3', 'sans-serif'],
        'source-sans': ['Source Sans 3', 'sans-serif'],
        // Accents - serif warmth for special wisdom quotes and emotional moments
        accent: ['Crimson Text', 'serif'],
        crimson: ['Crimson Text', 'serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1.5' }],
        'sm': ['0.875rem', { lineHeight: '1.6' }],
        'base': ['1rem', { lineHeight: '1.6' }],
        'lg': ['1.125rem', { lineHeight: '1.6' }],
        'xl': ['1.25rem', { lineHeight: '1.5' }],
        '2xl': ['1.5rem', { lineHeight: '1.4' }],
        '3xl': ['1.875rem', { lineHeight: '1.3' }],
        '4xl': ['2.25rem', { lineHeight: '1.2' }],
        '5xl': ['3rem', { lineHeight: '1.1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'lg': '8px', // rounded corners throughout for soft, approachable aesthetic
        'xl': '12px',
        '2xl': '16px',
      },
      boxShadow: {
        'warm': '0 4px 20px rgba(139, 115, 85, 0.1)', // soft, warm shadows for advice cards and primary CTAs
        'warm-lg': '0 8px 30px rgba(139, 115, 85, 0.15)',
        'warm-xl': '0 12px 40px rgba(139, 115, 85, 0.2)',
      },
      animation: {
        'fade-in': 'fadeIn 300ms ease-out',
        'slide-up': 'slideUp 300ms ease-out',
        'gentle-bounce': 'gentleBounce 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        gentleBounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
      transitionDuration: {
        '300': '300ms', // gentle transitions for conversational flow
      },
      transitionTimingFunction: {
        'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}