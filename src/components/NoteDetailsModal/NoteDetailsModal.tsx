import { Modal } from '../Modal/Modal';

import styles from './NoteDetailsModal.module.scss';

type TNoteDetailsProps = {
  note: TNote | null;
  selectedNote: TNote | null;
  setSelectedNote: React.Dispatch<React.SetStateAction<TNote | null>>;
};

export const NoteDetailsModal = ({ note, selectedNote, setSelectedNote }: TNoteDetailsProps) => {
  return (
    <Modal opened={selectedNote !== null} onClose={() => setSelectedNote(null)}>
      <div className={styles.noteWrapper}>
        <div>
          <h2 className={styles.noteTitle}>{note?.title}</h2>
          <p>{note?.content}</p>
        </div>

        <div className={styles.dates}>
          <p>Created: {note?.createdAt}</p>
          <p>Last Updated: {note?.updatedAt}</p>
        </div>
      </div>
    </Modal>
  );
};
