
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Calendar, Heart, Share2, Bookmark, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

export interface EditalProps {
  id: string;
  title: string;
  organization: string;
  deadline: string;
  tags: string[];
  matchPercentage: number;
  imageUrl: string;
  saved?: boolean;
  liked?: boolean;
  onSaveToggle?: (edital: EditalProps) => void;
}

export const EditalCard: React.FC<EditalProps> = ({
  id,
  title,
  organization,
  deadline,
  tags,
  matchPercentage,
  imageUrl,
  saved = false,
  liked = false,
  onSaveToggle
}) => {
  const [isSaved, setIsSaved] = React.useState(saved);
  const [isLiked, setIsLiked] = React.useState(liked);
  const { toast } = useToast();

  // Format deadline to display days remaining
  const daysRemaining = () => {
    const today = new Date();
    const deadlineDate = new Date(deadline);
    const diffTime = deadlineDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays < 0) return "Encerrado";
    if (diffDays === 0) return "Último dia!";
    if (diffDays === 1) return "1 dia restante";
    return `${diffDays} dias restantes`;
  };

  // Get color for match percentage
  const getMatchColor = () => {
    if (matchPercentage >= 85) return "bg-green-500";
    if (matchPercentage >= 60) return "bg-amber-500";
    return "bg-gray-300";
  };

  const handleSave = () => {
    const newSavedState = !isSaved;
    setIsSaved(newSavedState);
    
    // Update local storage with the saved state
    const savedEditals = JSON.parse(localStorage.getItem('savedEditals') || '[]');
    
    if (newSavedState) {
      // Add to saved
      const editalToSave = {
        id, title, organization, deadline, tags, matchPercentage, imageUrl, saved: true, liked: isLiked
      };
      
      // Check if it's already saved to avoid duplicates
      if (!savedEditals.some((edital: EditalProps) => edital.id === id)) {
        savedEditals.push(editalToSave);
        localStorage.setItem('savedEditals', JSON.stringify(savedEditals));
        
        toast({
          title: "Edital salvo",
          description: "O edital foi adicionado aos seus salvos."
        });
      }
    } else {
      // Remove from saved
      const filteredEditals = savedEditals.filter((edital: EditalProps) => edital.id !== id);
      localStorage.setItem('savedEditals', JSON.stringify(filteredEditals));
      
      if (onSaveToggle) {
        onSaveToggle({
          id, title, organization, deadline, tags, matchPercentage, imageUrl, saved: false, liked: isLiked
        });
      } else {
        toast({
          title: "Edital removido",
          description: "O edital foi removido dos seus salvos."
        });
      }
    }
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
    
    toast({
      title: isLiked ? "Curtida removida" : "Edital curtido",
      description: isLiked 
        ? "Você removeu sua curtida deste edital." 
        : "Você curtiu este edital."
    });
  };

  const handleShare = () => {
    // In a real app, this would use the Web Share API
    // For this demo, we'll just show a toast
    toast({
      title: "Link copiado!",
      description: "O link para este edital foi copiado para sua área de transferência."
    });
  };

  return (
    <div className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm mb-4 animate-slide-up">
      <div className="relative h-40">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-full object-cover" 
        />
        <div className="absolute top-2 right-2 flex space-x-2">
          <Badge variant="match" className="shadow-lg">
            Match {matchPercentage}%
          </Badge>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-bold text-lg line-clamp-2">{title}</h3>
            <p className="text-sm text-gray-600">{organization}</p>
          </div>
        </div>
        
        <div className="flex items-center mt-3 text-sm">
          <Calendar size={16} className="mr-1 text-gray-500" />
          <span className={cn(
            "text-sm",
            daysRemaining().includes("Encerrado") ? "text-red-500" : 
            daysRemaining().includes("Último") ? "text-amber-500 font-medium" : 
            "text-gray-600"
          )}>
            {daysRemaining()}
          </span>
        </div>
        
        <div className="mt-3 flex flex-wrap gap-2">
          {tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="outline" className="bg-gray-100">
              {tag}
            </Badge>
          ))}
          {tags.length > 3 && (
            <Badge variant="outline" className="bg-gray-100">
              +{tags.length - 3}
            </Badge>
          )}
        </div>
        
        <div className="mt-4 flex items-center justify-between">
          <div className="flex space-x-3">
            <button 
              onClick={handleLike}
              className={`p-2 rounded-full ${isLiked ? 'bg-red-50 text-red-500' : 'hover:bg-gray-100 text-gray-500'}`}
              aria-label={isLiked ? "Remover curtida" : "Curtir edital"}
            >
              <Heart size={20} className={isLiked ? 'fill-current' : ''} />
            </button>
            
            <button 
              onClick={handleSave}
              className={`p-2 rounded-full ${isSaved ? 'bg-brand-blue bg-opacity-10 text-brand-blue' : 'hover:bg-gray-100 text-gray-500'}`}
              aria-label={isSaved ? "Remover dos salvos" : "Salvar edital"}
            >
              <Bookmark size={20} className={isSaved ? 'fill-current' : ''} />
            </button>
            
            <button 
              onClick={handleShare}
              className="p-2 rounded-full hover:bg-gray-100 text-gray-500"
              aria-label="Compartilhar edital"
            >
              <Share2 size={20} />
            </button>
          </div>
          
          <Button 
            className="bg-brand-blue hover:bg-brand-accent text-white flex items-center gap-1.5"
          >
            <span>Aplicar</span>
            <ExternalLink size={16} />
          </Button>
        </div>
      </div>

      <div className="h-1.5 w-full bg-gray-200">
        <div 
          className={`h-full ${getMatchColor()}`}
          style={{ width: `${matchPercentage}%` }}
        ></div>
      </div>
    </div>
  );
};
