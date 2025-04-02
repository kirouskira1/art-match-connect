
import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Bell, Clock, Calendar, Award } from 'lucide-react';

export interface NotificationItem {
  id: string;
  title: string;
  description: string;
  date: Date;
  type: 'match' | 'deadline' | 'system';
  read: boolean;
}

interface NotificationProps {
  notification: NotificationItem;
}

export const Notification: React.FC<NotificationProps> = ({ notification }) => {
  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'match':
        return <Award className="text-brand-yellow" />;
      case 'deadline':
        return <Calendar className="text-brand-purple" />;
      default:
        return <Bell className="text-gray-600" />;
    }
  };

  const getTimeAgo = (date: Date) => {
    return formatDistanceToNow(date, {
      addSuffix: true,
      locale: ptBR
    });
  };

  return (
    <div className={`px-6 py-4 ${notification.read ? 'bg-white' : 'bg-gray-50'} hover:bg-gray-100 cursor-pointer`}>
      <div className="flex items-start">
        <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
          {getNotificationIcon(notification.type)}
        </div>
        
        <div className="ml-3 flex-1">
          <div className="flex items-start justify-between">
            <h3 className={`text-sm font-medium ${notification.read ? 'text-gray-700' : 'text-black'}`}>
              {notification.title}
            </h3>
            <span className="text-xs text-gray-500 flex items-center">
              <Clock className="h-3 w-3 mr-1" />
              {getTimeAgo(notification.date)}
            </span>
          </div>
          
          <p className="text-sm text-gray-600 mt-1">
            {notification.description}
          </p>
          
          {!notification.read && (
            <span className="h-2 w-2 bg-brand-purple rounded-full absolute top-4 left-2"></span>
          )}
        </div>
      </div>
    </div>
  );
};
