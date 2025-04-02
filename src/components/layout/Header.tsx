
import React, { useState } from 'react';
import { Bell, Search, User, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { NotificationCenter } from '@/components/notifications/NotificationCenter';

export const Header: React.FC = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [notificationCount, setNotificationCount] = useState(3);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
    // Here you would typically call an API to search
    setSearchOpen(false);
  };

  const handleNotificationClick = () => {
    setNotificationsOpen(!notificationsOpen);
    // After opening notifications, we can mark them as read
    if (!notificationsOpen) {
      // This would typically be done when viewing all notifications
      console.log('Opened notifications');
    }
  };

  const handleMarkAllAsRead = () => {
    setNotificationCount(0);
    console.log('Marked all notifications as read');
  };

  return (
    <header className="sticky top-0 bg-white border-b border-gray-200 z-10">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <h1 className="text-xl font-bold bg-gradient-to-r from-brand-purple to-brand-accent bg-clip-text text-transparent">
            ArtMatch
          </h1>
        </Link>
        
        <div className="flex items-center space-x-4">
          <button 
            className="p-2 rounded-full hover:bg-gray-100"
            onClick={() => setSearchOpen(true)}
          >
            <Search size={20} className="text-gray-600" />
          </button>
          
          <div className="relative">
            <button 
              className="p-2 rounded-full hover:bg-gray-100"
              onClick={handleNotificationClick}
            >
              <Bell size={20} className="text-gray-600" />
            </button>
            {notificationCount > 0 && (
              <Badge className="absolute -top-1 -right-1 bg-brand-purple text-white text-xs px-1.5 py-0.5 rounded-full">
                {notificationCount}
              </Badge>
            )}
          </div>
          
          <Link to="/profile" className="p-1 rounded-full border-2 border-brand-purple-light">
            <User size={20} className="text-brand-purple" />
          </Link>
        </div>
      </div>

      {/* Search Dialog */}
      <Dialog open={searchOpen} onOpenChange={setSearchOpen}>
        <DialogContent className="sm:max-w-md">
          <form onSubmit={handleSearchSubmit} className="space-y-4">
            <div className="flex items-center border rounded-md px-3 py-2 focus-within:ring-1 focus-within:ring-brand-purple">
              <Search className="h-5 w-5 text-gray-500 mr-2" />
              <Input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Busque por editais, áreas, localidades..." 
                className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0 p-0 text-base"
              />
              {searchQuery && (
                <button 
                  type="button" 
                  onClick={() => setSearchQuery('')} 
                  className="ml-2"
                >
                  <X className="h-4 w-4 text-gray-500" />
                </button>
              )}
            </div>
            <Button type="submit" className="w-full bg-brand-purple hover:bg-brand-purple-dark">
              Buscar
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      {/* Notifications Panel */}
      <NotificationCenter 
        open={notificationsOpen} 
        onOpenChange={setNotificationsOpen}
        onMarkAllAsRead={handleMarkAllAsRead}
      />
    </header>
  );
};
