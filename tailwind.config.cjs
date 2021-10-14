const config = {
    mode: 'jit',
    purge: ['./src/**/*.{html,js,svelte,ts}'],

    theme: {
        extend: {},
    },

    plugins: [
        require('@tailwindcss/typography'),
        require('daisyui')
    ],

    daisyui: {
        themes: [
            'corporate'
        ],
    },
};

module.exports = config;
