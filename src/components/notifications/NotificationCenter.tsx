
import React from 'react';
import { 
  Sheet, 
  SheetContent, 
  SheetHeader, 
  SheetTitle,
  SheetFooter
} from "@/components/ui/sheet";
import { Button } from '@/components/ui/button';
import { Notification } from '@/components/notifications/Notification';
import { mockNotifications } from '@/data/mockNotifications';

interface NotificationCenterProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onMarkAllAsRead: () => void;
}

export const NotificationCenter: React.FC<NotificationCenterProps> = ({
  open,
  onOpenChange,
  onMarkAllAsRead
}) => {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="w-full max-w-sm sm:max-w-md p-0">
        <SheetHeader className="px-6 pt-6 pb-2 border-b">
          <SheetTitle className="text-xl">Notificações</SheetTitle>
        </SheetHeader>
        
        <div className="overflow-y-auto h-[calc(100vh-180px)]">
          {mockNotifications.length > 0 ? (
            <div className="divide-y">
              {mockNotifications.map((notification) => (
                <Notification key={notification.id} notification={notification} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full p-6 text-center">
              <div className="bg-gray-100 rounded-full p-4 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                  <path d="M18 8C19.6569 8 21 6.65685 21 5C21 3.34315 19.6569 2 18 2C16.3431 2 15 3.34315 15 5C15 6.65685 16.3431 8 18 8Z"></path>
                  <path d="M6 15C7.65685 15 9 13.6569 9 12C9 10.3431 7.65685 9 6 9C4.34315 9 3 10.3431 3 12C3 13.6569 4.34315 15 6 15Z"></path>
                  <path d="M18 22C19.6569 22 21 20.6569 21 19C21 17.3431 19.6569 16 18 16C16.3431 16 15 17.3431 15 19C15 20.6569 16.3431 22 18 22Z"></path>
                  <path d="M8.59 13.51L15.42 17.49"></path>
                  <path d="M15.41 6.51L8.59 10.49"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-700">Nenhuma notificação</h3>
              <p className="text-gray-500 mt-1">
                Você não possui notificações novas.
              </p>
            </div>
          )}
        </div>
        
        <SheetFooter className="px-6 py-4 border-t">
          <Button 
            variant="outline" 
            className="w-full" 
            onClick={onMarkAllAsRead}
          >
            Marcar todas como lidas
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
