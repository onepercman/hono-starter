import { OpenAPIHono, createRoute } from '@hono/zod-openapi';
import { z } from 'zod';
const UserRoutes = new OpenAPIHono();
const GetUsersRoute = createRoute({
    method: 'get',
    path: '/users',
    responses: {
        200: {
            content: {
                'application/json': {
                    schema: z.object({
                        success: z.boolean(),
                        data: z.array(z.object({
                            id: z.string(),
                            email: z.string(),
                            name: z.string().optional(),
                        })),
                    }),
                },
            },
            description: 'Get all users',
        },
    },
});
UserRoutes.openapi(GetUsersRoute, (c) => {
    return c.json({
        success: true,
        data: [
            {
                id: '1',
                email: 'user1@example.com',
                name: 'User One',
            },
            {
                id: '2',
                email: 'user2@example.com',
                name: 'User Two',
            },
        ],
    });
});
export { UserRoutes };
