import { ESLint } from "eslint";
import tseslint from "@typescript-eslint/eslint-plugin";
import pluginReactConfig from "eslint-plugin-react";

// Ensure you import necessary functions or configurations if needed
// Example: import fixupConfigRules from './path/to/fixupConfigRules';

export default [
	{
		files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
		languageOptions: {
			parser: "@typescript-eslint/parser",
			parserOptions: {
				ecmaVersion: 2021,
				sourceType: "module",
				ecmaFeatures: {
					jsx: true
				}
			}
		}
	},
	{
		languageOptions: {
			globals: {
				browser: true
			}
		}
	},
	{
		extends: [
			"eslint:recommended",
			"plugin:@typescript-eslint/recommended",
			"plugin:react/recommended",
			"plugin:react-hooks/recommended"
		],
		plugins: ["@typescript-eslint", "react"],
		settings: {
			react: {
				version: "detect"
			}
		},
		rules: {
			"no-console": "warn",
			"@typescript-eslint/no-explicit-any": "off",
			"@typescript-eslint/explicit-module-boundary-types": "off"
		}
	},
	...tseslint.configs.recommended,
	...fixupConfigRules(pluginReactConfig)
];
