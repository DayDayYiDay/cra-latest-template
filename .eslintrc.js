module.exports = {
    env: {
        "browser": true,
        "es6": true,
        "node": true
    },
    extends: [
        "plugin:react/recommended",
        "airbnb",
        'plugin:prettier/recommended',
        'prettier',
        'prettier/react',
    ],
    globals: {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 11,
        "sourceType": "module"
    },
    plugins: [
        "react",
        "@typescript-eslint",
        // "prettier"
    ],
    rules: {
      'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx', '.ts', '.tsx'] }],
      "import/extensions": [
        "error",
        "ignorePackages",
        {
          "js": "never",
          "jsx": "never",
          "ts": "never",
          "tsx": "never"
        }
      ]
    },
    settings: {
      "import/resolver": {
        "node": {
          "extensions": [".js", ".jsx", ".ts", ".tsx"]
        }
      }
    },
};
