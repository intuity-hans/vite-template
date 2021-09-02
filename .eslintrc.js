// eslint-disable-next-line no-undef
module.exports = {
	root: true,
	parser: "@typescript-eslint/parser",
	plugins: ["@typescript-eslint", "simple-import-sort", "extra-rules"],
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
  		"@typescript-eslint/no-unused-vars": ["error"]
	}
};

