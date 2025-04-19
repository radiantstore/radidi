import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Trash2, ChevronLeft, CreditCard, ArrowRight } from 'lucide-react';
import Button from '../components/UI/Button';

// Dummy cart data
const cartItems = [
  {
    id: '2',
    name: 'Wallhack Premium',
    price: 89.99,
    imageUrl: 'https://images.pexels.com/photos/4009461/pexels-photo-4009461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    quantity: 1
  },
  {
    id: '3',
    name: 'Aimbot Pro',
    price: 129.99,
    imageUrl: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    quantity: 1
  }
];

const CartPage: React.FC = () => {
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const shipping = 0; // Free shipping
  const total = subtotal + shipping;

  return (
    <main className="min-h-screen bg-blue-950 text-white pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Seu Carrinho</h1>
          <p className="text-gray-400">Revise os itens do seu carrinho antes de finalizar a compra</p>
        </div>

        {cartItems.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg overflow-hidden shadow-lg mb-6">
                <div className="p-4 bg-blue-900/30">
                  <div className="flex items-center">
                    <ShoppingCart size={20} className="mr-2 text-blue-400" />
                    <span className="font-medium">Itens do Carrinho ({cartItems.length})</span>
                  </div>
                </div>
                
                <div className="divide-y divide-gray-700">
                  {cartItems.map(item => (
                    <div key={item.id} className="p-4 flex flex-col sm:flex-row items-start">
                      <img 
                        src={item.imageUrl} 
                        alt={item.name} 
                        className="w-20 h-20 object-cover rounded mr-4 mb-3 sm:mb-0" 
                      />
                      
                      <div className="flex-1">
                        <Link 
                          to={`/produtos/${item.id}`} 
                          className="text-lg font-medium text-white hover:text-blue-400 transition-colors"
                        >
                          {item.name}
                        </Link>
                        
                        <div className="mt-2 flex justify-between items-center">
                          <div className="flex items-center">
                            <span className="text-gray-400 mr-2">Qtd:</span>
                            <select 
                              className="bg-blue-900/50 border border-gray-700 rounded px-2 py-1 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                              defaultValue={item.quantity}
                            >
                              {[1, 2, 3, 4, 5].map(num => (
                                <option key={num} value={num}>{num}</option>
                              ))}
                            </select>
                          </div>
                          
                          <div className="text-right">
                            <div className="text-xl font-bold text-white">
                              R$ {item.price.toFixed(2)}
                            </div>
                            
                            <button className="text-red-400 hover:text-red-300 transition-colors mt-1 flex items-center text-sm">
                              <Trash2 size={14} className="mr-1" />
                              Remover
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="p-4 bg-blue-900/20 flex justify-between items-center">
                  <Link 
                    to="/produtos" 
                    className="text-blue-400 hover:text-blue-300 transition-colors flex items-center"
                  >
                    <ChevronLeft size={18} className="mr-1" />
                    Continuar comprando
                  </Link>
                  
                  <button className="text-red-400 hover:text-red-300 transition-colors flex items-center">
                    <Trash2 size={16} className="mr-1" />
                    Limpar carrinho
                  </button>
                </div>
              </div>
            </div>
            
            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg overflow-hidden shadow-lg sticky top-24">
                <div className="p-4 bg-blue-900/30">
                  <h3 className="font-medium">Resumo do Pedido</h3>
                </div>
                
                <div className="p-4">
                  <div className="space-y-3 text-gray-300 mb-4">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>R$ {subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Frete</span>
                      <span className="text-green-400">Grátis</span>
                    </div>
                    <div className="border-t border-gray-700 pt-3 flex justify-between font-bold text-white text-lg">
                      <span>Total</span>
                      <span>R$ {total.toFixed(2)}</span>
                    </div>
                  </div>
                  
                  <Button
                    variant="secondary"
                    size="lg"
                    fullWidth
                    onClick={() => console.log('Checkout')}
                    className="flex items-center justify-center mb-3"
                  >
                    <CreditCard size={18} className="mr-2" />
                    Finalizar compra
                  </Button>
                  
                  <div className="text-center text-gray-400 text-sm">
                    Pagamento 100% seguro
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg shadow-lg p-8 text-center">
            <ShoppingCart size={48} className="mx-auto mb-4 text-gray-500" />
            <h2 className="text-2xl font-bold mb-2">Seu carrinho está vazio</h2>
            <p className="text-gray-400 mb-6">Parece que você ainda não adicionou nenhum produto ao seu carrinho.</p>
            <Link to="/produtos">
              <Button variant="primary" size="lg">
                Ver produtos
                <ArrowRight size={18} className="ml-2" />
              </Button>
            </Link>
          </div>
        )}
      </div>
    </main>
  );
};

export default CartPage;