1.What is JSX, and why is it used?

JSX (JavaScript XML) is a syntax extension for JavaScript that looks similar to HTML, but it is used within JavaScript code to describe the structure of the user interface. It allows developers to write UI components more declaratively, combining HTML-like syntax with JavaScript. JSX is used because it makes the code easier to read and write, and React can convert it to efficient JavaScript calls behind the scenes.

2.What is the difference between State and Props?

State: State is a local data storage within a component that can change over time. It controls the component's behavior and how it renders. State is mutable and is usually updated using specific methods or hooks like useState.
Props: Props (short for "properties") are read-only data passed from a parent component to a child. Props are immutable in the child component, meaning the child cannot change the values it receives; it can only use them to render or pass them down further.

3.What is the useState hook, and how does it work?

useState is a hook in React that allows functional components to have state. It takes an initial state value as an argument and returns an array with two elements: the current state value and a function to update that state. When the state is updated using this function, the component re-renders with the new state.

4.How can you share state between components in React?
Props: A parent component can pass its state to a child component using props.
Lifting State Up: If multiple child components need access to the same state, you can "lift" the state up to their common parent. The parent then passes the state down as props to each child.
State Management Libraries: For larger applications, you can use libraries like Redux or the Context API to manage and share state globally across components.

5.How is event handling done in React?

Event handling in React is similar to regular JavaScript, but with React's synthetic event system. Instead of using the traditional HTML event attributes (like onclick), React uses camelCase syntax (like onClick, onChange). Event handlers are usually defined as methods or functions, and you can pass arguments to them using anonymous functions or arrow functions. React automatically handles browser differences in events.
