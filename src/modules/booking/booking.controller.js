import { createBooking } from './booking.service.js';

export const bookSeat = async (req, res) => {
    try {
        const result = await createBooking(req.body);
        res.status(201).json({ success: true, data: result });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};
