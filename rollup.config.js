import typescript from 'rollup-plugin-typescript2';
import { uglify } from 'rollup-plugin-uglify';

export default [{
    input: './ts/progress.ts',
    output: {
        file: 'dist/progress.js',
        format: 'iife',
        name: 'progress',
        sourcemap: true
    },

    plugins: [
        typescript()
    ]
}, {
    input: './ts/progress.ts',
    output: {
        file: 'dist/progress.min.js',
        format: 'iife',
        name: 'progress',
        sourcemap: true
    },

    plugins: [
        typescript(),
        uglify()
    ]
}]