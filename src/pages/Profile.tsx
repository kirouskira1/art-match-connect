
import React, { useState, useEffect } from 'react';
import { MainLayout } from '@/components/layout/MainLayout';
import { ProfileHeader } from '@/components/profile/ProfileHeader';
import { mockUser, mockEditals } from '@/data/mockData';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { EditalCard } from '@/components/editals/EditalCard';
import { Button } from '@/components/ui/button';
import { PlusCircle, Image, Clock, Calendar } from 'lucide-react';
import { ThemeProvider } from 'next-themes';

const Profile: React.FC = () => {
  const [participatedEditals, setParticipatedEditals] = useState<any[]>([]);
  
  useEffect(() => {
    // Load participated editals from localStorage or use mock data
    const storedParticipatedEditals = localStorage.getItem('participatedEditals');
    const initialParticipatedEditals = storedParticipatedEditals
      ? JSON.parse(storedParticipatedEditals)
      : mockEditals.filter((edital) => edital.id % 3 === 0); // Just mock some participated editals
    
    setParticipatedEditals(initialParticipatedEditals);
  }, []);

  return (
    <ThemeProvider attribute="class">
      <MainLayout>
        <ProfileHeader user={mockUser} />

        <Tabs defaultValue="matches" className="w-full">
          <TabsList className="w-full mb-5 bg-gray-100 dark:bg-gray-800">
            <TabsTrigger 
              value="matches" 
              className="flex-1 data-[state=active]:bg-brand-blue data-[state=active]:text-white"
            >
              Meus Matches
            </TabsTrigger>
            <TabsTrigger 
              value="portfolio" 
              className="flex-1 data-[state=active]:bg-brand-blue data-[state=active]:text-white"
            >
              Portfólio
            </TabsTrigger>
            <TabsTrigger 
              value="history" 
              className="flex-1 data-[state=active]:bg-brand-blue data-[state=active]:text-white"
            >
              Histórico
            </TabsTrigger>
            <TabsTrigger 
              value="applications" 
              className="flex-1 data-[state=active]:bg-brand-blue data-[state=active]:text-white"
            >
              Inscrições
            </TabsTrigger>
          </TabsList>

          <TabsContent value="matches">
            <div className="space-y-4">
              {mockEditals
                .filter(edital => edital.matchPercentage >= 85)
                .map(edital => (
                  <EditalCard key={edital.id} {...edital} />
                ))
              }
            </div>
          </TabsContent>

          <TabsContent value="portfolio">
            <div className="grid grid-cols-2 gap-3">
              {mockUser.portfolio.map(item => (
                <div key={item.id} className="aspect-square relative overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700">
                  <img 
                    src={item.thumbnail} 
                    alt={item.title} 
                    className="w-full h-full object-cover" 
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2">
                    <h3 className="text-white text-sm font-medium">{item.title}</h3>
                  </div>
                </div>
              ))}
              
              <div className="aspect-square flex flex-col items-center justify-center rounded-lg border border-dashed border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800">
                <div className="bg-gray-100 dark:bg-gray-700 rounded-full p-4 mb-2">
                  <PlusCircle size={24} className="text-gray-400 dark:text-gray-300" />
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">Adicionar trabalho</span>
              </div>
            </div>
            
            <Button className="w-full mt-4 bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600">
              <Image size={18} className="mr-2" />
              Ver portfólio completo
            </Button>
          </TabsContent>
          
          <TabsContent value="history">
            {participatedEditals.length > 0 ? (
              <div className="space-y-4">
                <div className="flex items-center mb-3">
                  <Clock size={18} className="text-brand-blue mr-2" />
                  <h3 className="text-lg font-medium dark:text-white">
                    Editais que já participei
                  </h3>
                </div>
                
                {participatedEditals.map(edital => (
                  <div key={edital.id} className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4">
                    <div className="flex justify-between">
                      <div>
                        <h4 className="font-medium dark:text-white">{edital.title}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{edital.organization}</p>
                      </div>
                      <div className="flex items-center text-sm">
                        <Calendar size={16} className="mr-1 text-gray-500 dark:text-gray-400" />
                        <span className="text-gray-600 dark:text-gray-300">{new Date(edital.deadline).toLocaleDateString('pt-BR')}</span>
                      </div>
                    </div>
                    
                    <div className="flex justify-between mt-3 text-sm">
                      <div className="text-brand-blue dark:text-brand-blue-light">
                        {edital.matchPercentage >= 85 ? 'Concluído' : 'Não selecionado'}
                      </div>
                      <Button variant="outline" size="sm" className="h-8">
                        Ver detalhes
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-10 text-center">
                <div className="bg-gray-100 dark:bg-gray-700 rounded-full p-6 mb-4">
                  <Clock size={32} className="text-gray-400 dark:text-gray-300" />
                </div>
                <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200">Nenhum edital no histórico</h3>
                <p className="text-gray-500 dark:text-gray-400 mt-1 max-w-xs">
                  Você ainda não participou de nenhum edital. Seus editais anteriores aparecerão aqui.
                </p>
                <Button className="mt-4 bg-brand-blue hover:bg-brand-accent">
                  Encontrar Editais
                </Button>
              </div>
            )}
          </TabsContent>

          <TabsContent value="applications">
            <div className="flex flex-col items-center justify-center py-10 text-center">
              <div className="bg-gray-100 dark:bg-gray-700 rounded-full p-6 mb-4">
                <PlusCircle size={32} className="text-gray-400 dark:text-gray-300" />
              </div>
              <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200">Nenhuma inscrição ativa</h3>
              <p className="text-gray-500 dark:text-gray-400 mt-1 max-w-xs">
                Suas inscrições em editais aparecerão aqui para acompanhamento.
              </p>
              <Button className="mt-4 bg-brand-blue hover:bg-brand-accent">
                Encontrar Editais
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </MainLayout>
    </ThemeProvider>
  );
};

export default Profile;
