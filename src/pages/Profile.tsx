
import React from 'react';
import { MainLayout } from '@/components/layout/MainLayout';
import { ProfileHeader } from '@/components/profile/ProfileHeader';
import { mockUser, mockEditals } from '@/data/mockData';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { EditalCard } from '@/components/editals/EditalCard';
import { Button } from '@/components/ui/button';
import { PlusCircle, Image } from 'lucide-react';

const Profile: React.FC = () => {
  return (
    <MainLayout>
      <ProfileHeader user={mockUser} />

      <Tabs defaultValue="matches" className="w-full">
        <TabsList className="w-full mb-5 bg-gray-100">
          <TabsTrigger 
            value="matches" 
            className="flex-1 data-[state=active]:bg-brand-purple data-[state=active]:text-white"
          >
            Meus Matches
          </TabsTrigger>
          <TabsTrigger 
            value="portfolio" 
            className="flex-1 data-[state=active]:bg-brand-purple data-[state=active]:text-white"
          >
            Portfólio
          </TabsTrigger>
          <TabsTrigger 
            value="applications" 
            className="flex-1 data-[state=active]:bg-brand-purple data-[state=active]:text-white"
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
              <div key={item.id} className="aspect-square relative overflow-hidden rounded-lg border border-gray-200">
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
            
            <div className="aspect-square flex flex-col items-center justify-center rounded-lg border border-dashed border-gray-300 bg-gray-50">
              <div className="bg-gray-100 rounded-full p-4 mb-2">
                <PlusCircle size={24} className="text-gray-400" />
              </div>
              <span className="text-sm text-gray-500">Adicionar trabalho</span>
            </div>
          </div>
          
          <Button className="w-full mt-4 bg-gray-100 text-gray-600 hover:bg-gray-200">
            <Image size={18} className="mr-2" />
            Ver portfólio completo
          </Button>
        </TabsContent>

        <TabsContent value="applications">
          <div className="flex flex-col items-center justify-center py-10 text-center">
            <div className="bg-gray-100 rounded-full p-6 mb-4">
              <PlusCircle size={32} className="text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-700">Nenhuma inscrição ativa</h3>
            <p className="text-gray-500 mt-1 max-w-xs">
              Suas inscrições em editais aparecerão aqui para acompanhamento.
            </p>
            <Button className="mt-4 bg-brand-purple hover:bg-brand-accent">
              Encontrar Editais
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </MainLayout>
  );
};

export default Profile;
