## only-on-client

The `only-on-client` package provides a React component that ensures its children are only rendered on the client side. This is useful for components that rely on browser-specific APIs and should not be rendered during server-side rendering.

It renders its children only when executed in a client environment (e.g., a web browser), and does not render anything when executed in a server environment (e.g., Node.js).

### Installation

You can install via npm:

```bash
npm install only-on-client
```

Or via yarn:

```bash
yarn add only-on-client
```

### Usage

```javascript
import React from "react";
import OnlyOnClient from "only-on-client";

export const App = () => (
  <div>
    <h1>My App</h1>
    <OnlyOnClient>
      <div>This content is rendered only on the client side.</div>
    </OnlyOnClient>
  </div>
);
```

## Props

It takes a single prop named children, which is of type ReactNode. You dont have to pass any prop explicitely.

## Examples

Render a component only on the client side:

```javascript
<OnlyOnClient>
  <div>This content is rendered only on the client side.</div>
</OnlyOnClient>
```

## Development

If you want to contribute to the development of OnlyOnClient, you can clone the GitHub repository:

git clone https://github.com/ajitesh13/only-on-client.git

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Issues

If you encounter any issues or have suggestions for improvements, please open an issue on GitHub.
