import React from 'react';
import styles from './Notes.module.css';

const ReactComponents: React.FC = () => {
    return (
        <div className={styles.reactBasics}>
            <h2>🧱 Components in React</h2>

            <section className={styles.noteSection}>
                <h3>What are Components?</h3>
                <p>Components are independent, reusable pieces of UI in React. You build apps by combining components.</p>
            </section>

            <section className={styles.noteSection}>
                <h3>Functional Components</h3>
                <p>The most common type of component today, written as plain functions using hooks for state and side effects.</p>
                <pre>
                    <code>
{`const Button = ({ label }: { label: string }) => {
    return <button>{label}</button>;
};`}
                    </code>
                </pre>
            </section>

            <section className={styles.noteSection}>
                <h3>Class Components (legacy)</h3>
                <p>Still used in older codebases. Use lifecycle methods like <code>componentDidMount</code>.</p>
                <pre>
                    <code>
{`class Hello extends React.Component {
    render() {
        return <h1>Hello World</h1>;
    }
}`}
                    </code>
                </pre>
            </section>

            <section className={styles.noteSection}>
                <h3>Props Recap</h3>
                <p>Props are passed into components like arguments to functions.</p>
                <pre>
                    <code>{`<Button label="Click me" />`}</code>
                </pre>
            </section>
        </div>
    );
};

export default ReactComponents;
