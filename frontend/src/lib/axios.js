import axios from "axios";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

// Tùy chỉnh NProgress (ví dụ: tắt vòng quay nhỏ góc phải)
NProgress.configure({ showSpinner: false, speed: 400, minimum: 0.1 });

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5001/api",
});

// Bật NProgress khi bắt đầu request
api.interceptors.request.use((config) => {
  NProgress.start();
  return config;
});

// Tắt NProgress khi có response (thành công hoặc lỗi)
api.interceptors.response.use(
  (response) => {
    NProgress.done();
    return response;
  },
  (error) => {
    NProgress.done();
    return Promise.reject(error);
  }
);

export default api;
