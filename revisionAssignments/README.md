Step-by-Step Instructions

### 1. Set Up the Project

- Clone this project to your local machine.
- Install the dependencies with `npm install`.

### 2. Create the App Component

- The `App` component will serve as the root component of your application. It should render the `Question` component. The App component should receive the question and options as props. The props are named `question` and `options`. The question prop is a string and the options prop is an array of strings.

### 3. Create the Question Component

- Define a `Question` component in a separate file (`src/components/Question.js`).
- This component should receive `question` and `options` as props and render them.

### 4. Create the Option Component

- Define an `Option` component in a separate file (`src/components/Option.js`).
- The `Option` component should receive an individual option as a string prop and render it within a styled `div`.

### 5. Pass Props and Render Components

- Pass the `question` and `options` props from the `App` component to the `Question` component.
- In the `Question` component, process the `options` array and render each `Option` component.

### Expected Output

Your final DOM structure should look like this:

```
<div class="App">
  <div class="question">
    <h1>What is the capital of Italy?</h1>
    <div class="option">Turin</div>
    <div class="option">Milan</div>
    <div class="option">Rome</div>
  </div>
</div>
```

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
  // Set the react version
  settings: { react: { version: "18.3" } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,
  },
});
```
