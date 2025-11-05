import { OpenAPIHono } from '@hono/zod-openapi';
import { swaggerUI } from '@hono/swagger-ui';
import { UserRoutes } from '../modules/user/user.routes.js';

const app = new OpenAPIHono();

app.doc('/doc', {
  openapi: '3.0.0',
  info: {
    version: '1.0.0',
    title: 'Hono API Documentation',
  },
});

app.get('/swagger', swaggerUI({ url: '/doc' }));

app.route('/', UserRoutes);

export { app as routes };
