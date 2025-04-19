import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { X } from 'lucide-react';

interface Plan {
  id: number;
  name: string;
  price: number;
}

const plans: Plan[] = [
  { id: 1, name: 'Diário', price: 27.00 },
  { id: 2, name: 'Semanal', price: 75.00 },
  { id: 3, name: 'Mensal', price: 130.00 }
];

const LandingPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-blue-950">
      {/* Products Section */}
      <section className="min-h-screen flex items-center justify-center py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white text-center mb-12">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              RADIANT
            </span>{' '}
            STORE
          </h1>
          
          <div className="max-w-4xl mx-auto">
            <div 
              onClick={() => setIsModalOpen(true)}
              className="bg-gradient-to-br from-blue-900/40 to-gray-900 rounded-lg overflow-hidden cursor-pointer transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
            >
              <div className="relative">
                <img
                  src="https://imgur.com/YuphFyC.png"
                  alt="ESP + AIM"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-3xl font-bold text-white mb-3">ESP + AIM Premium</h3>
                  <p className="text-blue-400 text-xl">Clique para ver os planos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Modal */}
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
                  alt="ESP + AIM Premium"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="md:w-1/2 p-6">
                <div className="flex justify-between items-start mb-6">
                  <Dialog.Title className="text-2xl font-bold text-white">
                    Escolha seu plano
                  </Dialog.Title>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>
                
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
              </div>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
};

export default LandingPage;