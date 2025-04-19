import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialProps {
  name: string;
  role: string;
  content: string;
  rating: number;
  avatarUrl: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ 
  name, 
  role, 
  content, 
  rating, 
  avatarUrl 
}) => {
  return (
    <div className="bg-gradient-to-br from-blue-900/40 to-gray-900 p-6 rounded-lg shadow-md">
      <div className="flex items-start mb-4">
        <img 
          src={avatarUrl} 
          alt={name} 
          className="w-12 h-12 rounded-full mr-4 object-cover border-2 border-blue-500" 
        />
        <div>
          <h4 className="text-lg font-semibold text-white">{name}</h4>
          <p className="text-gray-400">{role}</p>
        </div>
      </div>
      
      <p className="text-gray-300 mb-4 italic">"{content}"</p>
      
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            size={18} 
            fill={i < rating ? "#f59e0b" : "none"} 
            color={i < rating ? "#f59e0b" : "#6b7280"} 
            className="mr-1" 
          />
        ))}
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Carlos Silva",
      role: "Jogador profissional",
      content: "Uso os produtos da ZERO STORE há 6 meses e minha performance melhorou significativamente. Recomendo a todos!",
      rating: 5,
      avatarUrl: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Ana Oliveira",
      role: "Streamer",
      content: "Depois que comecei a usar os produtos da ZERO STORE, minha precisão aumentou em 85%. Um investimento que vale cada centavo.",
      rating: 5,
      avatarUrl: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Roberto Almeida",
      role: "Gamer competitivo",
      content: "O suporte é incrível e o produto funciona perfeitamente. Nenhum problema de detecção até agora. Muito satisfeito!",
      rating: 4,
      avatarUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150"
    }
  ];

  return (
    <section className="bg-gradient-to-b from-blue-950 to-gray-900 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">O que nossos clientes dizem</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Estamos orgulhosos de fazer a diferença na experiência de jogo de milhares de clientes
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Testimonial 
              key={index}
              name={testimonial.name}
              role={testimonial.role}
              content={testimonial.content}
              rating={testimonial.rating}
              avatarUrl={testimonial.avatarUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;