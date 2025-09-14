# Naman Balai Instagram Portfolio

This is a visually creative, Instagram-inspired portfolio for Naman Balai. All content is sourced from Naman's resume and presented in a modern, social-media style UI.

## Features
- Instagram-style profile (bio, avatar, links)
- Posts grid for projects/achievements
- Stories/highlights for skills, experience, education
- Responsive and visually engaging
- No backend, no CMS, all static content

## Getting Started

1. Install dependencies:
  ```sh
  npm install
  ```
2. Start the development server:
  ```sh
  npm run dev
  ```
3. Open [http://localhost:5173](http://localhost:5173) in your browser.

---

This project is a sibling to the Netflix-inspired portfolio. Both can be run and maintained independently.

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
