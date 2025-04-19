import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductCard from '../UI/ProductCard';
import { Product } from '../../types';

interface FeaturedProductsProps {
  products: Product[];
}

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ products }) => {
  return (
    <section className="bg-blue-950 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Produtos em Destaque</h2>
            <p className="text-gray-400">Nossos produtos mais populares para aprimorar seu desempenho</p>
          </div>
          <Link 
            to="/produtos" 
            className="hidden md:flex items-center text-blue-400 hover:text-blue-300 transition-colors"
          >
            Ver todos
            <ArrowRight size={18} className="ml-1" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map(product => (
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
        
        <div className="mt-10 text-center md:hidden">
          <Link 
            to="/produtos" 
            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors font-medium"
          >
            Ver todos os produtos
            <ArrowRight size={18} className="ml-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;