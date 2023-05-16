import classNames from 'classnames';
import { useEffect, useRef, useState } from 'react';

import { ReactComponent as ChevronDown } from '../../assets/svgs/ChevronDown.svg';

import styles from './Dropdown.module.scss';
import { firstLetterToUppercase } from '../../helpers/general';

interface DropdownProps {
  options: string[];
  selectedOption: string;
  onSelect: (option: string) => void;
  placeholder: string;
  label?: string;
}

export const Dropdown: React.FC<DropdownProps> = ({
  options = ['1', '2', '3'],
  selectedOption,
  placeholder,
  onSelect,
  label,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick, true);
    return () => {
      document.removeEventListener('click', handleOutsideClick, true);
    };
  }, []);

  return (
    <div>
      {label && <p className={styles.label}>{label}</p>}
      <div className={styles.dropdown} ref={dropdownRef}>
        <button
          type="button"
          className={styles.dropdownButton}
          onClick={toggleDropdown}
        >
          <span className={styles.dropdownText}>
            {selectedOption
              ? firstLetterToUppercase(selectedOption)
              : placeholder}
          </span>

          <div
            className={classNames(styles.dropdownIcon, {
              [styles.rotateIcon]: isOpen,
            })}
          >
            <ChevronDown />
          </div>
        </button>

        {isOpen && (
          <div className={styles.dropdownList}>
            <button
              type="button"
              className={classNames(
                styles.dropdownListItem,
                styles.placeholderItem
              )}
              onClick={() => {
                onSelect('');
                setIsOpen(false);
              }}
            >
              {placeholder}
            </button>

            {options.map((option) => (
              <button
                type="button"
                key={option}
                className={styles.dropdownListItem}
                onClick={() => {
                  onSelect(option.toLowerCase());
                  setIsOpen(false);
                }}
              >
                {firstLetterToUppercase(option)}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
