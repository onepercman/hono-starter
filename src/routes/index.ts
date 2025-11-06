import { OpenAPIHono } from "~/lib"
import { UserRoutes } from "~/modules/user/user.routes"

const app = new OpenAPIHono()

app.doc("/doc", () => ({
	openapi: "3.0.0",
	info: {
		version: "1.0.0",
		title: "Hono API Documentation",
	},
	components: {
		securitySchemes: {
			bearerAuth: {
				type: "http",
				scheme: "bearer",
				bearerFormat: "JWT",
			},
		},
	},
}))

app.route("/", UserRoutes)

export { app as routes }
