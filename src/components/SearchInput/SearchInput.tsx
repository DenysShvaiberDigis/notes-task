import { FC } from 'react';

import styles from './SearchInput.module.scss';

import { ReactComponent as SearchIcon } from '../../assets/svgs/SearchIcon.svg'; // Replace with the path to your custom SVG icon

type SearchInputProps = {
  value: string;
  onChange: (value: string) => void;
};

export const SearchInput: FC<SearchInputProps> = ({ value, onChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className={styles.searchInput}>
      <input
        type="text"
        className={styles.input}
        value={value}
        onChange={handleChange}
        placeholder="Search..."
      />

      <SearchIcon className={styles.searchIcon} />
    </div>
  );
};
