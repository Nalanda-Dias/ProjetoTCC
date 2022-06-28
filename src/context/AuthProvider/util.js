import { Api } from "../../services/api";

export function setUserLocalStorage(user) {
  localStorage.setItem("user", JSON.stringify(user));
}

export function getUserLocalStorage() {
  const json = localStorage.getItem("user");

  if (!json) {
    return null;
  }

  const user = JSON.parse(json);
  return user ?? null;
}

export async function LoginRequest(email, password) {
  try {
    const request = await Api.post("usuario/login", {
      email: email,
      password: password,
    });
    console.log(request);
    return request.data;
  } catch (error) {
    return null;
  }
}

export async function RegisterRequest(cliente) {
  try {
    const request = await Api.post("cliente", {
      nome: cliente.nome,
      tell: cliente.telefone,
      senha: cliente.senha,
      email: cliente.email,
    });
    
    return request.data;
  } catch (error) {
    return null;
  }
}
