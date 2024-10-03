// Створюємо axios інстанс для всіх запитів з baseURL
import axios from "axios";

const customInstance = axios.create({
  baseURL: "https://interview-api-8icc.onrender.com/", // Вказуємо базовий URL
  headers: {
    "Content-Type": "application/json",
  },
});

// Функція, яка динамічно додає токен у заголовки
customInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`; // Додаємо токен до кожного запиту
  }
  return config;
});

export default customInstance;
