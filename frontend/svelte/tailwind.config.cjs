const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	variants: {
		extend: {}
	},
	plugins: [require('./src/presets/preset.config.cjs')]
};

module.exports = config;
