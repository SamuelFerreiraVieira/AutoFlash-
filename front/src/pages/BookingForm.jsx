import React, { useState } from 'react';

const AutoFlashBooking = () => {
  const [formData, setFormData] = useState({
    nome: '',
    whatsapp: '',
    veiculo: '',
    servico: 'Revisão de Performance',
    data: '',
    horario: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados:", formData);
  };

  return (
    /* h-screen e w-screen garantem que ocupe toda a janela visível */
    <div className="h-screen w-screen flex flex-col lg:flex-row bg-gray-950 text-white overflow-hidden fixed top-0 left-0">
      
      {/* SEÇÃO ESQUERDA */}
      <div className="relative hidden lg:flex lg:w-1/2 h-full flex-col justify-between p-16 border-r border-white/5">
        <div className="absolute inset-0 z-0 bg-neutral-900">
           {/* Se quiser colocar a imagem de novo, o código está aqui:
           <div className="absolute inset-0 opacity-30 bg-cover bg-center" style={{ backgroundImage: "url('URL_DA_IMAGEM')" }} /> 
           */}
        </div>
        
        <div className="relative z-10">
          <h1 className="text-5xl font-black italic tracking-tighter uppercase leading-none">
            AUTO <span className="text-yellow-500">FLASH</span>
            <div className="h-1.5 w-16 bg-yellow-500 mt-2"></div>
          </h1>
        </div>

        <div className="relative z-10">
          <h2 className="text-[80px] font-black uppercase leading-[0.85] tracking-tighter mb-8">
            AGENDE SUA <br />
            <span className="text-yellow-500 italic">PERFORMANCE.</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-sm font-light leading-relaxed">
            Tecnologia de ponta para quem não tem tempo a perder. Sua máquina merece o cuidado Auto Flash.
          </p>
        </div>

        <div className="relative z-10 flex gap-6 text-[10px] font-bold uppercase tracking-[0.4em] text-gray-600">
          <span>SAAS EDITION 2026</span>
          <span>•</span>
          <span>SUPORTE 24/7</span>
        </div>
      </div>

      {/* SEÇÃO DIREITA (FORMULÁRIO) */}
      <div className="flex-1 h-full flex flex-col justify-center items-center p-8 lg:p-24 bg-[#0a0c10]">
        <div className="w-full max-w-md">
          <header className="mb-12">
            <h3 className="text-4xl font-bold mb-3 tracking-tight">Novo Agendamento</h3>
            <p className="text-gray-500 font-medium">Preencha os dados abaixo para reservar seu horário.</p>
          </header>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-[11px] uppercase font-black text-yellow-500 tracking-widest">Seu Nome</label>
              <input 
                type="text" name="nome" required 
                className="w-full bg-white/5 border border-white/10 p-4 rounded focus:border-yellow-500 focus:bg-white/10 outline-none transition-all placeholder-gray-700"
                placeholder="Nome completo"
                onChange={handleChange}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-[11px] uppercase font-black text-yellow-500 tracking-widest">WhatsApp</label>
                <input 
                  type="tel" name="whatsapp" required placeholder="(00) 00000-0000"
                  className="w-full bg-white/5 border border-white/10 p-4 rounded focus:border-yellow-500 outline-none transition-all"
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <label className="text-[11px] uppercase font-black text-yellow-500 tracking-widest">Veículo</label>
                <input 
                  type="text" name="veiculo" required placeholder="Modelo/Ano"
                  className="w-full bg-white/5 border border-white/10 p-4 rounded focus:border-yellow-500 outline-none transition-all"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[11px] uppercase font-black text-yellow-500 tracking-widest">Serviço</label>
              <select 
                name="servico"
                className="w-full bg-white/5 border border-white/10 p-4 rounded focus:border-yellow-500 outline-none transition-all cursor-pointer appearance-none"
                onChange={handleChange}
              >
                <option className="bg-gray-900">Revisão de Performance</option>
                <option className="bg-gray-900">Troca de Óleo / Filtros</option>
                <option className="bg-gray-900">Estética & Detailing</option>
                <option className="bg-gray-900">Manutenção Preventiva</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-[11px] uppercase font-black text-yellow-500 tracking-widest">Data</label>
                <input 
                  type="date" name="data" required 
                  className="w-full bg-white/5 border border-white/10 p-4 rounded focus:border-yellow-500 outline-none transition-all"
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <label className="text-[11px] uppercase font-black text-yellow-500 tracking-widest">Horário</label>
                <input 
                  type="time" name="horario" required 
                  className="w-full bg-white/5 border border-white/10 p-4 rounded focus:border-yellow-500 outline-none transition-all"
                  onChange={handleChange}
                />
              </div>
            </div>

            <button 
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-400 text-gray-950 font-black py-5 rounded shadow-lg shadow-yellow-500/10 uppercase tracking-[0.2em] text-sm mt-4 transition-all active:scale-[0.98]"
            >
              Confirmar Reserva
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AutoFlashBooking;                                                        