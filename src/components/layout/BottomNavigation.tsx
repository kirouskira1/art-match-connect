
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Bookmark, User, PlusSquare } from 'lucide-react';

export const BottomNavigation: React.FC = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-10">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-around">
          <NavItem 
            to="/" 
            icon={<Home size={22} />} 
            label="Home" 
            active={isActive('/')}
          />
          <NavItem 
            to="/saved" 
            icon={<Bookmark size={22} />} 
            label="Salvos" 
            active={isActive('/saved')}
          />
          <NavItem 
            to="/submit" 
            icon={<PlusSquare size={22} />} 
            label="Publicar" 
            active={isActive('/submit')}
          />
          <NavItem 
            to="/profile" 
            icon={<User size={22} />} 
            label="Perfil" 
            active={isActive('/profile')}
          />
        </div>
      </div>
    </div>
  );
};

interface NavItemProps {
  to: string;
  icon: React.ReactNode;
  label: string;
  active: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ to, icon, label, active }) => {
  return (
    <Link 
      to={to} 
      className={`flex flex-col items-center px-3 py-1 ${
        active ? "text-brand-purple" : "text-gray-500"
      }`}
    >
      <div className={`${active ? "bg-brand-purple bg-opacity-10 p-1 rounded-lg" : ""}`}>
        {icon}
      </div>
      <span className={`text-xs mt-1 ${active ? "font-medium" : ""}`}>{label}</span>
    </Link>
  );
};
