
import React, { useState } from 'react';
import { MainLayout } from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Upload, Calendar, Tag } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';

const formSchema = z.object({
  title: z.string().min(5, { message: 'Título deve ter pelo menos 5 caracteres' }),
  organization: z.string().min(3, { message: 'Nome da organização é obrigatório' }),
  description: z.string().min(20, { message: 'Descrição deve ter pelo menos 20 caracteres' }),
  deadline: z.date({ required_error: 'Data de encerramento é obrigatória' }),
  tags: z.string().min(3, { message: 'Adicione pelo menos uma tag' }),
  link: z.string().url({ message: 'URL inválida' }).or(z.string().length(0))
});

type FormValues = z.infer<typeof formSchema>;

const Submit: React.FC = () => {
  const { toast } = useToast();
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      organization: '',
      description: '',
      tags: '',
      link: ''
    }
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) { // 5MB limit
        toast({
          title: "Erro no upload",
          description: "A imagem não pode ser maior que 5MB",
          variant: "destructive"
        });
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
      setImageFile(file);
    }
  };

  const onSubmit = (data: FormValues) => {
    if (!imageFile) {
      toast({
        title: "Imagem obrigatória",
        description: "Por favor, adicione uma imagem de capa",
        variant: "destructive"
      });
      return;
    }

    // Create a new edital object with the form data
    const newEdital = {
      id: Date.now().toString(),
      title: data.title,
      organization: data.organization,
      deadline: format(data.deadline, 'yyyy-MM-dd'),
      tags: data.tags.split(',').map(tag => tag.trim()),
      matchPercentage: Math.floor(Math.random() * 40) + 60, // Random match between 60-100%
      imageUrl: imagePreview,
      saved: false,
      liked: false,
    };

    // In a real app, this would be sent to an API
    // For now, we'll store it in localStorage
    const savedEditals = JSON.parse(localStorage.getItem('editals') || '[]');
    savedEditals.push(newEdital);
    localStorage.setItem('editals', JSON.stringify(savedEditals));

    toast({
      title: "Edital publicado!",
      description: "Seu edital foi publicado com sucesso!"
    });

    // Reset the form
    form.reset();
    setImageFile(null);
    setImagePreview(null);
  };

  return (
    <MainLayout>
      <div className="mb-5">
        <h2 className="text-xl font-semibold">Publicar Edital</h2>
        <p className="text-gray-600 text-sm">
          Compartilhe uma oportunidade com a comunidade de artistas
        </p>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <Label htmlFor="title">Título do Edital</Label>
                  <FormControl>
                    <Input 
                      id="title" 
                      placeholder="Ex: Edital de Financiamento para Artes Visuais" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="organization"
              render={({ field }) => (
                <FormItem>
                  <Label htmlFor="organization">Organização</Label>
                  <FormControl>
                    <Input 
                      id="organization" 
                      placeholder="Ex: Secretaria de Cultura de Pernambuco" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <Label htmlFor="description">Descrição</Label>
                  <FormControl>
                    <Textarea
                      id="description"
                      placeholder="Descreva os detalhes do edital, requisitos e benefícios..."
                      className="min-h-32"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="deadline"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <Label htmlFor="deadline">Data de Encerramento</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full flex justify-between pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "dd/MM/yyyy")
                          ) : (
                            <span>Selecione uma data</span>
                          )}
                          <Calendar className="h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <CalendarComponent
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) => date < new Date()}
                        initialFocus
                        className="p-3 pointer-events-auto"
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="tags"
              render={({ field }) => (
                <FormItem>
                  <Label htmlFor="tags">Tags (separadas por vírgula)</Label>
                  <div className="relative">
                    <FormControl>
                      <Input 
                        id="tags" 
                        placeholder="Ex: frevo, maracatu, Recife" 
                        {...field} 
                      />
                    </FormControl>
                    <Tag className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div>
              <Label htmlFor="image">Imagem de Capa</Label>
              <div className={`mt-1 border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center bg-gray-50 ${imagePreview ? 'border-brand-blue' : ''}`}>
                {imagePreview ? (
                  <div className="w-full">
                    <img 
                      src={imagePreview} 
                      alt="Preview" 
                      className="mb-3 max-h-40 mx-auto object-contain rounded-md" 
                    />
                    <div className="flex justify-center">
                      <Button 
                        type="button" 
                        variant="outline" 
                        size="sm" 
                        onClick={() => {
                          setImageFile(null);
                          setImagePreview(null);
                        }}
                      >
                        Remover Imagem
                      </Button>
                    </div>
                  </div>
                ) : (
                  <>
                    <Upload size={24} className="text-gray-400 mb-2" />
                    <p className="text-sm text-gray-600">Arraste e solte ou clique para selecionar</p>
                    <p className="text-xs text-gray-500 mt-1">PNG, JPG ou GIF (máx. 5MB)</p>
                    <Input 
                      id="image" 
                      type="file" 
                      accept="image/*"
                      className="hidden" 
                      onChange={handleImageChange}
                    />
                    <Button 
                      type="button" 
                      variant="outline" 
                      size="sm" 
                      className="mt-3"
                      onClick={() => document.getElementById('image')?.click()}
                    >
                      Selecionar Arquivo
                    </Button>
                  </>
                )}
              </div>
            </div>

            <FormField
              control={form.control}
              name="link"
              render={({ field }) => (
                <FormItem>
                  <Label htmlFor="link">Link para Inscrição</Label>
                  <FormControl>
                    <Input 
                      id="link" 
                      placeholder="https://" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="pt-4">
              <Button 
                type="submit"
                className="w-full bg-brand-blue hover:bg-brand-accent"
              >
                Publicar Edital
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </MainLayout>
  );
};

export default Submit;
