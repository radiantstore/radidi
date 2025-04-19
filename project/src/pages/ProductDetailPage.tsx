import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, Shield, Clock, CheckCircle, ShoppingCart } from 'lucide-react';
import Button from '../components/UI/Button';
import { Product } from '../types';

const ProductDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // Mock product data based on slug
  const allProducts: Product[] = [
    {
      id: '1',
      name: 'ESP + AIM 100 UD!',
      price: null, // Sem preço
      imageUrl: 'https://images.pexels.com/photos/7915437/pexels-photo-7915437.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      slug: 'esp-aim-100ud',
      featured: true,
      description: 'O melhor ESP e AIM do mercado, 100% indetectável. Domine seus oponentes com precisão incomparável.',
      features: [
        'ESP com visualização através de paredes',
        'AIM assistido com configurações personalizáveis',
        'Bypass para anti-cheat de última geração',
        'Atualizações automáticas gratuitas',
        'Suporte 24/7 para configuração'
      ]
    },
    {
      id: '2',
      name: 'Wallhack Premium',
      price: 89.99,
      imageUrl: 'https://images.pexels.com/photos/4009461/pexels-photo-4009461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      slug: 'wallhack-premium',
      featured: true,
      description: 'Veja através de paredes e obtenha vantagem total sobre seus adversários.',
      features: [
        'Visualização através de paredes e obstáculos',
        'Rastreamento de inimigos em tempo real',
        'Configurações de cores e transparência',
        'Detecção de atividade inimiga',
        'Interface personalizável'
      ]
    },
    // Add other products here with the same structure
  ];
  
  const product = allProducts.find(p => p.slug === slug);
  
  if (!product) {
    return (
      <div className="min-h-screen bg-blue-950 text-white pt-24 pb-16 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Produto não encontrado</h2>
          <p className="text-gray-400 mb-6">O produto que você está procurando não existe ou foi removido.</p>
          <Link to="/produtos" className="text-blue-400 hover:text-blue-300 transition-colors">
            ← Voltar para produtos
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-blue-950 text-white pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link 
            to="/produtos" 
            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
          >
            <ChevronLeft size={18} className="mr-1" />
            Voltar para produtos
          </Link>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          {/* Product Image */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden shadow-lg">
            <img 
              src={product.imageUrl} 
              alt={product.name} 
              className="w-full h-auto object-cover"
            />
          </div>
          
          {/* Product Info */}
          <div>
            <div className="mb-4">
              {product.featured && (
                <span className="inline-block bg-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-full mb-2">
                  DESTAQUE
                </span>
              )}
              <h1 className="text-3xl font-bold text-white mb-2">{product.name}</h1>
              
              <div className="flex items-center space-x-3 mb-4">
                {product.price === null ? (
                  <span className="text-xl text-gray-400">Sem preço</span>
                ) : (
                  <span className="text-3xl font-bold text-white">R$ {product.price.toFixed(2)}</span>
                )}
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
              {product.description}
            </p>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-white mb-3">Características</h3>
              <ul className="space-y-2">
                {product.features?.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle size={18} className="mr-2 text-blue-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
              <div className="flex items-center bg-blue-900/30 rounded-lg p-3">
                <Shield size={20} className="mr-2 text-blue-400" />
                <span className="text-gray-300">100% Indetectável</span>
              </div>
              <div className="flex items-center bg-blue-900/30 rounded-lg p-3">
                <Clock size={20} className="mr-2 text-blue-400" />
                <span className="text-gray-300">Atualizações constantes</span>
              </div>
            </div>
            
            <Button
              variant="secondary"
              size="lg"
              fullWidth
              onClick={() => console.log(`Add to cart: ${product.id}`)}
              className="flex items-center justify-center"
            >
              <ShoppingCart size={20} className="mr-2" />
              Comprar agora
            </Button>
          </div>
        </div>
        
        {/* Additional product sections could go here */}
      </div>
    </main>
  );
};

export default ProductDetailPage;