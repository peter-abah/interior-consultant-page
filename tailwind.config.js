module.exports = {
  purge: {
    enabled: true,
    content: ['./index.html'],
    safelist: ['w-screen'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: 'var(--color-primary)',
      secondary: 'var(--color-secondary)',
      gray: 'var(--color-gray)',
    },

    fontFamily: {
      'serif': ['"Crimson pro"', 'serif'],
      'sans': ['Montserrat', 'sans-serif'],
      'display': ['Lora', 'serif'],
    },

    boxShadow: {
      DEFAULT: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    },

    extend: {
      fontSize: {
        'xxs': '.625rem'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
