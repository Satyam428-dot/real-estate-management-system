import axios from "axios";
import { JAVA_BACKEND_URL } from "../utils/config";

const api = axios.create({ baseURL: JAVA_BACKEND_URL });

api.interceptors.request.use( config => {
    const token = localStorage.getItem("token");
    if(token){
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export const favoriteApi = {
    ids: () => api.get("/favourites/ids"),
    list: () => api.get("/favorites"),
    save: (propertyId) => api.post(`/favourites/${propertyId}`),
    remove: (propertyId) => api.delete(`/favourites/${propertyId}`),
};

export const profileApi = {
    get: () => api.get("/users/me"),
    update: (data) => api.put("/users/me", data),
};

export default api;