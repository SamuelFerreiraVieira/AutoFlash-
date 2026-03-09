import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";

// Import da única página mantida
import Login from "./pages/inicial";
import Carrinho from "./pages/Carrinho";
import BookingForm from "./pages/BookingForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rota de Login como rota principal */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/carrinho" element={<Carrinho/>} />
        <Route path="/agendamento" element={<BookingForm/>}/>
        
        {/* Rota de fallback (opcional: redireciona qualquer erro para o login) */}
        <Route path="*" element={<Login />} />
      </Routes>

      <Toaster richColors position="bottom-right" />
    </BrowserRouter>
  );
}

export default App;