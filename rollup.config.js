/*
 * @Author: ryyyyy
 * @Date: 2021-12-08 11:05:15
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-12-08 15:38:52
 * @Description: Do not edit
 * @FilePath: /temp-react-library/rollup.config.js
 */
import resolve from "@rollup/plugin-node-resolve"; //Uses the node resolution algorithm for modules
import commonjs from "@rollup/plugin-commonjs"; //Converts commonjs modules to ES6 modules
import typescript from "@rollup/plugin-typescript"; //Teaches rollup how to process Typescript files
import dts from "rollup-plugin-dts"; //rollup your .d.ts files
import postcss from "rollup-plugin-postcss";
import { terser } from "rollup-plugin-terser";
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

const packageJson = require("./package.json");

export default [
  {
    input: 'src/index.ts',
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
      }
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      postcss(),
      terser()
    ]
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
    external: [/\.(css|less|scss)$/]
  },
]