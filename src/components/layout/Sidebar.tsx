import React from 'react';
import { ChevronRight } from 'lucide-react';

interface SidebarItem {
  label: string;
  hasSubmenu?: boolean;
  onClick?: () => void;
}

interface SidebarProps {
  items?: SidebarItem[];
}

const defaultItems: SidebarItem[] = [
  { label: "Woman's Fashion", hasSubmenu: true },
  { label: "Men's Fashion", hasSubmenu: true },
  { label: 'Electronics', hasSubmenu: false },
  { label: 'Home & Lifestyle', hasSubmenu: false },
  { label: 'Medicine', hasSubmenu: false },
  { label: 'Sports & Outdoor', hasSubmenu: false },
  { label: "Baby's & Toys", hasSubmenu: false },
  { label: 'Groceries & Pets', hasSubmenu: false },
  { label: 'Health & Beauty', hasSubmenu: false },
];

export const Sidebar: React.FC<SidebarProps> = ({ items = defaultItems }) => {
  return (
    <aside className="w-64 border-r pr-4">
      <nav>
        <ul className="space-y-4">
          {items.map((item, index) => (
            <li key={index}>
              <button
                onClick={item.onClick}
                className="flex items-center justify-between w-full text-left hover:text-gray-600 transition-colors"
              >
                <span>{item.label}</span>
                {item.hasSubmenu && <ChevronRight size={16} />}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};
