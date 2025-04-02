
import { NotificationItem } from '@/components/notifications/Notification';

// Helper to create dates relative to now
const getDate = (daysAgo: number): Date => {
  const date = new Date();
  date.setDate(date.getDate() - daysAgo);
  return date;
};

export const mockNotifications: NotificationItem[] = [
  {
    id: '1',
    title: 'Edital perfeito para você!',
    description: 'Edital de apoio às manifestações do Carnaval de Pernambuco tem 92% de compatibilidade com seu perfil.',
    date: getDate(0), // Today
    type: 'match',
    read: false
  },
  {
    id: '2',
    title: 'Prazo se aproximando',
    description: 'O edital "Festival de Arte Popular do Agreste" encerra em 2 dias.',
    date: getDate(1), // Yesterday
    type: 'deadline',
    read: false
  },
  {
    id: '3',
    title: 'Novo edital publicado',
    description: 'Um edital com suas tags de interesse foi publicado: "Concurso de Cordel e Xilogravura do Sertão".',
    date: getDate(2),
    type: 'match',
    read: true
  },
  {
    id: '4',
    title: 'Bem-vindo ao ArtMatch',
    description: 'Complete seu perfil para receber editais de cultura popular nordestina personalizados para você.',
    date: getDate(7),
    type: 'system',
    read: true
  }
];
