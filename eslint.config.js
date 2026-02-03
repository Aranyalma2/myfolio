import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import tseslint from 'typescript-eslint'
import vueParser from 'vue-eslint-parser'

export default tseslint.config(
	{ ignores: ['dist', 'node_modules'] },
	js.configs.recommended,
	...tseslint.configs.recommended,
	...pluginVue.configs['flat/recommended'],
	{
		files: ['**/*.vue', '**/*.ts'],
		languageOptions: {
			parser: vueParser,
			parserOptions: {
				parser: tseslint.parser,
				ecmaVersion: 'latest',
				sourceType: 'module'
			}
		},
		rules: {
			// Vue-specific rules
			'vue/multi-word-component-names': 'off',
			'vue/no-v-html': 'off',
			'vue/html-indent': ['error', 'tab'],
			'vue/html-self-closing': [
				'error',
				{
					html: {
						void: 'always',
						normal: 'never',
						component: 'always'
					}
				}
			],

			// TypeScript rules
			'@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
			'@typescript-eslint/no-explicit-any': 'warn',

			// General rules
			'no-console': 'warn',
			'no-debugger': 'warn'
		}
	}
)
