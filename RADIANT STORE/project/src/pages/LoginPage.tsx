import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, Key, Mail, Eye, EyeOff } from 'lucide-react';
import Button from '../components/UI/Button';

const LoginPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  
  const toggleForm = () => {
    setIsLogin(!isLogin);
  };
  
  return (
    <main className="min-h-screen bg-blue-950 text-white pt-24 pb-16 flex items-center justify-center">
      <div className="container mx-auto px-4 max-w-md">
        <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg overflow-hidden shadow-xl">
          <div className="p-6 sm:p-8">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center bg-blue-600 w-16 h-16 rounded-full mb-4">
                <User size={32} className="text-white" />
              </div>
              <h1 className="text-2xl font-bold">{isLogin ? 'Login' : 'Criar Conta'}</h1>
              <p className="text-gray-400 mt-1">
                {isLogin 
                  ? 'Entre para acessar sua conta' 
                  : 'Preencha os dados para se cadastrar'}
              </p>
            </div>
            
            <form className="space-y-5">
              {!isLogin && (
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-1 font-medium">
                    Nome Completo
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      className="w-full bg-blue-950/80 border border-gray-700 rounded-lg px-4 py-2 pl-10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Digite seu nome"
                    />
                    <User size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                  </div>
                </div>
              )}
              
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-1 font-medium">
                  Email
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-blue-950/80 border border-gray-700 rounded-lg px-4 py-2 pl-10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Digite seu email"
                  />
                  <Mail size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                </div>
              </div>
              
              <div>
                <label htmlFor="password" className="block text-gray-300 mb-1 font-medium">
                  Senha
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    className="w-full bg-blue-950/80 border border-gray-700 rounded-lg px-4 py-2 pl-10 pr-10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Digite sua senha"
                  />
                  <Key size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>
              
              {isLogin && (
                <div className="flex justify-end">
                  <Link to="/esqueci-senha" className="text-blue-400 hover:text-blue-300 text-sm">
                    Esqueceu sua senha?
                  </Link>
                </div>
              )}
              
              <Button
                variant="secondary"
                size="lg"
                fullWidth
                type="submit"
              >
                {isLogin ? 'Entrar' : 'Cadastrar'}
              </Button>
              
              <div className="text-center mt-4">
                {isLogin ? (
                  <p className="text-gray-400">
                    Não tem uma conta?{' '}
                    <button
                      type="button"
                      className="text-blue-400 hover:text-blue-300 font-medium"
                      onClick={toggleForm}
                    >
                      Registre-se
                    </button>
                  </p>
                ) : (
                  <p className="text-gray-400">
                    Já tem uma conta?{' '}
                    <button
                      type="button"
                      className="text-blue-400 hover:text-blue-300 font-medium"
                      onClick={toggleForm}
                    >
                      Faça Login
                    </button>
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;