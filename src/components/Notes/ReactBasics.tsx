import React from 'react';
import styles from './Notes.module.css';

const ReactBasics: React.FC = () => {
    return (
        <div className={styles.reactBasics}>
        <h2>⚛️ React Basics</h2>

        <section className={styles.noteSection}>
            <h3>What is React?</h3>
            <p>
            React is a JavaScript library developed by Facebook for building user interfaces. It allows developers to create large web applications that can update and render efficiently in response to data changes.
            </p>
        </section>

        <section className={styles.noteSection}>
            <h3>JSX - JavaScript XML</h3>
            <p>
            JSX is a syntax extension for JavaScript that looks similar to HTML. It’s used with React to describe what the UI should look like.
            </p>
            <pre>
            <code>
{`const element = <h1>Hello, world!</h1>;`}
            </code>
            </pre>
            <p>Behind the scenes, this is converted to:</p>
            <pre>
            <code>
{`const element = React.createElement('h1', null, 'Hello, world!');`}
            </code>
            </pre>
        </section>

        <section className={styles.noteSection}>
            <h3>Components</h3>
            <p>
            Components are the building blocks of any React app. They can be functional or class-based (but functional with hooks is preferred today).
            </p>
            <h4>Example: Functional Component</h4>
            <pre>
            <code>
{`function Welcome(props: { name: string }) {
    return <h1>Hello, {props.name}</h1>;
}`}
            </code>
            </pre>
            <p>To use it:</p>
            <pre>
            <code>{`<Welcome name="Jess" />`}</code>
            </pre>
        </section>

        <section className={styles.noteSection}>
            <h3>Props & State</h3>
            <p>
            <strong>Props</strong> are read-only inputs to components. <br />
            <strong>State</strong> is managed within a component and allows it to track dynamic data.
            </p>
            <pre>
            <code>
{`const [count, setCount] = useState(0);

<button onClick={() => setCount(count + 1)}>
    Clicked {count} times
</button>`}
            </code>
            </pre>
        </section>

        <section className={styles.noteSection}>
            <h3>Component Lifecycle (With Hooks)</h3>
            <p>
            Hooks like <code>useEffect</code> let you run side effects in function components.
            </p>
            <pre>
            <code>
{`useEffect(() => {
    console.log('Component mounted');
    return () => {
        console.log('Component unmounted');
    };
}, []);`}
            </code>
            </pre>
        </section>

        <section className={styles.noteSection}>
            <h3>Visual Diagram: React Component Flow</h3>
            <img
            className={styles.diagram}
            src="/images/react-dataflow.png"
            alt="React Component Flow Diagram"
            />
            <p className={styles.caption}>Basic lifecycle and data flow within React components</p>
        </section>
        </div>
    );
};

export default ReactBasics;
