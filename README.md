# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
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

You can also install [eslint-plugin-react-x](https://npmx.dev/package/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://npmx.dev/package/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
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
Project Name: Dev Stack

Description: It is a website for a person to show which technologies he is professional in or which development technologies he is using in their daily life.

I use React, Tailwind, JS, TS, etc.


JSX stands for JavaScript XML. It is a syntax extension for JavaScript that allows you to write HTML-like code directly inside your JavaScript files.
While JSX is not strictly required by React, it makes writing components much easier and more visual.

Both props and state are plain JavaScript objects used to hold data that influences the UI, but they serve different purposes.

The useState hook allows functional components to create and manage local state. It returns an array with two elements: the current state value and a function to update it. Whenever the update function is called, React re-renders the component to display the new data.

The useEffect hook lets you perform side effects in functional components. Side effects include tasks like fetching data, setting up event listeners, or manually changing the DOM. It runs after the component renders on the screen.
When the app loads, you need to fetch the JSON file exactly once. By putting the fetch() or axios request inside useEffect and passing an empty dependency array [], React ensures the data is loaded immediately after the component mounts without causing an infinite re-rendering loop.

React requires a unique key prop to identify which items in a list have changed, been added, or been removed.

Conditional rendering means rendering different components or UI elements based on specific conditions or criteria. It works exactly like conditions (if-else or ternary operators) in standard JavaScript.

Parent to Child: Data is passed downwards by adding custom attributes (called Props) to the child component inside the parent component.Parent: <ChildComponent username="John" />Child: Accesses it via props.username.Child to Parent: A child cannot pass data straight up to a parent. Instead, the parent must pass a callback function down to the child as a prop. The child component then triggers this function (usually via an event like a button click) and passes the data back as an argument.Parent: <ChildComponent onDataReceived={handleData} />Child: <button onClick={() => props.onDataReceived("Hello Parent!")}>Click Me</button>
