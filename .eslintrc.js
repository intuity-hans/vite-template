// eslint-disable-next-line no-undef
module.exports = {
	root: true,
	parser: "@typescript-eslint/parser",
	plugins: ["@typescript-eslint", "simple-import-sort", "extra-rules", "sonarjs", "unicorn"],
	extends: ["airbnb-typescript"],
	parserOptions: {
		project: "./tsconfig.json",
	},
	rules: {
		"react/prop-types": 0,
		"react/require-default-props": 0,
		"react/jsx-props-no-spreading": "off",
		"func-style": ["error", "expression"] ,
		"simple-import-sort/imports": "error",
		"extra-rules/no-commented-out-code": "warn",
		"no-unused-vars": "off",
  		"@typescript-eslint/no-unused-vars": ["error"],
		"sonarjs/no-duplicate-string": ["error", 3],
		"sonarjs/no-gratuitous-expressions": ["error"],
		"sonarjs/no-same-line-conditional": ["error"],
		"sonarjs/no-small-switch": ["error"],
		"sonarjs/prefer-object-literal": ["error"],
		"sonarjs/prefer-single-boolean-return": ["error"],
		"unicorn/import-index": "error",
		"unicorn/no-new-array": "error",
		"unicorn/prefer-array-find": "error",
		"unicorn/prefer-array-index-of": "error",
		"unicorn/prefer-date-now": "error",
		"unicorn/prefer-negative-index": "error",
		"unicorn/prefer-negative-index": "error",
		"unicorn/prefer-object-has-own": "error",
		"unicorn/prefer-switch": "error",
		"unicorn/prefer-ternary": "error",
		"unicorn/require-array-join-separator": "error",
		"unicorn/require-number-to-fixed-digits-argument": "error",
	}
};

