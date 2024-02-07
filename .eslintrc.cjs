module.exports = {
  'root': true,
  'env': { 'browser': true, 'es2020': true },
  'extends': [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended'
  ],
  'ignorePatterns': ['dist', '.eslintrc.cjs'],
  'parser': '@typescript-eslint/parser',
  'plugins': ['react-refresh'],
  'rules': {
    'react-refresh/only-export-components': [
      'warn',
      { 'allowConstantExport': true }
    ],
    // https://eslint.org/docs/rules/array-callback-return
    // Enforces return statements in callbacks of array`s methods
    'array-callback-return': [
      'error',
      {
        'allowImplicit': true,
        'checkForEach': true
      }
    ],
    // Enforces use of let or const
    // https://eslint.org/docs/rules/no-var
    'no-var': 'error',
    // Disallow case statement fallthrough
    // https://eslint.org/docs/rules/no-fallthrough
    'no-fallthrough': 'error',
    // Enforce parameters with default values to be last
    // https://eslint.org/docs/rules/default-param-last
    'default-param-last': 'error',
    // Encourages use of dot notation whenever possible
    // https://eslint.org/docs/rules/dot-notation
    'dot-notation': ['error', { 'allowKeywords': true }],
    // Require the use of === and !==
    // https://eslint.org/docs/rules/eqeqeq
    'eqeqeq': ['error', 'always'],
    // Require grouped accessor pairs in object literals and classes
    // https://eslint.org/docs/rules/grouped-accessor-pairs
    'grouped-accessor-pairs': 'error',
    // Disallow the use of alert, confirm, and prompt
    // https://eslint.org/docs/rules/no-alert
    'no-alert': 'warn',
    // Disallow lexical declarations in case/default clauses
    // https://eslint.org/docs/rules/no-case-declarations
    'no-case-declarations': 'error',
    // Disallow returning value in constructor
    // https://eslint.org/docs/rules/no-constructor-return
    'no-constructor-return': 'error',
    // Disallow else after a return in an if
    // https://eslint.org/docs/rules/no-else-return
    'no-else-return': ['error', { 'allowElseIf': false}],
    // Disallow use of eval()
    // https://eslint.org/docs/rules/no-eval
    'no-eval': 'error',
    // Disallow use of eval()-like methods
    // https://eslint.org/docs/rules/no-implied-eval
    'no-implied-eval': 'error',
    // Disallow use of `javascript:` urls.
    // https://eslint.org/docs/rules/no-script-url
    'no-script-url': 'error',
    // Disallow adding to native types
    // https://eslint.org/docs/rules/no-extend-native
    'no-extend-native': 'error',
    // Disallow unnecessary function binding
    // https://eslint.org/docs/rules/no-extra-bind
    'no-extra-bind': 'error',
    // Disallow Unnecessary Labels
    // https://eslint.org/docs/rules/no-extra-label
    'no-extra-label': 'error',
    // Disallow the use of leading or trailing decimal points in numeric literals
    // https://eslint.org/docs/rules/no-floating-decimal
    'no-floating-decimal': 'error',
    // Disallow reassignments of native objects or read-only globals
    // https://eslint.org/docs/rules/no-global-assign
    'no-global-assign': 'error',
    // Disallow unnecessary nested blocks
    // https://eslint.org/docs/rules/no-lone-blocks
    'no-lone-blocks': 'error',
    // Disallow creation of functions within loops
    // https://eslint.org/docs/rules/no-loop-func
    'no-loop-func': 'error',
    // Disallow use of new operator for Function object
    // https://eslint.org/docs/rules/no-new-func
    'no-new-func': 'error',
    // Disallows creating new instances of String, Number, and Boolean
    // https://eslint.org/docs/rules/no-new-wrappers
    'no-new-wrappers': 'error',
    // Disallow use of octal escape sequences in string literals
    // https://eslint.org/docs/rules/no-octal-escape
    'no-octal-escape': 'error',
    // Disallow usage of __proto__ property
    // https://eslint.org/docs/rules/no-proto
    'no-proto': 'error',
    // Disallow use of assignment in return statement
    // https://eslint.org/docs/rules/no-return-assign
    'no-return-assign': 'error',
    // Disallow comparisons where both sides are exactly the same
    // https://eslint.org/docs/rules/no-self-compare
    'no-self-compare': 'error',
    // Disallow use of comma operator
    // https://eslint.org/docs/rules/no-sequences
    'no-sequences': 'error',
    // Disallow unused labels
    // https://eslint.org/docs/rules/no-unused-labels
    'no-unused-labels': 'error',
    // Disallow unnecessary string escaping
    // https://eslint.org/docs/rules/no-useless-escape
    'no-useless-escape': 'error',
    // Disallow redundant return; keywords
    // https://eslint.org/docs/rules/no-useless-return
    'no-useless-return': 'error',
    // Require use of the second argument for parseInt()
    // https://eslint.org/docs/rules/radix
    'radix': 'error',
    // Disallow useless computed property keys
    // https://eslint.org/docs/rules/no-useless-computed-key
    'no-useless-computed-key': 'error',
    // Disallow unnecessary constructor
    // https://eslint.org/docs/rules/no-useless-constructor
    'no-useless-constructor': 'error',
    // Verify useless or needed super()
    // https://eslint.org/docs/rules/constructor-super
    'constructor-super': 'error',
    // Disallow renaming import, export, and destructured assignments to the same name
    // https://eslint.org/docs/rules/no-useless-rename
    'no-useless-rename': 'error',
    // Require method and property shorthand syntax for object literals
    // https://eslint.org/docs/rules/object-shorthand
    'object-shorthand': [
      'error',
      'always',
      {
        'ignoreConstructors': false,
        'avoidQuotes': true
      }
    ],
    // Suggest using of const declaration for variables that are never modified after declared
    // https://eslint.org/docs/rules/prefer-const
    'prefer-const': [
      'error',
      {
        'destructuring': 'all',
        'ignoreReadBeforeAssign': true
      }
    ],
    // Use rest parameters instead of arguments
    // https://eslint.org/docs/rules/prefer-rest-params
    'prefer-rest-params': 'error',
    // Suggest using template literals instead of string concatenation
    // https://eslint.org/docs/rules/prefer-template
    'prefer-template': 'warn',
    // Disallow generator functions that do not have yield
    // https://eslint.org/docs/rules/require-yield
    'require-yield': 'error',
    // Require a Symbol description
    // https://eslint.org/docs/rules/symbol-description
    'symbol-description': 'error',
    // Enforces that a return statement is present in property getters
    // https://eslint.org/docs/rules/getter-return
    'getter-return': 'error',
    // Disallow await inside of loops
    // https://eslint.org/docs/rules/no-await-in-loop
    'no-await-in-loop': 'error',
    // Disallow assignment in conditional expressions
    // https://eslint.org/docs/rules/no-cond-assign
    'no-cond-assign': 'error',
    // Disallow use of console
    // https://eslint.org/docs/rules/no-console
    'no-console': [
      'error',
      {
        'allow': [
          'warn',
          'error',
          'info'
        ]
      }
    ],
    // Disallow template literal placeholder syntax in regular strings
    // https://eslint.org/docs/rules/no-template-curly-in-string
    'no-template-curly-in-string': 'error',
    // Disallow duplicate conditions in if-else-if chains
    // https://eslint.org/docs/rules/no-dupe-else-if
    'no-dupe-else-if': 'error',
    // Disallow assigning to imported bindings
    'no-import-assign': 'error',
    // Disallow use of the Array constructor
    // https://eslint.org/docs/rules/no-array-constructor
    'no-array-constructor': 'error',
    // Disallow if as the only statement in an else block
    // https://eslint.org/docs/rules/no-lonely-if
    'no-lonely-if': 'error',
    // Disallow use of chained assignment expressions
    // https://eslint.org/docs/rules/no-multi-assign
    'no-multi-assign': 'error',
    // Disallow use of the Object constructor
    // https://eslint.org/docs/rules/no-new-object
    'no-new-object': 'error',
    // Allow just one var statement per function
    // https://eslint.org/docs/rules/one-var
    'one-var': [
      'error',
      'never'
    ],
    // CODING CONVENTIONS
    // Enforces no braces in arrow function body where they can be omitted
    'arrow-body-style': ['error', 'as-needed'],
    // Disable semicolons
    // https://eslint.org/docs/rules/semi
    'semi': [
      'error',
      'never'
    ],
    // Use single quote
    // https://eslint.org/docs/rules/quotes
    'quotes': [
      'error',
      'single'
    ],
    // Require or disallow padding lines between statements
    // https://eslint.org/docs/rules/padding-line-between-statements
    'padding-line-between-statements': [
      'warn',
      // empty lines after declarations
      {
        'blankLine': 'always',
        'prev': [
          'const',
          'let',
          'var'
        ],
        'next': '*'
      },
      // allow to have none or one blank line between declarations
      {
        'blankLine': 'any',
        'prev': [
          'const',
          'let',
          'var'
        ],
        'next': [
          'const',
          'let',
          'var'
        ]
      },
      // enforce blank lines after multiline declarations
      {
        'blankLine': 'always',
        'prev': [
          'multiline-const',
          'multiline-let',
          'multiline-var'
        ],
        'next': '*'
      },
      // empty lines before returns
      {
        'blankLine': 'always',
        'prev': '*',
        'next': 'return'
      },
      // empty lines between switch cases and breaks
      {
        'blankLine': 'always',
        'prev': [
          'case',
          'break'
        ],
        'next': [
          'case',
          'break',
          'default'
        ]
      },
      // always require blankline after function, class declarations and multiline blocks (if, try-catch, etc)
      {
        'blankLine': 'always',
        'prev': [
          'function',
          'class',
          'multiline-block-like'
        ],
        'next': '*'
      }
    ],
    // Require or disallow a space immediately following the // or /* in a comment
    // https://eslint.org/docs/rules/spaced-comment
    'spaced-comment': [
      'error',
      'always',
      {
        'line': {
          'exceptions': [
            '-',
            '+'
          ],
          'markers': [
            '-',
            '+',
            '?',
            '!'
          ]
        },
        'block': {
          'exceptions': [
            '-',
            '+'
          ],
          'markers': [
            '-',
            '+',
            '?',
            '!'
          ],
          'balanced': true
        }
      }
    ],
    // Disallow the use of Boolean literals in conditional expressions
    // Also, prefer `a || b` over `a ? a : b`
    // https://eslint.org/docs/rules/no-unneeded-ternary
    'no-unneeded-ternary': [
      'error',
      {
        'defaultAssignment': false
      }
    ],
    // Suggest using the spread operator instead of .apply()
    // https://eslint.org/docs/rules/prefer-spread
    'prefer-spread': 'error',
    // Enforces consistent spacing after name in function definitions.
    // https://eslint.org/docs/latest/rules/space-after-function-name
    'space-before-function-paren': ['error', {'anonymous': 'always', 'named': 'never', 'asyncArrow': 'always'}],
    // Enforce consistent spacing inside array brackets
    // https://eslint.org/docs/latest/rules/array-bracket-spacing#rule-details
    'array-bracket-spacing': ['error', 'never'],
    // https://eslint.org/docs/latest/rules/func-call-spacing#rule-details
    // Enforce consistent spacing between on func calls
    'func-call-spacing': ['error', 'never'],
    // https://eslint.org/docs/latest/rules/object-curly-spacing#rule-details
    // Enforce consistent spacing inside braces
    'object-curly-spacing': ['error', 'always', { 'objectsInObjects': true }],
    // https://eslint.org/docs/latest/rules/rest-spread-spacing#rule-details
    // Enforce consistent spacing after the spread operator
    'rest-spread-spacing': ['error', 'never'],
    // https://eslint.org/docs/latest/rules/comma-spacing#rule-details
    // Enforce consistent spacing before and after commas
    'comma-spacing': ['error', { 'before': false, 'after': true }],
    // https://eslint.org/docs/latest/rules/computed-property-spacing#rule-details
    // Enforce consistent spacing inside computed property brackets
    'computed-property-spacing': ['error', 'never'],
    // https://eslint.org/docs/latest/rules/template-curly-spacing#rule-details
    // Disallow or enforce spaces inside of curly braces in template strings
    'template-curly-spacing': ['error', 'never'],
    // https://eslint.org/docs/latest/rules/arrow-spacing#rule-details
    // Enforce consistent spacing before and after the arrow in arrow functions
    'arrow-spacing': ['error', { 'before': true, 'after': true }],
    // https://eslint.org/docs/latest/rules/keyword-spacing
    // Enforce consistent spacing before and after keywords
    'keyword-spacing': ['error', { 'before': true, 'after': true }],
    // https://eslint.org/docs/latest/rules/eol-last#rule-details
    // Require newline at the end of files
    'eol-last': ['error', 'always'],
    // https://eslint.org/docs/latest/rules/indent#tab 
    // Enforce consistent indentation
    'indent': ['error', 2],
    //https://eslint.org/docs/latest/rules/max-len#rule-details
    // Enforce a maximum line length
    'max-len': ['error', 100, { 'ignoreUrls': true, 'ignoreStrings': true, 'ignoreTemplateLiterals': true }],
    // https://eslint.org/docs/latest/rules/comma-dangle
    // Enforce trailing commas
    'comma-dangle': ['error', 'always-multiline'],
  }
}
