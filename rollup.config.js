import url from "rollup-plugin-url";

export default {
  plugins: [
    url({
      include: ["**/*.woff", "**/*.woff2", "**/*.otf"],
      // setting infinite limit will ensure that the files
      // are always bundled with the code, not copied to /dist
      limit: Infinity,
    }),
  ],
  // ...
};
