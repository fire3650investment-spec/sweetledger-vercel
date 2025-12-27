// src/components/add-expense/SmartTagBar.jsx
import React from 'react';
import { Tag } from 'lucide-react';

export default function SmartTagBar({ tags, onSelect }) {
  if (!tags || tags.length === 0) return null;

  return (
    <div className="flex gap-2 overflow-x-auto no-scrollbar mt-3 pb-1">
        {tags.map((n, idx) => (
            <button 
                key={idx} 
                onClick={() => onSelect(n)} 
                className="
                    flex items-center gap-1 px-3 py-1.5 bg-gray-50 text-gray-500 text-xs rounded-xl border border-gray-100 
                    active:scale-95 transition-transform whitespace-nowrap font-medium 
                    hover:bg-rose-50 hover:text-rose-500 hover:border-rose-100
                "
            >
                <Tag size={10}/> {n}
            </button>
        ))}
    </div>
  );
}