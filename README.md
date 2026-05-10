# Example Calculator

A React + TypeScript calculator app.

## Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher)
- npm (comes with Node.js)

## Getting started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000).

## Other commands

| Command | Description |
|---------|-------------|
| `npm test` | Run tests in watch mode |
| `npm run build` | Build for production (output in `build/`) |


## Project structure

The general structure of the project is to split files by purpose as much as possible

-Atoms: should be re-usable components stateless and dumb
-Components: should be descriptive parts that can have both state and logic, prerably if components include other components the state  is kept at the highest parent component
-Utilites such as style, types and actual utility function that can be reused throught the application have their dedicated folders

Each component is split into a file based on the necessity of the file descripted by its name:
-ComponentName: is the component itself that returns the TSX element
-styles: is the file holding the component's styled-components
-types: is the file holding the component's types
-index: is the file export the component