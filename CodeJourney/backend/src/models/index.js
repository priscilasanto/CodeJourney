import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    progress: { type: Map, of: Number },
});

const moduleSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    exercises: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Exercise' }],
});

const exerciseSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    module: { type: mongoose.Schema.Types.ObjectId, ref: 'Module' },
});

const gameSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    url: { type: String, required: true },
});

const leaderboardSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    score: { type: Number, required: true },
});

const User = mongoose.model('User', userSchema);
const Module = mongoose.model('Module', moduleSchema);
const Exercise = mongoose.model('Exercise', exerciseSchema);
const Game = mongoose.model('Game', gameSchema);
const Leaderboard = mongoose.model('Leaderboard', leaderboardSchema);

export { User, Module, Exercise, Game, Leaderboard };