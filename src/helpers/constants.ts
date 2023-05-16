const ANIMATION_TIME = 300;

const INITIAL_NOTES = [
  {
    id: '1',
    title: 'Note 1',
    content: 'This is the content of Note 1',
    buttonsVisible: false,
    createdAt: '2023-02-12 12:25',
    updatedAt: '2023-02-14 13:25',
  },
  {
    id: '2',
    title: 'Note 2',
    content: 'This is the content of Note 2',
    buttonsVisible: false,
    createdAt: '2023-03-15 13:25',
    updatedAt: '2023-03-15 13:25',
  },
  {
    id: '3',
    title: 'Note 3',
    content: 'This is the content of Note 3',
    buttonsVisible: false,
    createdAt: '2023-04-15 13:25',
    updatedAt: '2023-05-15 13:25',
  },
  {
    id: '4',
    title: 'Note 4',
    content: 'This is the content of Note 4',
    buttonsVisible: false,
    createdAt: '2023-01-15 13:25',
    updatedAt: '2023-04-15 13:25',
  },
  {
    id: '5',
    title: 'Note 5',
    content: 'This is the content of Note 5',
    buttonsVisible: false,
    createdAt: '2023-03-15 13:25',
    updatedAt: '2023-03-15 13:25',
  },
  {
    id: '6',
    title: 'Note 6',
    content: 'This is the content of Note 6',
    buttonsVisible: false,
    createdAt: '2023-05-15 13:25',
    updatedAt: '2023-05-15 13:25',
  },
];

const SORT_OPTIONS: TSortOptions[] = ['title', 'date created', 'date modified'];

export { ANIMATION_TIME, INITIAL_NOTES, SORT_OPTIONS };
