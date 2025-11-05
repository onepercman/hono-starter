import { serve } from '@hono/node-server';
import { OpenAPIHono, createRoute } from '@hono/zod-openapi';
import { z } from 'zod';
import { routes } from './routes/index.js';
import { CONFIG } from './config/index.js';
const app = new OpenAPIHono();
app.route('/', routes);
const RootRoute = createRoute({
    method: 'get',
    path: '/',
    responses: {
        200: {
            content: {
                'application/json': {
                    schema: z.object({
                        message: z.string(),
                        version: z.string(),
                    }),
                },
            },
            description: 'Welcome message',
        },
    },
});
app.openapi(RootRoute, (c) => {
    return c.json({
        message: 'Welcome to Hono Starter!',
        version: CONFIG.app.version,
    });
});
serve({
    fetch: app.fetch,
    port: CONFIG.app.port,
}, (info) => {
    console.log(`Server is running on http://localhost:${info.port}`);
    console.log(`API Documentation: http://localhost:${info.port}/doc`);
    console.log(`Swagger UI: http://localhost:${info.port}/swagger`);
});
