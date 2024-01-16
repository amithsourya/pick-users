import React from 'react';
import DropdownList from './DropdownList';
interface Props {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  setHighlightedChip: React.Dispatch<React.SetStateAction<number | null>>;
  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  showDrop: boolean;
  setShowDrop: React.Dispatch<React.SetStateAction<boolean>>;
}

const InputField: React.FC<Props> = ({ inputValue, setInputValue, setHighlightedChip, handleKeyDown, showDrop, setShowDrop }) => {
  return (
    <input
      value={inputValue}
      onChange={e => setInputValue(e.target.value)}
      onFocus={() => setHighlightedChip(null)}
      onKeyDown={handleKeyDown}
      onClick={() => setShowDrop(true)}
    />
  );
};

export default InputField;
