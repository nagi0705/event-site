module.exports = {
    content: [
        './components/**/*.{vue,js}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './nuxt.config.{js,ts}',
    ],
    theme: {
        extend: {
            screens: {
                sm: '640px', // スマホ
                md: '768px', // タブレット
                lg: '1024px', // ノートPC
                xl: '1280px', // 大きめのデスクトップ
            },
            spacing: {
                '72': '18rem', // カスタム間隔
                '84': '21rem',
                '96': '24rem',
            },
        },
    },
    plugins: [],
};