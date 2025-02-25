import express from 'express';
import userRoutes from './userRoutes';
import progressRoutes from './progressRoutes';
import exerciseRoutes from './exerciseRoutes';
import gameRoutes from './gameRoutes';

const router = express.Router();

router.use('/users', userRoutes);
router.use('/progress', progressRoutes);
router.use('/exercises', exerciseRoutes);
router.use('/games', gameRoutes);

export default router;