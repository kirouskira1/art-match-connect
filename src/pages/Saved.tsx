
import React, { useEffect, useState } from 'react';
import { MainLayout } from '@/components/layout/MainLayout';
import { EditalCard, EditalProps } from '@/components/editals/EditalCard';
import { mockEditals } from '@/data/mockData';
import { Bookmark, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const Saved: React.FC = () => {
  const [savedEditals, setSavedEditals] = useState<EditalProps[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    // Load saved editals from localStorage
    const storedEditals = localStorage.getItem('savedEditals');
    const initialEditals = storedEditals 
      ? JSON.parse(storedEditals) 
      : mockEditals.filter(edital => edital.saved);
    
    setSavedEditals(initialEditals);
  }, []);

  const handleEditalUpdate = (updatedEdital: EditalProps) => {
    const updatedEditals = savedEditals.filter(
      edital => edital.id !== updatedEdital.id
    );
    
    setSavedEditals(updatedEditals);
    localStorage.setItem('savedEditals', JSON.stringify(updatedEditals));
    
    toast({
      title: "Edital removido",
      description: "O edital foi removido dos seus salvos."
    });
  };

  return (
    <MainLayout>
      <div className="flex items-center mb-5">
        <Bookmark size={20} className="text-brand-blue mr-2" />
        <h2 className="text-xl font-semibold dark:text-white">Editais Salvos</h2>
      </div>

      {savedEditals.length > 0 ? (
        <div className="space-y-4">
          {savedEditals.map(edital => (
            <EditalCard 
              key={edital.id} 
              {...edital} 
              onSaveToggle={handleEditalUpdate}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <div className="bg-gray-100 dark:bg-gray-700 rounded-full p-6 mb-4">
            <AlertCircle size={32} className="text-gray-400 dark:text-gray-300" />
          </div>
          <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200">Nenhum edital salvo</h3>
          <p className="text-gray-500 dark:text-gray-400 mt-1 max-w-xs">
            Você ainda não salvou nenhum edital. Salve editais para acessá-los facilmente mais tarde.
          </p>
          <Link to="/">
            <Button className="mt-4 bg-brand-blue hover:bg-brand-accent">
              Explorar Editais
            </Button>
          </Link>
        </div>
      )}
    </MainLayout>
  );
};

export default Saved;
