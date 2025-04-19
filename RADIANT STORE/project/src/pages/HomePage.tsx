import React, { useState } from 'react';
import Hero from '../components/Home/Hero';
import { Dialog } from '@headlessui/react';
import { X, RefreshCw, Clock, Shield, Star, ExternalLink } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  image: string;
  plans: Plan[];
}

interface Plan {
  id: number;
  name: string;
  price: number;
}

interface Testimonial {
  id: number;
  name: string;
  game: string;
  content: string;
  rating: number;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "João Silva",
    game: "CLIENTE CHEATS",
    content: "ESP + AIM funcionando perfeitamente! Melhor precisão que já tive, suporte muito atencioso!",
    rating: 5,
    avatar: "https://imgur.com/E1tEhTa.png"
  },
  {
    id: 2,
    name: "Pedro Oliveira",
    game: "CLIENTE CHEATS",
    content: "AIM COLOR é sensacional! Consigo ver os inimigos de longe com muita facilidade. Recomendo!",
    rating: 5,
    avatar: "https://imgur.com/TmBUsBJ.png"
  },
  {
    id: 3,
    name: "Lucas Santos",
    game: "CLIENTE CHEATS",
    content: "Depois que comecei a usar o ESP, minha gameplay melhorou 100%. Muito satisfeito com o produto!",
    rating: 5,
    avatar: "https://imgur.com/h6nPGg8.png"
  }
];

const products: Product[] = [
  {
    id: 1,
    name: 'ESP + AIM Premium',
    image: 'https://imgur.com/YuphFyC.png',
    plans: [
      { id: 1, name: 'Diário', price: 27.00 },
      { id: 2, name: 'Semanal', price: 75.00 },
      { id: 3, name: 'Mensal', price: 130.00 }
    ]
  },
  {
    id: 2,
    name: 'AIM COLOR',
    image: 'https://imgur.com/qpzWvLg.png',
    plans: [
      { id: 1, name: 'Diário', price: 25.00 },
      { id: 2, name: 'Semanal', price: 70.00 },
      { id: 3, name: 'Mensal', price: 120.00 }
    ]
  }
];

const HomePage: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handlePlanSelect = () => {
    window.location.href = 'https://discord.gg/radiantstore';
  };

  return (
    <main className="min-h-screen bg-blue-950 text-white pt-16">
      <Hero />
      
      {/* Products Section */}
      <section className="py-20">
        <div className="container mx-auto px-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12 hover:text-blue-400 transition-colors">
            Nossos Produtos
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-[1400px] mx-auto">
            {products.map((product) => (
              <div 
                key={product.id}
                onClick={() => handleProductClick(product)}
                className="group max-w-[600px] mx-auto w-full bg-gradient-to-br from-blue-900/40 to-gray-900 rounded-lg overflow-hidden cursor-pointer transform hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/30"
              >
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-[600px] object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{product.name}</h3>
                    <p className="text-blue-400 text-xl group-hover:text-blue-300 flex items-center">
                      Clique para ver os planos
                      <ExternalLink size={20} className="ml-2 animate-pulse" />
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-blue-900/20">
        <div className="container mx-auto px-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12 hover:text-blue-400 transition-colors">
            Por que comprar na RADIANT STORE?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="group bg-gradient-to-br from-blue-900/40 to-gray-900 rounded-lg p-8 text-center hover:transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
              <div className="w-20 h-20 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600/30 transition-colors">
                <RefreshCw size={40} className="text-blue-400 group-hover:rotate-180 transition-transform duration-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">Atualizações Diárias</h3>
              <p className="text-gray-300 text-lg group-hover:text-gray-200 transition-colors">
                Atualizamos nossos produtos todos os dias para garantir o melhor desempenho
              </p>
            </div>

            <div className="group bg-gradient-to-br from-blue-900/40 to-gray-900 rounded-lg p-8 text-center hover:transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
              <div className="w-20 h-20 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600/30 transition-colors">
                <Clock size={40} className="text-blue-400 group-hover:rotate-45 transition-transform duration-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">Suporte 24h</h3>
              <p className="text-gray-300 text-lg group-hover:text-gray-200 transition-colors">
                Nossa equipe está sempre disponível para ajudar você quando precisar
              </p>
            </div>

            <div className="group bg-gradient-to-br from-blue-900/40 to-gray-900 rounded-lg p-8 text-center hover:transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
              <div className="w-20 h-20 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600/30 transition-colors">
                <Shield size={40} className="text-blue-400 group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">Sempre Atualizado</h3>
              <p className="text-gray-300 text-lg group-hover:text-gray-200 transition-colors">
                Nossos produtos estão sempre atualizados para a última versão do jogo
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4 hover:text-blue-400 transition-colors">
            Feedback dos Clientes
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto text-xl">
            Veja o que nossos clientes estão dizendo sobre nossos produtos e serviços
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id}
                className="group bg-gradient-to-br from-blue-900/40 to-gray-900 rounded-lg p-8 hover:transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
              >
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4 group-hover:scale-110 transition-transform duration-300"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{testimonial.name}</h3>
                    <p className="text-blue-400 text-lg group-hover:text-blue-300 transition-colors">{testimonial.game}</p>
                  </div>
                </div>

                <p className="text-gray-300 text-lg mb-6 group-hover:text-gray-200 transition-colors">"{testimonial.content}"</p>

                <div className="flex items-center">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i}
                      size={20}
                      className="text-yellow-400 fill-current group-hover:scale-110 transition-transform duration-300"
                    />
                  ))}
                </div>
              </div>
            ))}
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
          <Dialog.Panel className="bg-gradient-to-br from-blue-900 to-gray-900 rounded-lg w-full max-w-6xl overflow-hidden shadow-2xl">
            {selectedProduct && (
              <div className="flex flex-col md:flex-row">
                <div className="md:w-3/5">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full h-[800px] object-cover"
                  />
                </div>
                
                <div className="md:w-2/5 p-8">
                  <div className="flex justify-between items-start mb-8">
                    <div>
                      <Dialog.Title className="text-3xl font-bold text-white mb-2">
                        {selectedProduct.name}
                      </Dialog.Title>
                      <p className="text-xl text-gray-400">Escolha seu plano</p>
                    </div>
                    <button
                      onClick={() => setIsModalOpen(false)}
                      className="text-gray-400 hover:text-white transition-colors transform hover:rotate-90 duration-300"
                    >
                      <X size={28} />
                    </button>
                  </div>
                  
                  <div className="space-y-6">
                    {selectedProduct.plans.map((plan) => (
                      <div
                        key={plan.id}
                        className="group bg-blue-900/30 p-6 rounded-lg hover:bg-blue-900/40 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
                      >
                        <div className="flex justify-between items-center mb-3">
                          <h4 className="text-2xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                            {plan.name}
                          </h4>
                          <span className="text-2xl font-bold text-blue-400 group-hover:text-blue-300 transition-colors">
                            R$ {plan.price.toFixed(2)}
                          </span>
                        </div>
                        <button 
                          onClick={handlePlanSelect}
                          className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg flex items-center justify-center"
                        >
                          Selecionar
                          <ExternalLink size={20} className="ml-2" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </Dialog.Panel>
        </div>
      </Dialog>
    </main>
  );
};

export default HomePage;