import { api } from "@/services/api";

export async function login(username, password) {
  try {
    const response = await api.post("/api/accounts/login/", { username, password });
    const data = response.data;

    // Salvar tokens no localStorage
    localStorage.setItem("access_token", data.access);
    localStorage.setItem("refresh_token", data.refresh);
    localStorage.setItem("user_role", data.role || "usuario");
    localStorage.setItem("username", data.username);

    return data;
  } catch (error) {
    // Axios lança erro para status != 2xx
    // Tenta pegar erro padrao Django Rest (detail) ou customizado (erro)
    throw new Error(error.response?.data?.erro || error.response?.data?.detail || "Erro ao logar");
  }
}

export async function logout() {
  const token = localStorage.getItem("access_token");

  // Opcional: Aqui poderíamos chamar o backend se houvesse invalidação de token (blacklist)


  // Limpar tokens do localStorage
  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");
  localStorage.removeItem("user_role");
  localStorage.removeItem("username");
}

export function getAuthToken() {
  return localStorage.getItem("access_token");
}

export function isAuthenticated() {
  return !!localStorage.getItem("access_token");
}

export function getUserRole() {
  return localStorage.getItem("user_role");
}

