import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import postcssUrl from "./plugins/postcssUrl";
import postcss from "rollup-plugin-postcss";
import postcssImport from "postcss-import";
import dts from "rollup-plugin-dts";

const packageJson = require("./package.json");
const pathsDist = "dist";

export default [
    {
        input: "src/index.ts",
        output: [
            {
                file: packageJson.main,
                format: "cjs",
                sourcemap: true,
            },
            {
                file: packageJson.module,
                format: "esm",
                sourcemap: true,
            },
        ],
        plugins: [
            resolve(),
            commonjs(),
            typescript({ tsconfig: "./tsconfig.json" }),
            postcss({
                sourceMap: "inline",
                modules: true,
                plugins: [
                    postcssImport(),
                    ...postcssUrl({
                        basePath: ["src/components"],
                        assetsPath: pathsDist + "/assets",
                        dest: pathsDist,
                    }),
                ],
            }),
        ],
        external: ["react", "react-dom"],
    },
    {
        input: "dist/esm/index.d.ts",
        output: [{ file: "dist/index.d.ts", format: "esm" }],
        plugins: [dts()],
        external: [/\.css$/],
    },
];
