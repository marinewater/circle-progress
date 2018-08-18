import typescript from 'rollup-plugin-typescript2';

export default {
    input: './ts/progress.ts',
    output: {
        file: 'dist/progress.js',
        format: 'iife',
        name: 'progress',
        sourcemap: true
    },

    plugins: [
        typescript(/*{ plugin options }*/)
    ]
}