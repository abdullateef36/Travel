'use client';

import React, { useState } from 'react';
import { 
  LineChart, Line, XAxis, YAxis, Tooltip, 
  ResponsiveContainer, AreaChart, Area 
} from 'recharts';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Modal } from './components/Modal';
import {  
  FiAirplay,  
  FiPackage,              
  FiDroplet,   
  FiTruck,     
  FiZap,       
  FiDatabase,  
  FiSearch,     
  FiDownload,   
  FiCalendar,
  FiCopy
} from 'react-icons/fi';

// Type Definitions
interface PriceItemProps {
  name: string;
  fullName: string;
  price: string;
  change: string;
  percentage: string;
  status: 'up' | 'down' | 'neutral';
}

interface ReportDataItem {
  name: string;
  fullName: string;
  price: string;
  change: string;
  percentage: string;
  status: 'up' | 'down';
}

interface ReportRowProps {
  item: ReportDataItem;
  onClick?: () => void;
}

interface CustomTooltipProps {
  active?: boolean;
  payload?: { value: number }[];
  label?: string;
}

// Mock Data
const retailPrices: PriceItemProps[] = [
  { name: 'PMS', fullName: 'Premium Motor Spirit', price: '₦714.26', change: '+0.37', percentage: '+0.09%', status: 'up' },
  { name: 'AGO', fullName: 'Automotive Gas Oil', price: '₦1249.06', change: '-9.01', percentage: '-0.34%', status: 'down' },
  { name: 'ICE', fullName: 'ICE Brent Crude', price: '₦0.00', change: '0.00', percentage: '+0.00%', status: 'neutral' },
  { name: 'DPK', fullName: 'Dual Purpose Kerosene', price: '₦1088.92', change: '-50.90', percentage: '-0.92%', status: 'down' },
  { name: 'LPG', fullName: 'Liquified Petroleum Gas', price: '₦1097.68', change: '-36.10', percentage: '-0.87%', status: 'down' },
];

const reportData: ReportDataItem[] = [
  { name: 'PMS', fullName: 'Premium Motor Spirit', price: '₦714.26', change: '+0.37', percentage: '+0.09%', status: 'up' },
  { name: 'AGO', fullName: 'Automotive Gas Oil', price: '₦1249.06', change: '-9.01', percentage: '-0.34%', status: 'down' },
  { name: 'ICE', fullName: 'ICE Brent Crude', price: '₦76.00', change: '0.68', percentage: '+0.90%', status: 'up' },
  { name: 'DPK', fullName: 'Dual Purpose Kerosene', price: '₦1088.92', change: '-50.90', percentage: '-0.92%', status: 'down' },
];

const chartData = [
  { name: '1D', value: 300 }, { name: '1W', value: 450 }, { name: '1M', value: 600 }, { name: '3M', value: 550 },
  { name: '6M', value: 700 }, { name: 'YTD', value: 650 }, { name: 'All', value: 800 },
];

// Helper Components
const PriceItem = ({ name, fullName, price, change, percentage, status }: PriceItemProps) => {
  const colorClass = status === 'up' ? 'text-green-400' : status === 'down' ? 'text-red-400' : 'text-gray-400';
  return (
    <div className="flex items-center justify-between py-3 border-b border-gray-700 last:border-b-0">
      <div className="flex items-center">
        <span className="font-bold text-sm text-white bg-gray-600/50 rounded-md px-2 py-1">{name}</span>
        <span className="ml-3 text-gray-300 text-sm">{fullName}</span>
      </div>
      <div className="flex items-center">
        <span className="text-white font-semibold text-sm">{price}</span>
        <div className={`ml-6 text-sm text-right ${colorClass}`}>
          <div>{change}</div>
          <div className="text-xs">{percentage}</div>
        </div>
      </div>
    </div>
  );
};

const ReportRow = ({ item }: ReportRowProps) => {
  const colorClass = item.status === 'up' ? 'text-green-400' : 'text-red-400';
  const chartColor = item.status === 'up' ? '#34D399' : '#F87171';
  
  return (
    <div className="grid grid-cols-5 items-center py-3 border-b border-gray-700 text-sm text-gray-300 min-w-[600px]">
      <div className="flex items-center col-span-1">
        <span className="font-bold text-sm text-white bg-gray-600/50 rounded-md px-2 py-1">{item.name}</span>
        <span className="ml-3 truncate">{item.fullName}</span>
      </div>
      <div className="text-white font-semibold">{item.price}</div>
      <div className={`font-semibold ${colorClass}`}>
        <span>{item.change}</span>
        <span className="ml-2 text-xs p-1 rounded-md bg-opacity-20 bg-gray-500">{item.percentage}</span>
      </div>
      <div className="h-8 w-24">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData.slice(0, 7)} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
            <Line type="monotone" dataKey="value" stroke={chartColor} strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="flex justify-end">
        <button className="p-2 rounded-md hover:bg-gray-600">
          <FiDownload size={16} />
        </button>
      </div>
    </div>
  );
};

const AnalysisTabs = () => {
  const tabs = [
    { name: 'Retail price analysis', icon: FiDroplet },
    { name: 'Flights analysis', icon: FiAirplay },
    { name: 'Depots analysis', icon: FiPackage },
    { name: 'Power analysis', icon: FiZap },
    { name: 'Cargo analysis', icon: FiTruck },
    { name: 'Raw data', icon: FiDatabase }
  ];
  
  const [activeTab, setActiveTab] = useState(tabs[0].name);

  return (
    <div className="px-4 md:px-6 pt-4 border-b border-gray-700">
      <div className="flex items-center space-x-4 md:space-x-8 overflow-x-auto pb-0">
        {tabs.map(tab => (
          <button 
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            className={`flex items-center pb-3 text-sm font-medium transition-colors whitespace-nowrap ${activeTab === tab.name ? 'text-white border-b-2 border-green-400' : 'text-gray-400 hover:text-white'}`}
          >
            <tab.icon className="mr-2" size={16} />
            {tab.name}
          </button>
        ))}
      </div>
    </div>
  );
};

const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-gray-800 text-white p-2 rounded-md border border-gray-600 shadow-lg">
        <p className="font-bold">{`Value: ₦${payload[0].value}`}</p>
        <p className="text-sm text-gray-400">{`Period: ${label}`}</p>
      </div>
    );
  }
  return null;
};

export default function App() {
  const [collapsed, setCollapsed] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('');

  return (
    <div className={`flex h-screen ${darkMode ? 'dark' : ''}`}>
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      <main className="flex-1 flex flex-col bg-[#252830] overflow-y-auto">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <AnalysisTabs />
        <div className="p-4 md:p-6 flex-1 space-y-6">
          {/* Top Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
            <div className="bg-[#1C1C24] p-4 md:p-6 rounded-xl">
              <p className="text-white font-semibold mb-4">Current product retail prices</p>
              <div>
                {retailPrices.map(item => <PriceItem key={item.name} {...item} />)}
              </div>
            </div>
            <div className="bg-[#1C1C24] p-4 md:p-6 rounded-xl">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-white font-semibold">Retail price analysis (NGN)</p>
                  <div className="flex flex-wrap gap-2 mt-2 text-sm text-gray-400">
                    {['PMS', 'AGO', 'ICE', 'DPK', 'LPG'].map(p => (
                      <button key={p} className={`px-2 py-1 rounded ${p === 'PMS' ? 'text-green-400 bg-green-400/10' : 'hover:bg-gray-700'}`}>{p}</button>
                    ))}
                  </div>
                </div>
                <button 
                  className="text-gray-400 hover:text-white"
                  onClick={() => {
                    setSelectedProduct('Retail Prices');
                    setIsDownloadModalOpen(true);
                  }}
                >
                  <FiDownload size={16}/>
                </button>
              </div>
              <div className="h-48 mt-4">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#34D399" stopOpacity={0.4}/>
                        <stop offset="95%" stopColor="#34D399" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="name" stroke="#6B7280" fontSize={12} tickLine={false} axisLine={false}/>
                    <YAxis stroke="#6B7280" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `₦${value}`}/>
                    <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#6B7280', strokeDasharray: '3 3' }}/>
                    <Area type="monotone" dataKey="value" stroke="#34D399" strokeWidth={2} fillOpacity={1} fill="url(#colorUv)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              <div className="flex flex-col md:flex-row justify-between items-center mt-4 text-xs text-gray-400 gap-2">
                <div className="flex flex-wrap gap-2">
                  {['1D', '1W', '1M', '3M', '6M', 'YTD', 'All'].map(t => (
                    <button key={t} className={`px-2 py-1 rounded ${t === 'All' ? 'bg-gray-700 text-white' : 'hover:bg-gray-700'}`}>{t}</button>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  <select className="bg-gray-700 rounded p-1">
                    <option>Region</option>
                  </select>
                  <select className="bg-gray-700 rounded p-1">
                    <option>State</option>
                  </select>
                  <select className="bg-gray-700 rounded p-1">
                    <option>Price</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Report Table */}
          <div className="bg-[#1C1C24] p-4 md:p-6 rounded-xl">
            <div className="mb-4">
              <div className="relative mb-4 w-full">
                <FiSearch size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input type="text" placeholder="Search..." className="bg-[#252830] border border-gray-700 rounded-lg pl-10 pr-4 py-2 text-white focus:outline-none focus:ring-1 focus:ring-green-400" />
              </div>
              <div className="flex items-center">
                <p className="text-white font-semibold">Report - Week 31, 2024</p>
              </div>
            </div>
            <div className="overflow-x-auto">
              <div className="grid grid-cols-5 py-2 text-xs text-gray-400 font-bold border-b border-gray-700 min-w-[600px]">
                <div>Product retail price</div>
                <div>Current price</div>
                <div>Performance</div>
                <div>7-day chart</div>
                <div className="text-right">Required action</div>
              </div>
              <div className="min-w-[600px]">
                {reportData.map((item, index) => (
                  <ReportRow 
                    key={index} 
                    item={item} 
                    onClick={() => {
                      setSelectedProduct(item.name);
                      setIsDownloadModalOpen(true);
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Download Modal */}
      <Modal 
  isOpen={isDownloadModalOpen} 
  onClose={() => setIsDownloadModalOpen(false)}
  title={`${selectedProduct} Detailed Summary`}
>
  <div className="space-y-6">
    <div className="bg-[#252830] p-4 rounded-lg">
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="modalColor" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#34D399" stopOpacity={0.4}/>
                <stop offset="95%" stopColor="#34D399" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <XAxis dataKey="name" stroke="#6B7280" fontSize={12} tickLine={false} axisLine={false}/>
            <YAxis stroke="#6B7280" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `₦${value}`}/>
            <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#6B7280', strokeDasharray: '3 3' }}/>
            <Area type="monotone" dataKey="value" stroke="#34D399" strokeWidth={2} fillOpacity={1} fill="url(#modalColor)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>

    <div className="flex flex-wrap gap-2">
      {['10', '1W', '1M', '3M', '6M', 'YTD', 'All'].map(period => (
        <button 
          key={period}
          className={`px-3 py-1 rounded-md text-sm ${period === 'All' ? 'bg-green-500 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
        >
          {period}
        </button>
      ))}
    </div>

    <div className="flex flex-wrap gap-4">
      <select className="bg-gray-700 rounded-md px-3 py-2 text-sm text-gray-300">
        <option>Region</option>
      </select>
      <select className="bg-gray-700 rounded-md px-3 py-2 text-sm text-gray-300">
        <option>State</option>
      </select>
      <select className="bg-gray-700 rounded-md px-3 py-2 text-sm text-gray-300">
        <option>Price</option>
      </select>
    </div>

    <div className="flex justify-between items-center pt-4 border-t border-gray-700">
      <div className="flex items-center space-x-2">
        <FiCalendar className="text-gray-400" />
        <span className="text-sm text-gray-300">Last updated: Feb 15, 2024</span>
      </div>
      <div className="flex space-x-3">
        <button className="flex items-center px-4 py-2 bg-gray-700 rounded-lg text-sm text-gray-300 hover:bg-gray-600">
          <FiCopy className="mr-2" />
          Copy
        </button>
        <button className="flex items-center px-4 py-2 bg-green-500 rounded-lg text-sm text-white hover:bg-green-600">
          <FiDownload className="mr-2" />
          Download
        </button>
      </div>
    </div>
  </div>
</Modal>
    </div>
  );
}