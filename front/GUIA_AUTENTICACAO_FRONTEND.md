/**
 * GUIA: Como Usar Autenticação no Frontend
 * 
 * Este arquivo mostra exemplos de como proteger rotas e fazer requisições autenticadas
 */

// ============================================================================
// 1. PROTEGER UMA ROTA (Exemplo)
// ============================================================================

import { useProtectedRoute, fetchWithAuth } from "../hooks/useAuth";

function PaginaAdministrador() {
  const { isLoading, isAuthorized, role } = useProtectedRoute(["admin", "revisor"]);

  if (isLoading) return <div>Carregando...</div>;
  if (!isAuthorized) return <div>Acesso negado</div>;

  return (
    <div>
      <h1>Painel do {role}</h1>
      {/* Seu conteúdo aqui */}
    </div>
  );
}

// ============================================================================
// 2. FAZER REQUISIÇÃO AUTENTICADA (Exemplo)
// ============================================================================

async function buscarCheckins() {
  try {
    const data = await fetchWithAuth("http://localhost:8000/api/checkins/");
    console.log("Checkins:", data);
  } catch (error) {
    console.error("Erro:", error.message);
  }
}

// ============================================================================
// 3. USAR HOOK DE FETCH AUTENTICADO (Exemplo)
// ============================================================================

import { useAuthenticatedFetch } from "../hooks/useAuth";

function ListaCheckins() {
  const { data, loading, error } = useAuthenticatedFetch(
    "http://localhost:8000/api/checkins/"
  );

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>Erro: {error}</div>;

  return (
    <div>
      {data && data.map((checkin) => (
        <div key={checkin.id}>{checkin.nome}</div>
      ))}
    </div>
  );
}

// ============================================================================
// 4. FAZER LOGOUT
// ============================================================================

import { logout } from "../logicaLogin";
import { useNavigate } from "react-router-dom";

function ButtonLogout() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return <button onClick={handleLogout}>Sair</button>;
}

// ============================================================================
// 5. VERIFICAR SE ESTÁ AUTENTICADO (Em qualquer lugar)
// ============================================================================

import { isAuthenticated, getUserRole } from "../logicaLogin";

function Navbar() {
  if (!isAuthenticated()) {
    return <div>Você não está logado</div>;
  }

  const role = getUserRole();
  return <div>Bem-vindo {role}</div>;
}

export { PaginaAdministrador, buscarCheckins, ListaCheckins, ButtonLogout, Navbar };
