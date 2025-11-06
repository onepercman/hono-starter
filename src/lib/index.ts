// Re-export commonly used modules with shorter names
export { OpenAPIHono, createRoute } from "@hono/zod-openapi"
export { z } from "zod"

// Re-export commonly used local modules
export { CONFIG } from "~/config"
export type {
	ApiResponse,
	PaginatedResponse,
	PaginationParams,
	User,
} from "~/types"
import * as ResponseUtil from "~/utils/response"
export { ResponseUtil }
