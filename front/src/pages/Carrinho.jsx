import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Trash2, 
  Plus, 
  Minus, 
  ArrowLeft, 
  CreditCard, 
  Truck, 
  ShieldCheck,
  ChevronRight
} from "lucide-react";

export default function Carrinho() {
  // Estado simulado de itens no carrinho (você integrará isso com sua lógica de Context/Redux depois)
  const [itens, setItens] = useState([
    { id: 1, nome: "Óleo 5W30 Sintético", preco: 45.90, qtd: 2, cat: "Óleos" },
    { id: 2, nome: "Galão Gasolina 5L", preco: 85.00, qtd: 1, cat: "Galões" },
    { id: 6, nome: "Bateria Moura 60Ah", preco: 450.00, qtd: 1, cat: "Elétrica" },
  ]);

  const subtotal = itens.reduce((acc, item) => acc + (item.preco * item.qtd), 0);
  const taxaEntrega = 15.00;
  const total = subtotal + taxaEntrega;

  const alterarQtd = (id, delta) => {
    setItens(prev => prev.map(item => 
      item.id === id ? { ...item, qtd: Math.max(1, item.qtd + delta) } : item
    ));
  };

  const removerItem = (id) => {
    setItens(prev => prev.filter(item => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 pt-32 pb-20 px-8 md:px-16">
      {/* HEADER DA PÁGINA */}
      <div className="max-w-7xl mx-auto mb-16">
        <button 
          onClick={() => window.history.back()}
          className="flex items-center gap-2 text-zinc-400 hover:text-red-600 transition-colors uppercase text-[10px] font-black tracking-[0.3em] mb-4"
        >
          <ArrowLeft size={14} /> Voltar para a Loja
        </button>
        <h1 className="text-7xl md:text-9xl font-black uppercase italic leading-none tracking-tighter">
          SEU <span className="text-red-600">PEDIDO</span>
        </h1>
        <div className="flex items-center gap-4 mt-4">
          <span className="h-[2px] w-20 bg-red-600"></span>
          <p className="text-zinc-500 font-mono text-xs uppercase tracking-widest">
            Itaitinga Hub // Ready for Dispatch
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
        
        {/* LISTA DE ITENS (ESQUERDA) */}
        <div className="flex-[2]">
          <div className="border-t-4 border-black">
            <AnimatePresence>
              {itens.length > 0 ? (
                itens.map((item) => (
                  <motion.div 
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    className="flex flex-col md:flex-row items-center justify-between py-10 border-b border-zinc-100 group"
                  >
                    <div className="flex flex-col mb-6 md:mb-0">
                      <span className="text-red-600 font-mono text-[10px] uppercase tracking-widest mb-1">{item.cat}</span>
                      <h3 className="text-3xl font-black uppercase italic group-hover:text-red-600 transition-colors">
                        {item.nome}
                      </h3>
                      <p className="text-zinc-400 font-mono text-xs mt-1 italic">Ref: AF-00{item.id}_2026</p>
                    </div>

                    <div className="flex items-center gap-12">
                      {/* CONTADOR */}
                      <div className="flex items-center border-2 border-zinc-100 p-1">
                        <button 
                          onClick={() => alterarQtd(item.id, -1)}
                          className="w-10 h-10 flex items-center justify-center hover:bg-zinc-100 transition-colors"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="w-12 text-center font-black italic text-xl">{item.qtd}</span>
                        <button 
                          onClick={() => alterarQtd(item.id, 1)}
                          className="w-10 h-10 flex items-center justify-center hover:bg-zinc-100 transition-colors"
                        >
                          <Plus size={16} />
                        </button>
                      </div>

                      {/* PREÇO */}
                      <div className="text-right min-w-[120px]">
                        <p className="text-zinc-400 text-[10px] uppercase font-bold tracking-widest">Subtotal</p>
                        <p className="text-2xl font-black italic tracking-tighter">
                          R$ {(item.preco * item.qtd).toFixed(2).replace('.', ',')}
                        </p>
                      </div>

                      {/* REMOVER */}
                      <button 
                        onClick={() => removerItem(item.id)}
                        className="text-zinc-300 hover:text-red-600 transition-colors"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="py-20 text-center">
                  <p className="text-zinc-400 uppercase font-black italic text-2xl">O seu carrinho está vazio</p>
                  <button className="mt-6 text-red-600 font-black uppercase tracking-widest text-xs border-b-2 border-red-600 pb-1">
                    Voltar para produtos
                  </button>
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* RESUMO (DIREITA) */}
        <div className="flex-1">
          <div className="bg-zinc-900 text-white p-10 sticky top-32 skew-x-[-2deg]">
            <div className="skew-x-[2deg]">
              <h4 className="text-2xl font-black uppercase italic mb-8 border-b border-white/10 pb-4">Checkout</h4>
              
              <div className="space-y-4 mb-10">
                <div className="flex justify-between text-zinc-400 font-mono text-xs uppercase tracking-widest">
                  <span>Itens Subtotal</span>
                  <span className="text-white font-bold">R$ {subtotal.toFixed(2).replace('.', ',')}</span>
                </div>
                <div className="flex justify-between text-zinc-400 font-mono text-xs uppercase tracking-widest">
                  <span>Taxa de Entrega (Flash)</span>
                  <span className="text-white font-bold">R$ {taxaEntrega.toFixed(2).replace('.', ',')}</span>
                </div>
              </div>

              <div className="flex justify-between items-end mb-10">
                <span className="text-zinc-500 font-black uppercase italic text-sm tracking-[0.3em]">Total Final</span>
                <span className="text-5xl font-black italic text-red-600 tracking-tighter">
                  R$ {total.toFixed(2).replace('.', ',')}
                </span>
              </div>

              <div className="space-y-4">
                <button className="w-full bg-red-600 py-6 font-black uppercase tracking-[0.2em] italic hover:bg-white hover:text-red-600 transition-all flex items-center justify-center gap-3">
                  Finalizar Pedido <ChevronRight size={18} />
                </button>
                <div className="flex flex-col gap-4 py-6 border-t border-white/10 mt-6">
                   <div className="flex items-center gap-3 text-[10px] text-zinc-400 uppercase font-bold tracking-widest">
                      <CreditCard size={14} className="text-red-600" /> Cartão, Pix ou Dinheiro
                   </div>
                   <div className="flex items-center gap-3 text-[10px] text-zinc-400 uppercase font-bold tracking-widest">
                      <Truck size={14} className="text-red-600" /> Entrega em Itaitinga: 20-40 min
                   </div>
                   <div className="flex items-center gap-3 text-[10px] text-zinc-400 uppercase font-bold tracking-widest">
                      <ShieldCheck size={14} className="text-red-600" /> Garantia de Qualidade Auto Flash
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}