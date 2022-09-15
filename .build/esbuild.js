import esbuild from 'esbuild';
import postsass from 'esbuild-postsass';

import esbuildConfig from './config/esbuild.config.js';
import postcssConfig from './config/postcss.config.js';

esbuild.build({
    ...esbuildConfig,
    format: 'esm',
    target: 'es2019',
    entryPoints: [
        './resources/scripts/index.js',
        './resources/styles/style.scss'
    ],
    plugins: [
        postsass(postcssConfig)
    ],
    loader: {
        '.jpg': 'file',
        '.jpeg': 'file',
        '.png': 'file',
        '.svg': 'file',
        '.eot': 'file',
        '.woff': 'file',
        '.ttf': 'file'
    }
})
.catch(() => {
    process.exit(1)
});
