
import React from 'react';
import { MainLayout } from '@/components/layout/MainLayout';
import { EditalCard } from '@/components/editals/EditalCard';
import { mockEditals } from '@/data/mockData';
import { Bookmark, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Saved: React.FC = () => {
  const savedEditals = mockEditals.filter(edital => edital.saved);

  return (
    <MainLayout>
      <div className="flex items-center mb-5">
        <Bookmark size={20} className="text-brand-purple mr-2" />
        <h2 className="text-xl font-semibold">Editais Salvos</h2>
      </div>

      {savedEditals.length > 0 ? (
        <div className="space-y-4">
          {savedEditals.map(edital => (
            <EditalCard key={edital.id} {...edital} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <div className="bg-gray-100 rounded-full p-6 mb-4">
            <AlertCircle size={32} className="text-gray-400" />
          </div>
          <h3 className="text-lg font-semibold text-gray-700">Nenhum edital salvo</h3>
          <p className="text-gray-500 mt-1 max-w-xs">
            Você ainda não salvou nenhum edital. Salve editais para acessá-los facilmente mais tarde.
          </p>
          <Button className="mt-4 bg-brand-purple hover:bg-brand-accent">
            Explorar Editais
          </Button>
        </div>
      )}
    </MainLayout>
  );
};

export default Saved;
