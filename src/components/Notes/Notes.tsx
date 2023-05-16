import { useState } from 'react';

import { Note } from '../Note/Note';
import { Dropdown } from '../Dropdown/Dropdown';
import { SearchInput } from '../SearchInput/SearchInput';
import { NoteFormModal } from '../NoteFormModal/NoteFormModal';
import { NoteDetailsModal } from '../NoteDetailsModal/NoteDetailsModal';
import { SORT_OPTIONS } from '../../helpers/constants';
import { getCurrentDateAndTime } from '../../helpers/dates';
import { useAppDispatch, useAppSelector } from '../../hooks';
import {
  addNote,
  removeNote,
  updateNote,
  selectNotes,
  selectSearchQuery,
  selectSortBy,
  setSearchQuery,
  setSortBy,
} from '../../store/slices/notes.slice';
import { ReactComponent as PlusIcon } from '../../assets/svgs/PlusIcon.svg';

import styles from './Notes.module.scss';

export const Notes = () => {
  const dispatch = useAppDispatch();
  const notes = useAppSelector(selectNotes);
  const searchQuery = useAppSelector(selectSearchQuery);
  const sortBy = useAppSelector(selectSortBy);

  const [noteTitle, setNoteTitle] = useState<string>('');
  const [noteContent, setNoteContent] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedNote, setSelectedNote] = useState<TNote | null>(null);
  const [selectedEditNote, setSelectedEditNote] = useState<TNote | null>(null);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedEditNote(null);
    setNoteTitle('');
    setNoteContent('');
  };

  const handleMouseEnter = (note: TNote) => {
    dispatch(updateNote({ ...note, buttonsVisible: true }));
  };

  const handleMouseLeave = (note: TNote) => {
    dispatch(updateNote({ ...note, buttonsVisible: false }));
  };

  const handleAddNote = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!noteTitle || !noteContent) return;

    dispatch(
      addNote({
        id: crypto.randomUUID(),
        buttonsVisible: false,
        title: noteTitle,
        content: noteContent,
        createdAt: getCurrentDateAndTime(),
        updatedAt: getCurrentDateAndTime(),
      })
    );

    setNoteTitle('');
    setNoteContent('');
    setIsModalOpen(false);
  };

  const handleDeleteNote = (id: string) => {
    dispatch(removeNote(id));
  };

  const handleSelectEditNote = (note: TNote) => {
    setSelectedEditNote(note);
    setNoteTitle(note.title);
    setNoteContent(note.content);
    setIsModalOpen(true);
  };

  const handleEditNote = () => {
    if (selectedEditNote) {
      dispatch(
        updateNote({
          ...selectedEditNote,
          title: noteTitle,
          content: noteContent,
          updatedAt: getCurrentDateAndTime(),
        })
      );

      setNoteTitle('');
      setNoteContent('');
      setSelectedEditNote(null);
      setIsModalOpen(false);
    }
  };

  const handleSearchChange = (value: string) => {
    dispatch(setSearchQuery(value));
  };

  const handleSortByChange = (value: string) => {
    dispatch(setSortBy(value as TSortOptions));
  };

  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(searchQuery?.toLowerCase()) ||
      note.content.toLowerCase().includes(searchQuery?.toLowerCase())
  );

  const sortedNotes = filteredNotes.sort((a: TNote, b: TNote) => {
    switch (sortBy) {
      case 'title':
        return a.title.localeCompare(b.title);
      case 'date created':
        return (
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      case 'date modified':
        return (
          new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
        );
    }
  });

  return (
    <div className={styles.appContainer}>
      <h1 className={styles.appHeading}>Notes App</h1>

      <div className={styles.searchInput}>
        <SearchInput value={searchQuery} onChange={handleSearchChange} />
      </div>

      <div className={styles.sortDropdown}>
        <Dropdown
          label="Sort by"
          placeholder="Select option"
          options={SORT_OPTIONS}
          selectedOption={sortBy}
          onSelect={handleSortByChange}
        />
      </div>

      <div className={styles.notesGrid}>
        {sortedNotes?.length > 0 &&
          sortedNotes.map((note) => (
            <Note
              note={note}
              setSelectedNote={setSelectedNote}
              handleSelectEditNote={handleSelectEditNote}
              handleDeleteNote={handleDeleteNote}
              handleMouseEnter={handleMouseEnter}
              handleMouseLeave={handleMouseLeave}
            />
          ))}
      </div>

      <button onClick={handleOpenModal} className={styles.addBtn}>
        <PlusIcon />
      </button>

      <NoteFormModal
        isModalOpen={isModalOpen}
        handleCloseModal={handleCloseModal}
        handleAddNote={handleAddNote}
        handleEditNote={handleEditNote}
        noteTitle={noteTitle}
        noteContent={noteContent}
        setNoteTitle={setNoteTitle}
        setNoteContent={setNoteContent}
        selectedEditNote={selectedEditNote}
      />

      <NoteDetailsModal
        note={selectedNote}
        selectedNote={selectedNote}
        setSelectedNote={setSelectedNote}
      />
    </div>
  );
};
