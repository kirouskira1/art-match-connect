
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Calendar, Heart, Share2, Bookmark, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

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
  liked = false
}) => {
  const [isSaved, setIsSaved] = React.useState(saved);
  const [isLiked, setIsLiked] = React.useState(liked);

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
              onClick={() => setIsLiked(!isLiked)}
              className={`p-2 rounded-full ${isLiked ? 'bg-red-50 text-red-500' : 'hover:bg-gray-100 text-gray-500'}`}
            >
              <Heart size={20} className={isLiked ? 'fill-current' : ''} />
            </button>
            
            <button 
              onClick={() => setIsSaved(!isSaved)}
              className={`p-2 rounded-full ${isSaved ? 'bg-brand-purple bg-opacity-10 text-brand-purple' : 'hover:bg-gray-100 text-gray-500'}`}
            >
              <Bookmark size={20} className={isSaved ? 'fill-current' : ''} />
            </button>
            
            <button className="p-2 rounded-full hover:bg-gray-100 text-gray-500">
              <Share2 size={20} />
            </button>
          </div>
          
          <Button 
            className="bg-brand-purple hover:bg-brand-accent text-white flex items-center gap-1.5"
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
