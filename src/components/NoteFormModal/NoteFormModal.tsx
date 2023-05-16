import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import { Modal } from '../Modal/Modal';

import styles from './NoteFormModal.module.scss';

type TNoteFormModalProps = {
  isModalOpen: boolean;
  selectedEditNote: TNote | null;
  noteTitle: string;
  noteContent: string;
  handleCloseModal: () => void;
  handleEditNote: () => void;
  setNoteTitle: React.Dispatch<React.SetStateAction<string>>;
  setNoteContent: React.Dispatch<React.SetStateAction<string>>;
  handleAddNote: (e: React.FormEvent<HTMLFormElement>) => void;
};

export const NoteFormModal = ({
  isModalOpen,
  noteTitle,
  noteContent,
  handleCloseModal,
  selectedEditNote,
  handleEditNote,
  handleAddNote,
  setNoteTitle,
  setNoteContent,
}: TNoteFormModalProps) => {
  return (
    <Modal opened={isModalOpen} onClose={handleCloseModal}>
      <h2 className={styles.addNoteTitle}>
        {selectedEditNote ? 'Edit' : 'Add new'} note
      </h2>

      <form onSubmit={selectedEditNote ? handleEditNote : handleAddNote}>
        <Input
          label="Title"
          value={noteTitle}
          onChange={(e) => setNoteTitle(e.target.value)}
        />

        <Input
          label="Content"
          value={noteContent}
          onChange={(e) => setNoteContent(e.target.value)}
        />

        <Button>{selectedEditNote ? 'Update' : 'Create'}</Button>
      </form>
    </Modal>
  );
};
