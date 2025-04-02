
import React, { useState } from 'react';
import { MainLayout } from '@/components/layout/MainLayout';
import { FeedTabs } from '@/components/editals/FeedTabs';
import { EditalCard } from '@/components/editals/EditalCard';
import { mockEditals } from '@/data/mockData';
import { Sparkles } from 'lucide-react';

const Home: React.FC = () => {
  const [activeTab, setActiveTab] = useState('para-voce');
  const [editals, setEditals] = useState(mockEditals);

  const filteredEditals = () => {
    switch (activeTab) {
      case 'para-voce':
        return [...editals].sort((a, b) => b.matchPercentage - a.matchPercentage);
      case 'recentes':
        return [...editals].sort((a, b) => 
          new Date(b.deadline).getTime() - new Date(a.deadline).getTime()
        );
      case 'salvos':
        return editals.filter(edital => edital.saved);
      default:
        return editals;
    }
  };

  return (
    <MainLayout>
      <div className="flex items-center mb-5">
        <Sparkles size={20} className="text-brand-yellow mr-2" />
        <h2 className="text-xl font-semibold">Editais para você</h2>
      </div>

      <FeedTabs activeTab={activeTab} onChange={setActiveTab} />

      <div className="pb-4">
        {filteredEditals().length > 0 ? (
          filteredEditals().map(edital => (
            <EditalCard
              key={edital.id}
              {...edital}
            />
          ))
        ) : (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="bg-gray-100 rounded-full p-6 mb-4">
              <Sparkles size={32} className="text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-700">Nenhum edital encontrado</h3>
            <p className="text-gray-500 mt-1 max-w-xs">
              Ajuste suas tags de habilidades para descobrir mais oportunidades.
            </p>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default Home;
