// import { apiRequest } from "../Api";

// export const login = (password: string) =>
//   apiRequest({
//     method: "POST",
//     url: "auth/login",
//     data: { password },
//   });

export const login = (password: string) =>
  fetch(`${import.meta.env.VITE_API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      password,
    }),
  });
