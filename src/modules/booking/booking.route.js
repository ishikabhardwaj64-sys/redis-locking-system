import express from 'express';
import { bookSeat } from './booking.controller.js'; // MUST have the .js extension

const router = express.Router();
router.post('/book', bookSeat);
export default router;