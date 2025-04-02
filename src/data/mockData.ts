
export const mockEditals = [
  {
    id: "1",
    title: "Edital de Apoio à Cultura Popular Nordestina",
    organization: "Secretaria de Cultura de Pernambuco",
    deadline: "2023-12-30",
    tags: ["frevo", "maracatu", "Recife"],
    matchPercentage: 92,
    imageUrl: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=500&auto=format&fit=crop",
    saved: true,
    liked: false,
  },
  {
    id: "2",
    title: "Festival de Fotografia do Sertão - Chamada para Exposição",
    organization: "Instituto de Fotografia de Pernambuco",
    deadline: "2023-12-15",
    tags: ["fotografia", "caatinga", "sertão"],
    matchPercentage: 86,
    imageUrl: "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?q=80&w=500&auto=format&fit=crop",
    saved: false,
    liked: true,
  },
  {
    id: "3",
    title: "Residência Artística em Olinda - Xilogravura e Cordel",
    organization: "Fundação do Patrimônio Histórico de Olinda",
    deadline: "2024-01-20",
    tags: ["cordel", "xilogravura", "literatura"],
    matchPercentage: 75,
    imageUrl: "https://images.unsplash.com/photo-1496588152823-86ff7695e68f?q=80&w=500&auto=format&fit=crop",
    saved: false,
    liked: false,
  },
  {
    id: "4",
    title: "Prêmio Ariano Suassuna de Literatura",
    organization: "Fundação de Cultura de João Pessoa",
    deadline: "2024-02-10",
    tags: ["literatura", "teatro", "poesia"],
    matchPercentage: 60,
    imageUrl: "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=500&auto=format&fit=crop",
    saved: false,
    liked: false,
  },
  {
    id: "5",
    title: "Seleção de Projetos para Festival de Cinema do Cangaço",
    organization: "Instituto do Audiovisual do Nordeste",
    deadline: "2023-12-05",
    tags: ["cinema", "audiovisual", "cultura nordestina"],
    matchPercentage: 88,
    imageUrl: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=500&auto=format&fit=crop",
    saved: false,
    liked: true,
  }
];

export const mockUser = {
  id: "1",
  name: "Carolina Dantas",
  location: "Recife, PE",
  bio: "Artista visual e produtora cultural especializada em maracatu e frevo. Trabalho com projetos que valorizam a cultura nordestina através de narrativas visuais e performáticas.",
  skills: ["maracatu", "frevo", "arte popular", "xilogravura", "Recife"],
  completedApplications: 8,
  badgesCount: 3,
  portfolio: [
    {
      id: "p1",
      title: "Cores do Frevo",
      thumbnail: "https://images.unsplash.com/photo-1541580621-39f717ce77cd?q=80&w=500&auto=format&fit=crop",
    },
    {
      id: "p2",
      title: "Sertão em Foco",
      thumbnail: "https://images.unsplash.com/photo-1593642532744-d377ab507dc8?q=80&w=500&auto=format&fit=crop",
    },
    {
      id: "p3",
      title: "Faces do Recife Antigo",
      thumbnail: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=500&auto=format&fit=crop",
    }
  ]
};
