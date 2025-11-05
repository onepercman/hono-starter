import { OpenAPIHono, createRoute, z, CONFIG } from '~/lib'
import { routes } from '~/routes'

const app = new OpenAPIHono()

app.route('/', routes)

const RootRoute = createRoute({
  method: 'get',
  path: '/',
  responses: {
    200: {
      content: {
        'application/json': {
          schema: z.object({
            message: z.string(),
            version: z.string()
          })
        }
      },
      description: 'Welcome message'
    }
  }
})

app.openapi(RootRoute, (c) => {
  return c.json({
    message: 'Welcome to Hono Starter!',
    version: CONFIG.app.version
  })
})

Bun.serve({
  fetch: app.fetch,
  port: CONFIG.app.port,
  development: process.env.NODE_ENV !== 'production'
})

console.log(`Server is running on http://localhost:${CONFIG.app.port}`)
console.log(`API Documentation: http://localhost:${CONFIG.app.port}/doc`)
console.log(`Swagger UI: http://localhost:${CONFIG.app.port}/swagger`)
