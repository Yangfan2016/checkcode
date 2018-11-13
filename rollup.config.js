import pkg from './package.json';
import json from 'rollup-plugin-json';
import nodeResolve from 'rollup-plugin-node-resolve';
import { terser } from 'rollup-plugin-terser'; // minify es6
import typescript from 'rollup-plugin-typescript2';
import commonjs from "rollup-plugin-commonjs";

export default {
    input: "./src/index.ts",
    output: {
        file: pkg.main,
        format: 'umd',
        name: 'CheckCode',
    },
    plugins: [
        json(),
        nodeResolve(),
        commonjs(),
        typescript(),
        terser()
    ]
}
