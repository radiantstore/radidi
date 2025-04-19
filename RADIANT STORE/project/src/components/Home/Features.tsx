import React from 'react';
import { Shield, Zap, Award } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-blue-900/30 rounded-lg p-6 hover:bg-blue-900/40 transition-colors duration-300">
      <div className="bg-blue-700/20 w-14 h-14 rounded-full flex items-center justify-center mb-4 text-blue-400">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      icon: <Shield size={24} />,
      title: "100% Indetectável",
      description: "Nossos produtos são desenvolvidos com tecnologia anti-detecção avançada para sua segurança total."
    },
    {
      icon: <Zap size={24} />,
      title: "Atualização Constante",
      description: "Mantemos nossos produtos sempre atualizados com as últimas versões dos jogos."
    },
    {
      icon: <Award size={24} />,
      title: "Suporte Premium",
      description: "Suporte técnico de qualidade 24/7 para ajudar com qualquer dúvida ou problema."
    }
  ];

  return (
    <section className="bg-blue-950 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Por que escolher a RADIANT STORE?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Somos especializados em fornecer os melhores produtos para melhorar sua experiência de jogo.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Feature 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;