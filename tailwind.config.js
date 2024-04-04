/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#125C13',
                },
                secondary: {
                    DEFAULT: '#3E7C17',
                },
                tertiary: {
                    DEFAULT: '#D63505',
                },
                black: {
                    DEFAULT: '#000000',
                    100: '#100d25',
                    200: '#0d1117',
                    main: '#3D362B',
                },

                'gray-light': {
                    DEFAULT: '#EEEEEE',
                },

                'white-100': {
                    DEFAULT: '#f3f3f3',
                },
            },
            boxShadow: {
                card: '0px 35px 120px -15px #211e35',
                custom: '0px 4px 3px rgba(0, 0, 0, 0.3)',
            },
            backgroundImage: {
                'hero-pattern': "url('/src/assets/fotor.jpg')",
            },
            screens: {
                xs: '450px',
            },
        },

        plugins: [],
    },
};
