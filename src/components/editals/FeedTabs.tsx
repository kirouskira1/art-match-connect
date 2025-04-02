
import React from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface FeedTabsProps {
  activeTab: string;
  onChange: (value: string) => void;
}

export const FeedTabs: React.FC<FeedTabsProps> = ({ activeTab, onChange }) => {
  return (
    <div className="mb-4">
      <Tabs value={activeTab} onValueChange={onChange} className="w-full">
        <TabsList className="w-full bg-gray-100">
          <TabsTrigger 
            value="para-voce" 
            className="flex-1 data-[state=active]:bg-brand-purple data-[state=active]:text-white"
          >
            Para você
          </TabsTrigger>
          <TabsTrigger 
            value="recentes" 
            className="flex-1 data-[state=active]:bg-brand-purple data-[state=active]:text-white"
          >
            Recentes
          </TabsTrigger>
          <TabsTrigger 
            value="salvos" 
            className="flex-1 data-[state=active]:bg-brand-purple data-[state=active]:text-white"
          >
            Salvos
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
};
