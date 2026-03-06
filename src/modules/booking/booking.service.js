import { acquireLock, releaseLock } from '../../utils/lock.util.js';

export const createBooking = async (bookingData) => {
    const { resourceId, userId } = bookingData;
    const lockKey = `lock:${resourceId}`;
    const isLocked = await acquireLock(lockKey, 10000);
    if (!isLocked) {
        throw new Error("This seat is currently being booked by someone else.");
    }
    try {
        return { 
            status: "success", 
            bookingId: "BK-" + Math.floor(Math.random() * 1000000),
            resourceId: resourceId,
            message: `Seat ${resourceId} successfully booked for ${userId}` 
        };
    } finally {
        await releaseLock(lockKey);
    }
};
