
import React from 'react';
import { MainLayout } from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Upload, Calendar, Tag } from 'lucide-react';

const Submit: React.FC = () => {
  return (
    <MainLayout>
      <div className="mb-5">
        <h2 className="text-xl font-semibold">Publicar Edital</h2>
        <p className="text-gray-600 text-sm">
          Compartilhe uma oportunidade com a comunidade de artistas
        </p>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4">
        <form className="space-y-6">
          <div>
            <Label htmlFor="title">Título do Edital</Label>
            <Input id="title" placeholder="Ex: Edital de Financiamento para Artes Visuais" />
          </div>

          <div>
            <Label htmlFor="organization">Organização</Label>
            <Input id="organization" placeholder="Ex: Secretaria de Cultura" />
          </div>

          <div>
            <Label htmlFor="description">Descrição</Label>
            <Textarea
              id="description"
              placeholder="Descreva os detalhes do edital, requisitos e benefícios..."
              className="min-h-32"
            />
          </div>

          <div>
            <Label htmlFor="deadline">Data de Encerramento</Label>
            <div className="relative">
              <Input id="deadline" type="date" />
              <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
            </div>
          </div>

          <div>
            <Label htmlFor="tags">Tags (separadas por vírgula)</Label>
            <div className="relative">
              <Input id="tags" placeholder="Ex: fotografia, exposição, São Paulo" />
              <Tag className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
            </div>
          </div>

          <div>
            <Label htmlFor="image">Imagem de Capa</Label>
            <div className="mt-1 border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center bg-gray-50">
              <Upload size={24} className="text-gray-400 mb-2" />
              <p className="text-sm text-gray-600">Arraste e solte ou clique para selecionar</p>
              <p className="text-xs text-gray-500 mt-1">PNG, JPG ou GIF (máx. 5MB)</p>
              <Input id="image" type="file" className="hidden" />
              <Button type="button" variant="outline" size="sm" className="mt-3">
                Selecionar Arquivo
              </Button>
            </div>
          </div>

          <div>
            <Label htmlFor="link">Link para Inscrição</Label>
            <Input id="link" placeholder="https://" />
          </div>

          <div className="pt-4">
            <Button className="w-full bg-brand-purple hover:bg-brand-accent">
              Publicar Edital
            </Button>
          </div>
        </form>
      </div>
    </MainLayout>
  );
};

export default Submit;
