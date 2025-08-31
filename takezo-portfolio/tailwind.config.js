module.exports = {
	purge: [],
	darkMode: false, // or 'media' or 'class'
	theme: {
		container: {
			center: true,
			padding: "15px",
		},
		screens: {
			sm: "640px",
			md: "768px",
			lg: "960px",
			xl: "1200px",
		},
		fontFamily: {
			primary: "var(--font-inter)",
		},
		extend: {
      colors: {
        primary: "#9e1311",
        accent: {
          DEFAULT: '#00ff99',
          hover: '#00e187'
        }
      }
    },
	},
	variants: {
		extend: {},
	},
	plugins: [ ],
};
