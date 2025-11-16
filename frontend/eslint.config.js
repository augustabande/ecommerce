import next from "eslint-config-next";

export default [
  {
    ignores: ["node_modules", ".next"],
  },
  {
    files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
    ...next,
    rules: {
      "@next/next/no-html-link-for-pages": "off",
      "@next/next/no-page-custom-font": "off",
    },
  },
];