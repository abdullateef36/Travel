// components/Sidebar.tsx
'use client';

import React from 'react';
import { 
  FiChevronLeft, FiBarChart2, FiSliders, 
  FiFileText, FiStar, FiSettings 
} from 'react-icons/fi';
import { FaFire } from 'react-icons/fa';
import { NavItem } from './NavItem';

interface SidebarProps {
  collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Sidebar = ({ collapsed, setCollapsed }: SidebarProps) => {
  return (
    <div className={`bg-[#1C1C24] text-white transition-all duration-300 ease-in-out ${collapsed ? 'w-16 md:w-20' : 'w-48 md:w-64'}`}>
      <div className="flex items-center justify-between p-4 border-b border-gray-700 h-[69px]">
        {!collapsed && (
          <div className="flex items-center">
            <FaFire size={24} className="text-orange-500" />
            <span className="text-xl font-bold ml-2">Petrodata</span>
          </div>
        )}
        <button 
          onClick={() => setCollapsed(!collapsed)} 
          className="p-2 rounded-lg hover:bg-gray-700"
        >
          <FiChevronLeft size={20} className={`transition-transform duration-300 ${collapsed ? 'rotate-180' : ''}`} />
        </button>
      </div>
      <nav className="p-2">
        <ul>
          <NavItem icon={FiBarChart2} text="Dashboard" collapsed={collapsed} />
          <NavItem icon={FiSliders} text="Analysis" active={true} collapsed={collapsed} />
          <NavItem icon={FiFileText} text="News & Report" collapsed={collapsed} />
          <NavItem icon={FiStar} text="Exclusive report" collapsed={collapsed} />
          <NavItem icon={FiBarChart2} text="Watchlist" collapsed={collapsed} />
          <NavItem icon={FiSettings} text="Settings" collapsed={collapsed} />
        </ul>
      </nav>
    </div>
  );
};