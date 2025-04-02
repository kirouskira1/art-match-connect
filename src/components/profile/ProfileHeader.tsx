
import React from 'react';
import { UserCircle, MapPin, Edit, Star, Award, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Toggle } from '@/components/ui/toggle';
import { Switch } from '@/components/ui/switch';
import { useTheme } from 'next-themes';

interface ProfileHeaderProps {
  user: {
    name: string;
    location: string;
    bio: string;
    skills: string[];
    completedApplications: number;
    badgesCount: number;
  };
}

export const ProfileHeader: React.FC<ProfileHeaderProps> = ({ user }) => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm mb-6">
      <div className="h-24 bg-gradient-to-r from-brand-blue to-brand-accent"></div>
      
      <div className="px-4 pb-5">
        <div className="flex justify-between -mt-8">
          <div className="h-20 w-20 rounded-full bg-white dark:bg-gray-700 p-1 shadow-md">
            <UserCircle size={74} className="text-gray-400 dark:text-gray-300" />
          </div>
          
          <div className="flex items-center gap-2 mt-3">
            <div className="flex items-center bg-gray-100 dark:bg-gray-700 rounded-full p-1">
              <Sun size={16} className="text-gray-500 dark:text-gray-400 mr-1 ml-2" />
              <Switch 
                checked={theme === 'dark'}
                onCheckedChange={toggleTheme}
              />
              <Moon size={16} className="text-gray-500 dark:text-gray-400 ml-1 mr-2" />
            </div>
            
            <Button variant="outline" className="flex items-center gap-2">
              <Edit size={15} />
              <span>Editar Perfil</span>
            </Button>
          </div>
        </div>
        
        <div className="mt-3">
          <h2 className="text-xl font-bold dark:text-white">{user.name}</h2>
          <div className="flex items-center text-gray-600 dark:text-gray-400 mt-1">
            <MapPin size={16} className="mr-1" />
            <span className="text-sm">{user.location}</span>
          </div>
        </div>
        
        <p className="text-gray-600 dark:text-gray-300 mt-3">
          {user.bio}
        </p>
        
        <div className="flex gap-4 mt-4">
          <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
            <Award size={18} className="text-brand-blue" />
            <span className="text-sm font-medium">{user.badgesCount} conquistas</span>
          </div>
          <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
            <Star size={18} className="text-brand-yellow" />
            <span className="text-sm font-medium">{user.completedApplications} editais finalizados</span>
          </div>
        </div>
        
        <div className="mt-5">
          <div className="flex items-center mb-2">
            <h3 className="font-medium dark:text-white">Minhas Habilidades</h3>
            <Button variant="ghost" size="sm" className="ml-auto p-0 h-auto text-brand-blue">
              <Edit size={15} className="mr-1" />
              <span className="text-sm">Editar</span>
            </Button>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {user.skills.map((skill) => (
              <Badge key={skill} variant="outline" className="bg-gray-50 dark:bg-gray-700 dark:text-gray-200">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
