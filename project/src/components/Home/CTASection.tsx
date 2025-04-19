import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Button from '../UI/Button';

const CTASection: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Pronto para levar seu jogo ao próximo nível?
          </h2>
          
          <p className="text-xl text-blue-100 mb-8">
            Junte-se a milhares de jogadores que já estão aproveitando nossas soluções premium.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="secondary"
              size="lg"
              onClick={() => {}}
            >
              Explorar Produtos
            </Button>
            
            <Link 
              to="/contato" 
              className="inline-flex items-center justify-center bg-white text-blue-600 hover:bg-blue-50 transition-colors px-6 py-3 rounded font-medium text-lg"
            >
              Fale Conosco
              <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;