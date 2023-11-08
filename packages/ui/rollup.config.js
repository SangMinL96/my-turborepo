import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import auto from "autoprefixer";
import simple from 'postcss-simple-vars';
import simple2 from 'postcss-css-variables'
import path from "path";

export default {
  input: "index.tsx",
  output: {
    file: "dist/index.js",
    format: "cjs",
  },
  plugins: [
    typescript(),
    postcss({
      extract: "styles.scss",
      use: [
        'sass'
      ],
    }),
  ],
};
