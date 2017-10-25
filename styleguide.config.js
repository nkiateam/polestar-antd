const path = require('path');

// Configuration Reference => https://react-styleguidist.js.org/docs/configuration
module.exports = {

    // 문서 서버 포트
    serverPort: 4001,

    // 문서화 할 컴포넌트 스코프
    components: './src/*/[A-Z]*.{js,jsx}',

    // 문서화 할때 같이 번들링 할 의존성들
    require: [
        './examples/src/style/App.css'
    ],

    webpackConfig: {
        module: {
            rules: [
                {
                    test: /\.(js)$/,
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'react', 'stage-0'],
                        plugins: ['react-hot-loader/babel'],
                    },
                    exclude: /node_modules/,
                },
                {
                    test: /\.css$/,
                    use: [
                        require.resolve('style-loader'),
                        {
                            loader: require.resolve('css-loader'),
                        },
                    ]
                }
            ]
        }
    },

    styleguideDir: './docs',

    // props와 methods를 기본적으로 펼칠지 말지
    showUsage: true,

    // example code를 기본적으로 펼칠지 말지
    showCode: true,

    title: 'Polestar-Antd Reference',

    // 문서 스타일 설정
    // theme: {
    //     color: {
    //         base: '#333',
    //         light: '#999',
    //         lightest: '#ccc',
    //         link: '#CBCBCB',
    //         linkHover: '#FFFFFF',
    //         border: '#404040',
    //         name: '#7f9a44',
    //         type: '#b77daa',
    //         error: '#fff',
    //         baseBackground: '#fff',
    //         errorBackground: '#c00',
    //         codeBackground: '#f5f5f5',
    //         sidebarBackground: '#404040',
    //     },
    //     fontFamily: {
    //         base: [
    //             '-apple-system',
    //             'BlinkMacSystemFont',
    //             '"Segoe UI"',
    //             '"Roboto"',
    //             '"Oxygen"',
    //             '"Ubuntu"',
    //             '"Cantarell"',
    //             '"Fira Sans"',
    //             '"Droid Sans"',
    //             '"Helvetica Neue"',
    //             'sans-serif',
    //         ],
    //         monospace: ['Consolas', '"Liberation Mono"', 'Menlo', 'monospace'],
    //     },
    //     fontSize: {
    //         base: 15,
    //         text: 16,
    //         small: 13,
    //         h1: 48,
    //         h2: 36,
    //         h3: 24,
    //         h4: 18,
    //         h5: 16,
    //         h6: 16,
    //     },
    //     mq: {
    //         small: '@media (max-width: 600px)',
    //     },
    //     borderRadius: 3,
    //     maxWidth: 1000,
    //     sidebarWidth: 250,
    // },
    // styles: {
    //     Logo: {
    //         logo: {
    //             color: '#FFFFFF'
    //         },
    //         '@keyframes blink': {
    //             to: { opacity: 0 }
    //         }
    //     },
    //     TableOfContents: {
    //         input: {
    //         }
    //     }
    // }
};