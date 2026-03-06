import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
    resourceId: { type: String, required: true },
    userId: { type: String, required: true },
    timestamp: { type: Date, default: Date.now }
});

const Booking = mongoose.model('Booking', bookingSchema);
export default Booking;

