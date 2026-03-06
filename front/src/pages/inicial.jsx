import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Fuel, 
  Droplets, 
  Wrench, 
  ShoppingCart, 
  User, 
  MapPin, 
  Phone, 
  MessageSquare,
  ArrowRight
} from "lucide-react";

export default function Inicial() {
  const [isScrolled, setIsScrolled] = useState(false);

  const [paginaAtual, setPaginaAtual] = useState('home');


if (paginaAtual === 'carrinho') return <Carrinho setPagina={setPaginaAtual} />;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const servicosRapidos = [
    {
      title: "Entrega de Combustível",
      desc: "Pedir Agora",
      icon: <Fuel size={48} strokeWidth={1.5} />,
      acao: () => (window.location.href = "/pedido"),
    },
    {
      title: "Lubrificantes e Óleo",
      desc: "Ver Catálogo",
      icon: <Droplets size={48} strokeWidth={1.5} />,
      acao: () => document.getElementById('catalogo').scrollIntoView({ behavior: 'smooth' }),
    },
    {
      title: "Serviços Mecânicos",
      desc: "Agendar",
      icon: <Wrench size={48} strokeWidth={1.5} />,
      acao: () => alert("Agendamento clicado!"),
    },
  ];

  const produtosDestaque = [
    { id: 1, nome: "Óleo 5W30 Sintético", preco: "45,90", cat: "Óleos" },
    { id: 2, nome: "Galão Gasolina 5L", preco: "85,00", cat: "Galões" },
    { id: 3, nome: "Fluido de Freio DOT4", preco: "29,90", cat: "Fluidos" },
    { id: 4, nome: "Limpa Parabrisa", preco: "15,00", cat: "Manutenção" },
    { id: 5, nome: "Aditivo de Radiador", preco: "35,00", cat: "Químicos" },
    { id: 6, nome: "Bateria Moura 60Ah", preco: "450,00", cat: "Elétrica" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans w-full overflow-x-hidden text-gray-900">
      
      {/* 0. NAVBAR */}
      <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 border-b ${
        isScrolled ? "bg-white/95 backdrop-blur-md border-gray-200 py-3 shadow-md" : "bg-transparent border-white/10 py-6"
      }`}>
        <div className="w-full px-8 md:px-16 flex items-center justify-between">
          <div className="flex items-center gap-12">
            <a href="/" className="flex items-center group">
              <img 
                src="/autoflash.jpg" 
                alt="AutoFlash" 
                className={`transition-all duration-500 rounded-full shadow-lg group-hover:rotate-12 ${isScrolled ? "h-10 w-10" : "h-16 w-16"}`} 
              />
            </a>
            <ul className={`hidden lg:flex gap-10 text-[12px] font-black uppercase tracking-[0.2em] ${isScrolled ? "text-gray-900" : "text-white"}`}>
              <li className="hover:text-red-600 cursor-pointer transition-all border-b-2 border-transparent hover:border-red-600 italic">Modelos</li>
              <li onClick={() => document.getElementById('servicos').scrollIntoView({ behavior: 'smooth' })} className="hover:text-red-600 cursor-pointer transition-all border-b-2 border-transparent hover:border-red-600 italic">Serviços</li>
              <li onClick={() => document.getElementById('catalogo').scrollIntoView({ behavior: 'smooth' })} className="hover:text-red-600 cursor-pointer transition-all border-b-2 border-transparent hover:border-red-600 italic">Loja Virtual</li>
              <li onClick={() => document.getElementById('sobre').scrollIntoView({ behavior: 'smooth' })} className="hover:text-red-600 cursor-pointer transition-all border-b-2 border-transparent hover:border-red-600 italic">Sobre Nós</li>
            </ul>
          </div>
          <div className={`flex items-center gap-8 ${isScrolled ? "text-gray-700" : "text-white"}`}>
            
            <button className="hover:text-red-600 transition-colors relative" >
              
                <ShoppingCart size={24} strokeWidth={2} />
                <span className="absolute -top-2 -right-2 bg-red-600 text-[10px] text-white rounded-full w-5 h-5 flex items-center justify-center font-black">3</span>
            </button>
          </div>
        </div>
      </nav>

      {/* 1. HERO SECTION */}
      <main className="relative w-full h-screen overflow-hidden bg-black">
        <motion.div 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
        >
            <img
              src="McQueen.webp"
              className="w-full h-full object-cover opacity-70"
              alt="Background"
            />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent"></div>

        <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-24">
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="text-red-600 text-xl font-black tracking-[0.5em] mb-6 uppercase italic">Performance & Agilidade</p>
            <h1 className="text-white text-7xl md:text-[12rem] font-black mb-4 tracking-tighter uppercase leading-[0.85] italic">
              AUTO <br/> <span className="text-red-600 not-italic">FLASH</span>
            </h1>
            <div className="border-l-8 border-red-600 pl-10 my-10 text-white text-2xl md:text-4xl font-light max-w-4xl uppercase italic leading-tight">
              A energia que move Itaitinga <br/> <span className="font-bold text-red-500 uppercase tracking-widest text-lg">Disponível 24 horas por dia</span>
            </div>
            <div className="flex gap-6">
                <button className="bg-red-600 hover:bg-white hover:text-red-600 text-white font-black py-6 px-16 transition-all uppercase tracking-widest text-sm italic skew-x-[-12deg]">
                    <span className="inline-block skew-x-[12deg]">Pedir Agora</span>
                </button>
                <button onClick={() => document.getElementById('servicos').scrollIntoView({ behavior: 'smooth' })} className="border-2 border-white hover:bg-white hover:text-black text-white font-black py-6 px-16 transition-all uppercase tracking-widest text-sm italic skew-x-[-12deg]">
                    <span className="inline-block skew-x-[12deg]">Ver Serviços</span>
                </button>
            </div>
          </motion.div>
        </div>
      </main>

      {/* 1.1 SOBRE & OBJETIVO */}
      <section id="sobre" className="w-full bg-white py-32 px-8 md:px-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
          <div className="flex-1">
            <h3 className="text-red-600 font-bold text-lg uppercase tracking-[0.4em] mb-4">The Mission</h3>
            <h2 className="text-9xl font-black uppercase italic leading-[0.8] text-gray-900 mb-10">
              NOSSO <br /> <span className="text-gray-200">FOCO</span>
            </h2>
            <div className="space-y-6 text-xl text-gray-600 font-light leading-relaxed">
              <p>
                A <strong className="text-gray-900 font-black italic">AUTO FLASH</strong> nasceu da necessidade de movimento constante. Localizados no coração de Itaitinga, não somos apenas um ponto de parada, mas o combustível para quem não pode esperar.
              </p>
              <p>
                Nosso objetivo com este projeto digital é eliminar as barreiras entre a sua necessidade e a solução. Através da tecnologia, levamos a eficiência da pista para a palma da sua mão.
              </p>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-100 p-10 flex flex-col justify-center border-l-4 border-red-600">
                <span className="text-4xl font-black text-gray-900 italic">24h</span>
                <span className="text-xs uppercase tracking-widest font-bold text-gray-500">Operação Total</span>
              </div>
              <div className="bg-gray-900 p-10 flex flex-col justify-center">
                <span className="text-4xl font-black text-red-600 italic">100%</span>
                <span className="text-xs uppercase tracking-widest font-bold text-gray-400">Digitalizado</span>
              </div>
              <div className="col-span-2 bg-zinc-100 p-12 italic border border-gray-200">
                <p className="text-gray-900 font-medium italic">"Transformar a manutenção automotiva em uma experiência rápida e transparente."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CATÁLOGO EDITORIAL */}
      <section id="catalogo" className="w-full bg-zinc-900 pt-32 pb-0">
        <div className="px-8 md:px-16 flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="text-left">
            <h3 className="text-red-600 font-bold text-lg uppercase tracking-[0.3em] mb-4">Inventory v2.0</h3>
            <h2 className="text-white text-6xl md:text-8xl font-black uppercase italic leading-none">SUPRIMENTOS <br/> <span className="text-zinc-700">TÉCNICOS</span></h2>
          </div>
          <div className="text-right hidden md:block">
            <p className="text-zinc-500 font-mono text-xs uppercase mb-2">System Status: Active</p>
            <div className="w-32 h-1 bg-red-600 ml-auto"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full border-t border-zinc-800">
          {produtosDestaque.map((prod) => (
            <motion.div 
              key={prod.id}
              whileHover={{ backgroundColor: "#18181b" }}
              className="relative group p-12 border-b border-r border-zinc-800 transition-all duration-300 cursor-pointer overflow-hidden h-[450px] flex flex-col justify-between"
            >
              <span className="absolute -bottom-10 -right-5 text-[15rem] font-black text-zinc-800/20 italic group-hover:text-red-600/10 transition-colors pointer-events-none">
                0{prod.id}
              </span>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-8 h-[1px] bg-red-600"></span>
                  <span className="text-red-500 font-mono text-xs uppercase tracking-[0.3em]">{prod.cat}</span>
                </div>
                <h4 className="text-white text-4xl md:text-5xl font-black uppercase italic leading-none mb-4 group-hover:text-red-500 transition-colors">
                  {prod.nome}
                </h4>
                <p className="text-zinc-500 font-mono text-xs uppercase tracking-widest">
                  High Performance Grade // 2026_AF
                </p>
              </div>

              <div className="relative z-10 flex flex-col items-start gap-6">
                <div className="flex flex-col">
                  <span className="text-zinc-600 text-[10px] uppercase font-bold tracking-widest mb-1">Preço Unitário</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-zinc-400 text-lg font-light">R$</span>
                    <span className="text-white text-6xl font-black italic tracking-tighter group-hover:scale-105 transition-transform origin-left">
                      {prod.preco}
                    </span>
                  </div>
                </div>
                <button className="relative overflow-hidden group/btn px-10 py-4 border border-white/10 text-white text-[10px] font-black uppercase tracking-[0.3em] hover:border-red-600 transition-colors flex items-center gap-3">
                  <span className="relative z-10">Comprar</span>
                  <ShoppingCart size={14} className="relative z-10" />
                  <div className="absolute inset-0 bg-red-600 translate-x-[-100%] group-hover/btn:translate-x-0 transition-transform duration-300"></div>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. SERVIÇOS TELA TODA */}
      <section id="servicos" className="w-full bg-white flex flex-col lg:flex-row h-auto lg:h-[600px]">
        {servicosRapidos.map((item, index) => (
          <motion.div 
            whileHover={{ flex: 1.5 }}
            key={index} 
            className="flex-1 relative group overflow-hidden border-r border-gray-100 last:border-0 transition-all duration-700 cursor-pointer min-h-[400px]"
          >
            <div className="absolute inset-0 bg-zinc-100 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            <div className="relative z-10 h-full flex flex-col items-center justify-center p-12 text-center">
              <div className="mb-10 text-gray-400 group-hover:text-red-600 group-hover:rotate-12 transition-all duration-500">
                {item.icon}
              </div>
              <h3 className="text-gray-900 font-black text-3xl mb-8 uppercase italic">{item.title}</h3>
              <button 
                onClick={item.acao}
                className="bg-black text-white font-black text-xs uppercase tracking-widest px-12 py-5 group-hover:bg-red-600 transition-colors italic skew-x-[-10deg] flex items-center gap-3"
              >
                <span className="inline-block skew-x-[10deg]">{item.desc}</span>
                <ArrowRight size={16} className="skew-x-[10deg]" />
              </button>
            </div>
          </motion.div>
        ))}
      </section>

      {/* 4. CONTATO */}
      <section className="bg-black w-full relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-red-600 skew-x-[15deg] translate-x-32 hidden lg:block"></div>
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 w-full min-h-[600px]">
          <div className="flex flex-col justify-center px-8 md:px-24 py-20">
            <h2 className="text-white text-7xl md:text-9xl font-black uppercase italic leading-[0.8] mb-12">
              ESTAMOS <br /> <span className="text-red-600">ONLINE</span>
            </h2>
            <div className="space-y-8">
                <div className="flex flex-col">
                    <div className="flex items-center gap-2 mb-2 text-zinc-500">
                      <Phone size={16} />
                      <span className="font-bold uppercase tracking-[0.4em] text-sm">Telefone Principal</span>
                    </div>
                    <a href="tel:8535132013" className="text-white text-5xl hover:text-red-600 transition-colors tracking-tighter italic font-black">(85) 3513-2013</a>
                </div>
                <div className="flex flex-col">
                    <div className="flex items-center gap-2 mb-2 text-zinc-500">
                      <MessageSquare size={16} />
                      <span className="font-bold uppercase tracking-[0.4em] text-sm">WhatsApp 24h</span>
                    </div>
                    <a href="https://wa.me/5585991756724" className="text-white text-5xl hover:text-red-600 transition-colors tracking-tighter italic font-black">(85) 99175-6724</a>
                </div>
            </div>
          </div>
          <div className="flex flex-col justify-center px-8 md:px-24 py-20 text-white">
            <div className="bg-black/20 backdrop-blur-xl p-12 border-2 border-white/10">
                <div className="flex items-center gap-4 mb-6">
                  <MapPin className="text-red-600" size={32} />
                  <h4 className="text-3xl font-black uppercase italic">Localização</h4>
                </div>
                <p className="text-xl text-zinc-300 leading-relaxed mb-10 font-light italic">
                  Rua João Ferreira Viana, 325, Centro, Itaitinga - CE.<br/>
                  <span className="text-white font-bold italic mt-2 block tracking-widest uppercase text-sm">Ao lado da Caixa Econômica Federal.</span>
                </p>
                <button className="w-full py-6 bg-white text-black font-black uppercase tracking-widest hover:bg-red-600 hover:text-white transition-all italic skew-x-[-10deg]">
                    <span className="inline-block skew-x-[10deg]">Abrir Mapa GPS</span>
                </button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full bg-zinc-950 py-10 border-t border-white/5 px-16 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-zinc-600 text-[10px] uppercase font-bold tracking-widest">© 2026 Auto Flash - Itaitinga/CE. Performance 24 Horas.</p>
        <div className="flex gap-10 text-zinc-600 text-[10px] font-bold uppercase tracking-widest italic">
            <span className="hover:text-white cursor-pointer transition-colors">Privacidade</span>
            <span className="hover:text-white cursor-pointer transition-colors">Termos</span>
            <span className="hover:text-white cursor-pointer transition-colors">Suporte</span>
        </div>
      </footer>
    </div>
  );
}