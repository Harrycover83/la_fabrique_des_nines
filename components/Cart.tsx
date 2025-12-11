'use client';

import { useCart } from '@/lib/CartContext';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Cart({ isOpen, onClose }: CartProps) {
  const { items, removeFromCart, updateQuantity, totalPrice } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-50"
        onClick={onClose}
      />
      
      {/* Cart Panel */}
      <div className="fixed right-0 top-0 h-full w-full md:w-96 bg-white shadow-xl z-50 overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-serif text-artisan-clay">Panier</h2>
            <button 
              onClick={onClose}
              className="text-artisan-charcoal hover:text-artisan-terracotta"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Cart Items */}
          {items.length === 0 ? (
            <div className="text-center py-12 text-artisan-charcoal">
              <p>Votre panier est vide</p>
            </div>
          ) : (
            <>
              <div className="space-y-4 mb-6">
                {items.map(item => (
                  <div key={item.id} className="flex gap-4 border-b border-artisan-sand pb-4">
                    <div className="w-20 h-20 bg-artisan-sand rounded flex-shrink-0" />
                    <div className="flex-1">
                      <h3 className="font-medium text-artisan-charcoal">{item.name}</h3>
                      <p className="text-artisan-terracotta font-medium">{item.price.toFixed(2)} €</p>
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-6 h-6 border border-artisan-sand rounded hover:bg-artisan-sand"
                        >
                          -
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-6 h-6 border border-artisan-sand rounded hover:bg-artisan-sand"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-artisan-charcoal hover:text-red-600"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>

              {/* Total */}
              <div className="border-t border-artisan-sand pt-4 mb-6">
                <div className="flex justify-between text-lg font-medium">
                  <span>Total</span>
                  <span className="text-artisan-terracotta">{totalPrice.toFixed(2)} €</span>
                </div>
              </div>

              {/* Checkout Button */}
              <button className="w-full bg-artisan-terracotta text-white py-3 rounded-lg hover:bg-artisan-clay transition-colors font-medium">
                Commander
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
}
