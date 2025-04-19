import React, { useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import Button from './Button';
import { Dialog } from '@headlessui/react';

interface ProductCardProps {
  id: string;
  name: string;
  price: number | null;
  imageUrl: string;
  slug: string;
  featured?: boolean;
}

interface Plan {
  id: number;
  name: string;
  price: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  id, 
  name, 
  imageUrl, 
  featured = false 
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const plans: Plan[] = [
    { id: 1, name: 'Diário', price: 27.00 },
    { id: 2, name: 'Semanal', price: 75.00 },
    { id: 3, name: 'Mensal', price: 130.00 }
  ];

  return (
    <>
      <div className={`
        bg-gradient-to-b from-gray-800 to-gray-900 
        rounded-lg overflow-hidden shadow-lg transition-all duration-300
        hover:shadow-xl hover:translate-y-[-5px]
        ${featured ? 'border-2 border-blue-500' : 'border border-gray-700'}
      `}>
        <div className="relative overflow-hidden h-48 md:h-56">
          <img 
            src={imageUrl} 
            alt={name} 
            className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
          />
          {featured && (
            <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">
              DESTAQUE
            </div>
          )}
        </div>
        
        <div className="p-4">
          <h3 className="text-lg font-bold text-white mb-2 truncate">
            {name}
          </h3>
          
          <Button 
            variant="primary"
            fullWidth
            onClick={() => setIsModalOpen(true)}
            className="group"
          >
            <ShoppingCart size={18} className="mr-2" />
            Ver Planos
          </Button>
        </div>
      </div>

      <Dialog
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/70" aria-hidden="true" />
        
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="bg-gradient-to-br from-blue-900 to-gray-900 rounded-lg w-full max-w-4xl overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2">
                <img
                  src="https://imgur.com/YuphFyC.png"
                  alt={name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="md:w-1/2 p-6">
                <Dialog.Title className="text-2xl font-bold text-white mb-6">
                  Escolha seu plano
                </Dialog.Title>
                
                <div className="space-y-4">
                  {plans.map((plan) => (
                    <div
                      key={plan.id}
                      className="bg-blue-900/30 p-4 rounded-lg hover:bg-blue-900/40 transition-colors cursor-pointer"
                    >
                      <div className="flex justify-between items-center">
                        <h4 className="text-lg font-semibold text-white">
                          {plan.name}
                        </h4>
                        <span className="text-xl font-bold text-blue-400">
                          R$ {plan.price.toFixed(2)}
                        </span>
                      </div>
                      <button className="mt-3 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors">
                        Selecionar
                      </button>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => setIsModalOpen(false)}
                  className="mt-6 text-gray-400 hover:text-white transition-colors"
                >
                  Fechar
                </button>
              </div>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};

export default ProductCard;