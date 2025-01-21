import { FlatCompat } from "@eslint/eslintrc";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends(
    "next/core-web-vitals",
    "next/typescript",
    "plugin:react/recommended",
    "plugin:tailwindcss/recommended",
    "plugin:prettier/recommended",
  ),
  {
    rules: {
      "react/react-in-jsx-scope": "off",
      "tailwindcss/no-custom-classname": "off",
    },
  },
];

export default eslintConfig;
