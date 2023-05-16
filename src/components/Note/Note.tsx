import styles from './Note.module.scss';

type TNoteProps = {
  note: TNote;
  handleMouseEnter: (note: TNote) => void;
  handleMouseLeave: (note: TNote) => void;
  handleSelectEditNote: (note: TNote) => void;
  handleDeleteNote: (id: string) => void;
  setSelectedNote: React.Dispatch<React.SetStateAction<TNote | null>>;
};

export const Note = ({
  note,
  handleMouseEnter,
  handleMouseLeave,
  handleSelectEditNote,
  handleDeleteNote,
  setSelectedNote,
}: TNoteProps) => {
  return (
    <div
      key={note.id}
      className={styles.noteCard}
      onMouseEnter={() => handleMouseEnter(note)}
      onMouseLeave={() => handleMouseLeave(note)}
    >
      {note.buttonsVisible && (
        <div className={styles.noteButtons}>
          <button
            className={styles.editButton}
            onClick={() => handleSelectEditNote(note)}
          >
            Edit
          </button>
          <button
            className={styles.deleteButton}
            onClick={() => handleDeleteNote(note.id)}
          >
            Delete
          </button>
        </div>
      )}

      <div className={styles.noteContent} onClick={() => setSelectedNote(note)}>
        <h2 className={styles.noteTitle}>{note.title}</h2>
        <p className={styles.noteText}>{note.content}</p>
        <p className={styles.date}>Created: {note.createdAt}</p>
        <p className={styles.date}>Last Updated: {note.updatedAt}</p>
        <p></p>
      </div>
    </div>
  );
};
