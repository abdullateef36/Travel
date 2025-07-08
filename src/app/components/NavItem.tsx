// components/NavItem.tsx
'use client';

import React from 'react';

interface NavItemProps {
  icon: React.ElementType;
  text: string;
  active?: boolean;
  collapsed: boolean;
}

export const NavItem = ({ icon: Icon, text, active, collapsed }: NavItemProps) => (
  <li className={`flex items-center p-3 my-1 rounded-lg cursor-pointer transition-colors ${active ? 'bg-gray-700 text-white' : 'text-gray-400 hover:bg-gray-700/50 hover:text-white'}`}>
    <Icon size={20} />
    {!collapsed && <span className="ml-4 font-medium">{text}</span>}
  </li>
);