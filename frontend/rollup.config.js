// Rollup plugins
import typescript from "@rollup/plugin-typescript";
import buble from "@rollup/plugin-buble";
import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import uglify from "rollup-plugin-uglify";
import {minify} from "uglify-js";
import postcss from "rollup-plugin-postcss";
import { string } from "rollup-plugin-string";

const config =  {
    input: "src/app/main.ts",
    output: {
        file: "build/DemoApp.js",
        format: "cjs"
    },
    plugins: [
        postcss({
            extensions: [ ".css" ],
        }),
        string({
            // Required to be specified
            include: "**/*.html",

            // Undefined by default
            exclude: ["**/index.html"]
        }),
        typescript({
            typescript: require("typescript")
        }),
        buble(),
        nodeResolve({
            jsnext: true,
            main: true,
        }),
        commonjs()
    ],
};

// Minified JS Build
if (process.env.BUILD === 'minify') {
    config.output = {
        file: 'build/DemoApp.min.js',
        format: 'cjs'};
    config.plugins.push(
        uglify({}, minify)
    );
}

console.info(`\u001b[36m\[Rollup ${process.env.BUILD} build\]\u001b[97m \nConverting Typescript from ${config.input} to javascript, exporting to: ${config.output.file}`);

export default config
