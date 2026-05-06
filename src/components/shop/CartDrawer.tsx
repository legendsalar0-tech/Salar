import { X, ShoppingBag, Trash2, Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CartItem } from '../../types';
import { Link } from 'react-router-dom';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemove: (id: string) => void;
  onUpdateQuantity: (id: string, delta: number) => void;
}

export default function CartDrawer({ isOpen, onClose, items, onRemove, onUpdateQuantity }: CartDrawerProps) {
  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const freeShippingThreshold = 2000;
  const isFreeShipping = total >= freeShippingThreshold;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
          />
          
          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="px-6 py-6 border-b flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-green-600" />
                <h2 className="text-xl font-black tracking-tighter uppercase">Your Shopping Bag</h2>
                <span className="text-sm font-black text-slate-400">({items.length})</span>
              </div>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-slate-100 rounded-full transition-colors"
                id="close-cart-btn"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Free Shipping Alert */}
            <div className="px-6 py-4 bg-green-50 border-b border-green-100">
              {isFreeShipping ? (
                <p className="text-xs font-black text-green-700 text-center uppercase tracking-widest">
                  🎉 You've unlocked FREE Shipping in Pakistan!
                </p>
              ) : (
                <div className="space-y-2 text-center">
                  <p className="text-xs font-bold text-slate-600 uppercase tracking-tight">
                    Add <span className="font-black">Rs. {freeShippingThreshold - total}</span> more for FREE shipping
                  </p>
                  <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-green-500 transition-all duration-500" 
                      style={{ width: `${Math.min((total / freeShippingThreshold) * 100, 100)}%` }}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* List */}
            <div className="flex-grow overflow-y-auto px-6 py-4 space-y-6">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4 opacity-50 pt-20">
                  <ShoppingBag className="w-16 h-16 stroke-1 text-slate-300" />
                  <p className="text-slate-500 font-black tracking-tight uppercase">Bag is empty</p>
                  <button 
                    onClick={onClose}
                    className="text-green-600 text-sm font-black hover:underline uppercase tracking-widest"
                    id="start-shopping-btn"
                  >
                    Explore Products
                  </button>
                </div>
              ) : (
                items.map((item) => (
                  <div key={item.id} className="flex gap-4 group">
                    <div className="relative w-24 h-24 bg-slate-50 rounded-2xl overflow-hidden flex-shrink-0">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="flex-grow space-y-1">
                      <div className="flex justify-between">
                        <Link 
                          to={`/product/${item.id}`} 
                          onClick={onClose}
                          className="text-sm font-black text-slate-900 line-clamp-1 hover:text-green-600 transition-colors uppercase tracking-tight"
                        >
                          {item.name}
                        </Link>
                        <span className="text-sm font-black">Rs. {item.price * item.quantity}</span>
                      </div>
                      <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">{item.category}</p>
                      <div className="flex items-center justify-between pt-2">
                        <div className="flex items-center border border-slate-200 rounded-lg">
                          <button 
                            onClick={() => onUpdateQuantity(item.id, -1)}
                            className="p-2 hover:bg-slate-50 disabled:opacity-30"
                            disabled={item.quantity <= 1}
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-3 text-xs font-black">{item.quantity}</span>
                          <button 
                            onClick={() => onUpdateQuantity(item.id, 1)}
                            className="p-2 hover:bg-slate-50"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <button 
                          onClick={() => onRemove(item.id)}
                          className="text-slate-400 hover:text-red-500 transition-colors p-2"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="p-6 border-t bg-slate-50 space-y-4">
                <div className="flex justify-between items-center text-slate-600 mb-2 font-bold uppercase tracking-tight">
                  <span className="text-xs">Subtotal</span>
                  <span className="font-black text-slate-900">Rs. {total}</span>
                </div>
                <div className="flex justify-between items-center text-slate-600 mb-4 font-bold uppercase tracking-tight">
                  <span className="text-xs">Shipping</span>
                  <span className="text-xs font-black text-green-600">
                    {isFreeShipping ? 'FREE' : 'Rs. 200'}
                  </span>
                </div>
                <div className="flex justify-between items-center text-xl font-black border-t border-dashed border-slate-200 pt-4 mb-2 uppercase tracking-tighter">
                  <span>Grand Total</span>
                  <span>Rs. {total + (isFreeShipping ? 0 : 200)}</span>
                </div>
                
                <div className="bg-green-100/50 p-4 rounded-2xl border border-green-200 flex items-center gap-3">
                  <span className="text-lg">💵</span>
                  <div>
                    <p className="text-[10px] font-black text-green-800 uppercase tracking-[0.2em]">Fast Checkout</p>
                    <p className="text-xs font-black text-green-900">PAY CASH ON DELIVERY</p>
                  </div>
                </div>

                <button 
                  className="w-full bg-slate-900 text-white font-black py-5 rounded-[2rem] hover:bg-slate-800 transition-all transform hover:scale-[0.98] active:scale-95 shadow-xl shadow-slate-200 uppercase tracking-widest text-sm"
                  id="checkout-btn"
                >
                  Order Now (COD)
                </button>
                <p className="text-[10px] text-center text-slate-400 uppercase tracking-[0.2em] font-black">
                  Fastest Delivery Across Pakistan
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
