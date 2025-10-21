import express from 'express';
import { submitAssessment, getHistory } from '../controllers/healthController.js';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

router.post('/assessment', authenticateToken, submitAssessment);
router.get('/history', authenticateToken, getHistory);

export default router;