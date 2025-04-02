
import React from 'react';
import { BottomNavigation } from './BottomNavigation';
import { Header } from './Header';

interface MainLayoutProps {
  children: React.ReactNode;
  hideNav?: boolean;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children, hideNav = false }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-1 container mx-auto px-4 pt-4 pb-20">
        {children}
      </main>
      {!hideNav && <BottomNavigation />}
    </div>
  );
};
