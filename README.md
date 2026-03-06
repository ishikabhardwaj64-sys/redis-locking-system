# Redis Distributed Locking System 🔒

A high-performance Node.js application that uses Redis to handle distributed locking. This prevents "race conditions" (like two people booking the same seat at the exact same microsecond).

## 🛠 Features
- **Atomic Locking:** Uses Redis `SET NX PX` for thread-safe operations.
- **Auto-Expiration:** Locks automatically release after 10 seconds to prevent deadlocks.
- **REST API:** Simple Express.js endpoints for booking resources.

## 🚀 How to Run Locally

1. **Start Redis Server:**
   \`\`\`bash
   redis-server
   \`\`\`

2. **Start the App:**
   \`\`\`bash
   node index.js
   \`\`\`

3. **Test a Booking:**
   Run this in your terminal to book a seat:
   \`\`\`bash
   curl -X POST http://localhost:3000/api/bookings/book \
   -H "Content-Type: application/json" \
   -d '{"resourceId": "seat-A1", "userId": "user_ishika"}'
   \`\`\`
