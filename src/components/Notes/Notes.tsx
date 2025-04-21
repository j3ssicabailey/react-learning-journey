import React, { useState } from 'react';
import styles from './Notes.module.css';
import ReactBasics from './ReactBasics';
import ReactComponents from './ReactComponents'; 

const Notes: React.FC = () => {
    const [activeNote, setActiveNote] = useState<string | null>(null);

    const notesList = [
        { id: 'react-basics', title: 'React Basics', emoji: '⚛️' },
        { id: 'components', title: 'React Components', emoji: '🧱' }, // NEW
        { id: 'typescript', title: 'TypeScript', emoji: '🔷' },
        { id: 'hooks', title: 'Hooks', emoji: '📚' },
    ];

    return (
        <div className={styles.notes}>
            {!activeNote && (
                <>
                    <h2 className={styles.notesTitle}>📝 My Notes</h2>
                    <div className={styles.cardGrid}>
                        {notesList.map((note) => (
                            <div
                                key={note.id}
                                className={styles.noteCard}
                                onClick={() => setActiveNote(note.id)}
                            >
                                <div className={styles.cardIcon}>{note.emoji}</div>
                                <h3>{note.title}</h3>
                            </div>
                        ))}
                    </div>
                </>
            )}

            {activeNote === 'react-basics' && (
                <>
                    <button className={styles.backBtn} onClick={() => setActiveNote(null)}>← Back</button>
                    <ReactBasics />
                </>
            )}

            {activeNote === 'components' && (
                <>
                    <button className={styles.backBtn} onClick={() => setActiveNote(null)}>← Back</button>
                    <ReactComponents />
                </>
            )}
        </div>
    );
};

export default Notes;
