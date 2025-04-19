import React, { useState } from 'react';
import { Filter, Search } from 'lucide-react';
import ProductCard from '../components/UI/ProductCard';
import { Product } from '../types';

const ProductsPage: React.FC = () => {
  // Mock products data
  const allProducts: Product[] = [
    {
      id: '1',
      name: 'ESP + AIM 100 UD!',
      price: null, // Sem preço
      imageUrl: 'https://images.pexels.com/photos/7915437/pexels-photo-7915437.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      slug: 'esp-aim-100ud',
      featured: true,
      description: 'O melhor ESP e AIM do mercado, 100% indetectável. Domine seus oponentes com precisão incomparável.'
    },
    {
      id: '2',
      name: 'Wallhack Premium',
      price: 89.99,
      imageUrl: 'https://images.pexels.com/photos/4009461/pexels-photo-4009461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      slug: 'wallhack-premium',
      featured: true,
      description: 'Veja através de paredes e obtenha vantagem total sobre seus adversários.'
    },
    {
      id: '3',
      name: 'Aimbot Pro',
      price: 129.99,
      imageUrl: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      slug: 'aimbot-pro',
      description: 'Melhore sua precisão com nosso Aimbot avançado. Configurações personalizáveis e suporte completo.'
    },
    {
      id: '4',
      name: 'Scripts VIP',
      price: 59.99,
      imageUrl: 'https://images.pexels.com/photos/4009592/pexels-photo-4009592.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      slug: 'scripts-vip',
      description: 'Pacote de scripts VIP para diversos jogos. Atualizações constantes e suporte dedicado.'
    },
    {
      id: '5',
      name: 'Radar Hack',
      price: 69.99,
      imageUrl: 'https://images.pexels.com/photos/4009626/pexels-photo-4009626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      slug: 'radar-hack',
      description: 'Veja a posição de todos os jogadores no mapa com nosso Radar Hack avançado.'
    },
    {
      id: '6',
      name: 'Boost de Conta',
      price: 149.99,
      imageUrl: 'https://images.pexels.com/photos/7914464/pexels-photo-7914464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      slug: 'boost-de-conta',
      description: 'Serviço de boost de conta profissional. Alcance o rank desejado rapidamente.'
    },
    {
      id: '7',
      name: 'Anti-Recoil Script',
      price: 49.99,
      imageUrl: 'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      slug: 'anti-recoil-script',
      description: 'Elimine o recuo das armas com nosso script anti-recuo de alta precisão.'
    },
    {
      id: '8',
      name: 'VIP Membership',
      price: 199.99,
      imageUrl: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      slug: 'vip-membership',
      description: 'Acesso a todos os nossos produtos com um desconto significativo. Atualizações vitalícias.'
    }
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  // Filter products based on search term and category
  const filteredProducts = allProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || 
                           (selectedCategory === 'featured' && product.featured) ||
                           (selectedCategory === 'sem-preco' && product.price === null);
    return matchesSearch && matchesCategory;
  });

  const categories = [
    { id: 'all', name: 'Todos' },
    { id: 'featured', name: 'Destaque' },
    { id: 'sem-preco', name: 'Sem Preço' }
  ];

  return (
    <main className="min-h-screen bg-blue-950 text-white pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Nossos Produtos</h1>
          <p className="text-gray-400">Explore nossa coleção de produtos de alta qualidade</p>
        </div>

        {/* Filters and Search */}
        <div className="bg-blue-900/50 rounded-lg p-4 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="md:w-1/3">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar produtos..."
                  className="w-full bg-blue-950 border border-blue-700 rounded-lg px-4 py-2 pl-10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>
            
            <div className="md:w-2/3 flex items-center">
              <Filter size={18} className="mr-2 text-gray-400" />
              <span className="text-gray-300 mr-3">Filtrar:</span>
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-3 py-1 rounded-full text-sm ${
                      selectedCategory === category.id
                        ? 'bg-blue-600 text-white'
                        : 'bg-blue-800/50 text-gray-300 hover:bg-blue-700/50'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                imageUrl={product.imageUrl}
                slug={product.slug}
                featured={product.featured}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-xl text-gray-400">Nenhum produto encontrado.</p>
            <p className="text-gray-500 mt-2">Tente ajustar seus filtros ou pesquisa.</p>
          </div>
        )}
      </div>
    </main>
  );
};

export default ProductsPage;