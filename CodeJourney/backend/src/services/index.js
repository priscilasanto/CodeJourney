import User from '../models/User';
import Module from '../models/Module';
import Exercise from '../models/Exercise';
import Game from '../models/Game';
import Leaderboard from '../models/Leaderboard';

// Função para validar dados de usuário
export const validateUserData = (data) => {
    // Implementar validação de dados
};

// Função para criar um novo usuário
export const createUser = async (userData) => {
    const user = new User(userData);
    return await user.save();
};

// Função para encontrar um usuário por ID
export const findUserById = async (userId) => {
    return await User.findById(userId);
};

// Função para atualizar progresso do usuário
export const updateUserProgress = async (userId, progressData) => {
    return await User.findByIdAndUpdate(userId, { progress: progressData }, { new: true });
};

// Função para obter módulos
export const getModules = async () => {
    return await Module.find();
};

// Função para obter exercícios
export const getExercises = async (moduleId) => {
    return await Exercise.find({ moduleId });
};

// Função para obter jogos
export const getGames = async () => {
    return await Game.find();
};

// Função para obter leaderboard
export const getLeaderboard = async () => {
    return await Leaderboard.find().sort({ score: -1 });
};