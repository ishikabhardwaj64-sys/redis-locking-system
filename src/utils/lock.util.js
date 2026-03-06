import redisClient from '../config/redis.config.js';

export const acquireLock = async (key, ttl) => {
    try {
        const result = await redisClient.set(key, 'locked', { NX: true, PX: ttl });
        return result === 'OK';
    } catch (err) {
        console.error('Lock Error:', err);
        return false;
    }
};

export const releaseLock = async (key) => {
    try {
        await redisClient.del(key);
    } catch (err) {
        console.error('Release Error:', err);
    }
};
