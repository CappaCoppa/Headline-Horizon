/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/app/**/*.{js,ts,jsx,tsx}"],
	theme: {
		fontFamily: {
			antic: ["Antic Didone", "serif"],
		},
		colors: {
			primary: "#002868",
			secondary: "#BF0A30",
			black: "#181818",
			"black-75": "#525252",
			"black-50": "#8B8B8B",
			"black-25": "#C5C5C5",
			"black-10": "#E8E8E8",
			"black-5": "#F3F3F3",
			"black-opacity-0.30": "rgba(0,0,0,0.30)",
			"black-opacity-0.50": "rgba(0,0,0,0.80)",
			"black-opacity-0.70": "rgba(0,0,0,0.80)",
			"primary-opacity-0.30": "rgba(0,40,104,1)",
			"secondary-opacity-0.20": "rgba(191,10,48,0.50)",
			error: "#A12D1D",
		},
		fontSize: {
			h1: "61px",
			h2: "48px",
			h3: "39px",
			h4: "31px",
			h5: "25px",
			h6: "20px",
			h7: "16px",
			h8: "13px",
			h9: "10px",
		},
		extend: {
			height: {
				8: "8px",
				16: "16px",
				24: "24px",
				32: "32px",
				64: "64px",
			},
			width: {
				8: "8px",
				16: "16px",
				24: "24px",
				32: "32px",
				64: "64px",
			},
			padding: {
				8: "8px",
				16: "16px",
				24: "24px",
				32: "32px",
				40: "40px",
				64: "64px",
				128: "128px",
				192: "192px",
				256: "256px",
			},
			margin: {
				8: "8px",
				16: "16px",
				24: "24px",
				32: "32px",
				40: "40px",
				64: "64px",
				128: "128px",
				192: "192px",
				256: "256px",
			},
			gap: {
				8: "8px",
				16: "16px",
				24: "24px",
				32: "32px",
				40: "40px",
				64: "64px",
				128: "128px",
				192: "192px",
				256: "256px",
			},
		},
	},
	plugins: [],
};