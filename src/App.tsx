import React, { useState } from 'react';
import './App.scss';
import InputField from './components/InputField';
import ChipList from './components/ChipList';
import DropdownList from './components/DropdownList';
import data from './data.json';

interface Item {
  name: string;
  email: string;
}

const App: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [chips, setChips] = useState<Item[]>([]);
  const [highlightedChip, setHighlightedChip] = useState<number | null>(null);
  const [showDrop, setShowDrop] = useState<boolean>(false);
  const filteredItems = data.items.filter(
    item => !chips.map(chip => chip.name).includes(item.name) && item.name.toLowerCase().includes(inputValue.toLowerCase())
  );

  const addChip = (item: Item) => {
    setChips(prev => [...prev, item]);
    setInputValue('');
    setShowDrop(false)
  };

  const removeChip = (index: number) => {
    const newChips = [...chips];
    newChips.splice(index, 1);
    setChips(newChips);
    setHighlightedChip(null);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && inputValue === '') {
      e.preventDefault();
      if (highlightedChip !== null) {
        removeChip(highlightedChip);
      } else {
        setHighlightedChip(chips.length - 1);
      }
    }
  };
  return (
    
    <div className="app">
      <h1 style={{color: "rgba(9, 9, 213, 0.822)"}}>Pick Users</h1>
      <ChipList chips={chips} highlightedChip={highlightedChip} removeChip={removeChip} />
      <InputField
        inputValue={inputValue}
        setInputValue={setInputValue}
        setHighlightedChip={setHighlightedChip}
        handleKeyDown={handleKeyDown}
        showDrop = {showDrop}
        setShowDrop = {setShowDrop}
      />
      {
        showDrop?
        <DropdownList filteredItems={filteredItems} addChip={addChip} showDrop = {showDrop}
        setShowDrop = {setShowDrop} />:
        null
      }
    </div>
  );
};

export default App;
