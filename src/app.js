import express from 'express';
import bookingRoutes from './modules/booking/booking.routes.js';

const app = express();
app.use(express.json());

app.use('/api/bookings', bookingRoutes);

export default app;
