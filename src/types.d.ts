declare module '*.svg' {
  import React = require('react');
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

type TSortOptions = 'title' | 'date created' | 'date modified'

type TNote = {
  id: string;
  title: string;
  content: string;
  buttonsVisible: boolean;
  createdAt: string;
  updatedAt: string;
};

type TNotesState = {
  notes: TNote[];
  searchQuery: string;
  sortBy: TSortOptions;
};
