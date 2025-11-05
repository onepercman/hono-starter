export const CONFIG = {
    app: {
        name: 'Hono Starter',
        version: '1.0.0',
        port: parseInt(process.env.PORT || '8080'),
    },
    db: {
        url: process.env.DATABASE_URL || 'sqlite:./database.sqlite',
    },
    jwt: {
        secret: process.env.JWT_SECRET || 'your-secret-key',
        expiresIn: '24h',
    },
    cors: {
        origin: process.env.CORS_ORIGIN || '*',
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization'],
    },
};
