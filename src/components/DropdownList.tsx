import React from 'react';

interface Props {
  filteredItems: Item[];
  addChip: (item: Item) => void;
  showDrop: boolean;
  setShowDrop: React.Dispatch<React.SetStateAction<boolean>>;
}

interface Item {
  name: string;
  email: string;
}

const DropdownList: React.FC<Props> = ({ filteredItems, addChip, showDrop, setShowDrop}) => {
  return (
    <div className='dropdown'>
      {filteredItems.map(item => (
        <div className='dropselect' style={{width: "auto"}} key={item.name} onClick={() => addChip(item)}>
          {item.name} ({item.email})
        </div>
      ))}
    </div>
  );
};

export default DropdownList;
