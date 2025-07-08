// components/Header.tsx
'use client';

import { FiSearch, FiBell, FiSun, FiMoon } from 'react-icons/fi';

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Header = ({ darkMode, setDarkMode }: HeaderProps) => {
  return (
    <header className="flex items-center justify-between p-4 bg-[#252830] text-white border-b border-gray-700 h-[69px]">
      <div>
        <p className="text-2xl font-bold text-white">Analysis</p>
        <p className="text-sm text-gray-400">Thursday, February 15</p>
      </div>
      <div className="flex items-center space-x-4">
        <button className="p-2 rounded-full hover:bg-gray-700">
          <FiSearch size={20} />
        </button>
        <button className="px-4 py-2 text-sm font-semibold bg-gray-700 rounded-lg hover:bg-gray-600 hidden sm:block">
          Set alert
        </button>
        <button className="p-2 rounded-full hover:bg-gray-700 relative">
          <FiBell size={20} />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        <div className="flex items-center space-x-2">
          <button 
            onClick={() => setDarkMode(!darkMode)} 
            className="p-2 rounded-full hover:bg-gray-700"
          >
            {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>
        </div>
      </div>
    </header>
  );
};