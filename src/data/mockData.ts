
export const mockEditals = [
  {
    id: "1",
    title: "Edital de Financiamento para Artes Visuais",
    organization: "Secretaria de Cultura SP",
    deadline: "2023-12-30",
    tags: ["artes visuais", "financiamento", "São Paulo"],
    matchPercentage: 92,
    imageUrl: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=500&auto=format&fit=crop",
    saved: true,
    liked: false,
  },
  {
    id: "2",
    title: "Festival Internacional de Fotografia - Chamada para Exposição",
    organization: "Instituto de Fotografia Brasileira",
    deadline: "2023-12-15",
    tags: ["fotografia", "exposição", "festival"],
    matchPercentage: 86,
    imageUrl: "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?q=80&w=500&auto=format&fit=crop",
    saved: false,
    liked: true,
  },
  {
    id: "3",
    title: "Bolsa de Residência Artística em Nova York",
    organization: "Fundação de Apoio às Artes",
    deadline: "2024-01-20",
    tags: ["residência", "internacional", "multidisciplinar"],
    matchPercentage: 75,
    imageUrl: "https://images.unsplash.com/photo-1496588152823-86ff7695e68f?q=80&w=500&auto=format&fit=crop",
    saved: false,
    liked: false,
  },
  {
    id: "4",
    title: "Prêmio Nacional de Literatura",
    organization: "Biblioteca Nacional",
    deadline: "2024-02-10",
    tags: ["literatura", "premiação", "nacional"],
    matchPercentage: 60,
    imageUrl: "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=500&auto=format&fit=crop",
    saved: false,
    liked: false,
  },
  {
    id: "5",
    title: "Seleção de Projetos para Festival de Cinema Independente",
    organization: "Associação de Cinema Brasileiro",
    deadline: "2023-12-05",
    tags: ["cinema", "audiovisual", "festival"],
    matchPercentage: 88,
    imageUrl: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=500&auto=format&fit=crop",
    saved: false,
    liked: true,
  }
];

export const mockUser = {
  id: "1",
  name: "Marina Oliveira",
  location: "São Paulo, SP",
  bio: "Fotógrafa documental e artista visual. Trabalho com projetos que exploram questões sociais e ambientais através de narrativas visuais.",
  skills: ["fotografia documental", "artes visuais", "edição de vídeo", "exposição", "São Paulo"],
  completedApplications: 8,
  badgesCount: 3,
  portfolio: [
    {
      id: "p1",
      title: "Retratos da Periferia",
      thumbnail: "https://images.unsplash.com/photo-1541580621-39f717ce77cd?q=80&w=500&auto=format&fit=crop",
    },
    {
      id: "p2",
      title: "Amazônia em Foco",
      thumbnail: "https://images.unsplash.com/photo-1593642532744-d377ab507dc8?q=80&w=500&auto=format&fit=crop",
    },
    {
      id: "p3",
      title: "Faces da Cidade",
      thumbnail: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=500&auto=format&fit=crop",
    }
  ]
};
