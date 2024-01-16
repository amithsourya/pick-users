import React from 'react';

interface Props {
  chips: Item[];
  highlightedChip: number | null;
  removeChip: (index: number) => void;
}

interface Item {
  name: string;
  email: string;
}

const ChipList: React.FC<Props> = ({ chips, highlightedChip, removeChip }) => {
  return (
    <div className="chips">
      {chips.map((chip, index) => (
        <span key={index} className={`chip ${highlightedChip === index ? 'highlighted' : ''}`}>
          {chip.name}
          <button onClick={() => removeChip(index)}>X</button>
        </span>
      ))}
    </div>
  );
};

export default ChipList;
