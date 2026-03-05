import React, { useState, useEffect } from "react";

export default function Inicial() {
  const [isScrolled, setIsScrolled] = useState(false);

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
      icon: "https://cdn-icons-png.flaticon.com/512/483/483497.png",
      acao: () => window.location.href = "/pedido"
    },
    {
      title: "Lubrificantes e Óleo",
      desc: "Ver Catálogo",
      icon: "https://cdn-icons-png.flaticon.com/512/2933/2933306.png", 
      acao: () => console.log("Abrir catálogo")
    },
    {
      title: "Serviços Mecânicos",
      desc: "Agendar",
      icon: "https://cdn-icons-png.flaticon.com/512/2092/2092041.png",
      acao: () => alert("Agendamento clicado!")
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans w-full overflow-x-hidden text-gray-900">
      
      {/* 0. NAVBAR FULL WIDTH */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${
        isScrolled 
          ? "bg-white border-gray-200 py-3 shadow-sm" 
          : "bg-transparent border-white/10 py-5"
      }`}>
        <div className="w-full px-12 flex items-center justify-between">
          
          <div className="flex items-center gap-10">
            <a href="/" className="flex items-center">
              <img 
                src="/autoflash.jpg" 
                alt="AutoFlash" 
                className={`transition-all duration-500 object-contain rounded-full shadow-lg ${
                  isScrolled ? "h-10 w-10" : "h-14 w-14"
                }`} 
              />
            </a>

            <div className={`h-8 w-[1px] ${isScrolled ? "bg-gray-300" : "bg-white/30"} hidden lg:block`}></div>

            <ul className={`hidden lg:flex gap-8 text-[13px] font-medium tracking-tight ${
              isScrolled ? "text-gray-900" : "text-white"
            }`}>
              <li className="hover:border-b-2 hover:border-[#1c69d4] cursor-pointer pb-1 transition-all">Modelos</li>
              <li className="flex items-center gap-1 hover:text-[#1c69d4] cursor-pointer transition-colors">
                Serviços <span className="text-[10px]">▼</span>
              </li>
              <li className="hover:text-[#1c69d4] cursor-pointer transition-colors">Compre Online</li>
              <li className="hover:text-[#1c69d4] cursor-pointer transition-colors">Sobre a AutoFlash</li>
            </ul>
          </div>

          <div className={`flex items-center gap-6 text-xl ${
            isScrolled ? "text-gray-700" : "text-white"
          }`}>
            <button className="hover:text-[#1c69d4] transition-colors">👤</button>
            <button className="hover:text-[#1c69d4] transition-colors">🛒</button>
            <button className="hover:text-[#1c69d4] transition-colors">📍</button>
          </div>
        </div>
      </nav>

      {/* 1. HERO SECTION FULL WIDTH */}
      <main className="relative w-full h-screen overflow-hidden bg-zinc-900">
        <img
          src="McQueen.webp"
          alt="Destaque Auto Flash"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>

        <div className="absolute inset-0 flex flex-col justify-center px-12 md:px-24 pt-20">
          <div className="w-full">
            <p className="text-white text-sm font-bold tracking-[0.2em] mb-2 uppercase">Sejam Bem-Vindos</p>
            <h1 className="text-white text-7xl md:text-[10rem] font-light mb-6 tracking-tighter uppercase leading-none">
              AUTO <span className="font-bold text-red-600">FLASH</span>
            </h1>
            <div className="border-l-4 border-red-600 pl-8 my-10 text-white text-2xl md:text-3xl font-light max-w-2xl">
              Energia que vai até você. Onde quer que esteja.
            </div>
            <button className="bg-[#1c69d4] hover:bg-white hover:text-[#1c69d4] text-white font-bold py-5 px-16 transition-all uppercase tracking-widest text-sm">
              Descubra agora
            </button>
          </div>
        </div>
      </main>

      {/* 2. SEÇÃO SOBRE A EMPRESA FULL WIDTH */}
      <section className="py-32 bg-[#ffffff] w-full px-12 md:px-24">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
            <h3 className="text-[#1c69d4] font-bold text-xs uppercase tracking-[0.3em] mb-4">Nossa Essência</h3>
            <h2 className="text-gray-900 text-5xl md:text-7xl font-light leading-tight mb-8 tracking-tighter">
              Levando a <span className="font-bold text-[#1c69d4]">Energia</span> onde você estiver.
            </h2>
            <div className="space-y-6 text-gray-600 text-xl font-light leading-relaxed max-w-4xl">
              <p>A <span className="font-medium text-gray-900">AutoFlash</span> nasceu da necessidade de liberdade. Somos o parceiro que garante que sua jornada nunca seja interrompida por falta de energia.</p>
              <p>Inspirados pela excelência automotiva mundial, entregamos agilidade e confiança no motorista moderno.</p>
            </div>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-gray-200 pt-10">
              <div>
                <p className="text-gray-900 font-bold text-5xl tracking-tighter">24/7</p>
                <p className="text-gray-500 text-sm uppercase tracking-widest mt-2">Disponibilidade Total</p>
              </div>
              <div>
                <p className="text-gray-900 font-bold text-5xl tracking-tighter">15 min</p>
                <p className="text-gray-500 text-sm uppercase tracking-widest mt-2">Tempo Médio de Chegada</p>
              </div>
              <div>
                <p className="text-gray-900 font-bold text-5xl tracking-tighter">100%</p>
                <p className="text-gray-500 text-sm uppercase tracking-widest mt-2">Segurança Certificada</p>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 relative w-full h-full min-h-[500px]">
            <img 
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070" 
              alt="Performance" 
              className="w-full h-[600px] object-cover shadow-2xl grayscale-[0.3] hover:grayscale-0 transition-all duration-1000"
            />
          </div>
        </div>
      </section>

      {/* 3. SEÇÃO DE SERVIÇOS FULL WIDTH */}
      <section className="py-32 bg-white w-full border-b border-gray-100 px-12 md:px-24">
        <div className="w-full">
          <h2 className="text-4xl font-light text-gray-900 mb-24 tracking-tight uppercase text-center">
            Encontre o <span className="font-bold">serviço ideal</span> para você.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20 w-full">
            {servicosRapidos.map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center group border-r border-gray-100 last:border-0 p-8">
                <div className="w-24 h-24 mb-10 flex items-center justify-center transition-transform group-hover:scale-110 duration-500">
                  <img src={item.icon} alt={item.title} className="w-full h-full object-contain" />
                </div>
                <p className="text-gray-900 font-bold text-2xl mb-8 tracking-tighter uppercase">{item.title}</p>
                <button 
                  onClick={item.acao}
                  className="w-full max-w-xs bg-red-600 border-2 border-black text-white hover:bg-black hover:border-black font-black text-sm uppercase tracking-widest px-10 py-4 transition-all active:scale-95 shadow-lg"
                >
                  {item.desc}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SEÇÃO DE CONTATO FULL WIDTH */}
      <section className="bg-zinc-900 py-32 w-full px-12 md:px-24 flex flex-col items-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative h-[500px] bg-zinc-800 overflow-hidden group">
             <img src="https://images.unsplash.com/photo-1486006920555-c77dcf18193c?q=80&w=1914" className="w-full h-full object-cover opacity-30 group-hover:opacity-60 transition-all duration-700" alt="Equipe" />
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <span className="text-red-600 text-xl font-bold tracking-[0.5em] block mb-4 uppercase">Itaitinga - CE</span>
                  <h2 className="text-white text-7xl font-black uppercase italic leading-none">CONTATO <br/> <span className="text-red-600">DIRETO</span></h2>
                </div>
             </div>
          </div>
          <div className="space-y-12">
            <div className="bg-white/5 p-16 border-l-[12px] border-yellow-400 backdrop-blur-md">
              <p className="text-sm font-bold text-yellow-400 uppercase tracking-[0.4em] mb-6">Central de Atendimento 24h</p>
              <div className="space-y-6">
                <p className="text-5xl md:text-6xl font-light hover:text-red-600 transition-colors cursor-pointer tracking-tighter">(85) 3513-2013</p>
                <p className="text-5xl md:text-6xl font-light hover:text-red-600 transition-colors cursor-pointer tracking-tighter">(85) 99175-6724</p>
              </div>
            </div>
            <div className="text-zinc-400 font-light text-2xl leading-relaxed">
              <p className="text-white font-bold uppercase tracking-widest text-sm mb-2">Localização Estratégica</p>
              Rua João Ferreira Viana, 325, Centro, Itaitinga - CE.<br/>
              <span className="text-zinc-500 italic text-xl">Ao lado da Caixa Econômica Federal.</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}