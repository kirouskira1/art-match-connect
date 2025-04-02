
import React from 'react';
import { Bell, Search, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 bg-white border-b border-gray-200 z-10">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <h1 className="text-xl font-bold bg-gradient-to-r from-brand-purple to-brand-accent bg-clip-text text-transparent">
            ArtMatch
          </h1>
        </Link>
        
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-full hover:bg-gray-100">
            <Search size={20} className="text-gray-600" />
          </button>
          
          <div className="relative">
            <button className="p-2 rounded-full hover:bg-gray-100">
              <Bell size={20} className="text-gray-600" />
            </button>
            <Badge className="absolute -top-1 -right-1 bg-brand-purple text-white text-xs px-1.5 py-0.5 rounded-full">
              3
            </Badge>
          </div>
          
          <Link to="/profile" className="p-1 rounded-full border-2 border-brand-purple-light">
            <User size={20} className="text-brand-purple" />
          </Link>
        </div>
      </div>
    </header>
  );
};
