import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // URL base da API

// Função para registrar um novo usuário
export const registerUser = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/auth/register`, userData);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

// Função para fazer login de um usuário
export const loginUser = async (credentials) => {
    try {
        const response = await axios.post(`${API_URL}/auth/login`, credentials);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

// Função para recuperar dados do usuário
export const getUserData = async (userId) => {
    try {
        const response = await axios.get(`${API_URL}/users/${userId}`);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

// Função para atualizar o progresso do usuário
export const updateUserProgress = async (userId, progressData) => {
    try {
        const response = await axios.put(`${API_URL}/users/${userId}/progress`, progressData);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

// Função para recuperar exercícios
export const getExercises = async () => {
    try {
        const response = await axios.get(`${API_URL}/exercises`);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

// Função para recuperar jogos
export const getGames = async () => {
    try {
        const response = await axios.get(`${API_URL}/games`);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};