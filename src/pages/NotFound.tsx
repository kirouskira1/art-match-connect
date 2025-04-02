
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 text-center">
      <h1 className="text-7xl font-bold text-brand-purple">404</h1>
      <div className="h-1 w-16 bg-brand-yellow my-6 mx-auto rounded-full"></div>
      <h2 className="text-2xl font-semibold mb-3">Página não encontrada</h2>
      <p className="text-gray-600 mb-8 max-w-md">
        A página que você está procurando não existe ou foi movida para outro local.
      </p>
      <Button asChild className="bg-brand-purple hover:bg-brand-accent">
        <Link to="/" className="flex items-center gap-2">
          <Home size={18} />
          <span>Voltar para o início</span>
        </Link>
      </Button>
    </div>
  );
};

export default NotFound;
