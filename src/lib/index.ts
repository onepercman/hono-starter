// Re-export commonly used modules with shorter names
export { OpenAPIHono, createRoute } from '@hono/zod-openapi';
export { swaggerUI } from '@hono/swagger-ui';
export { z } from 'zod';

// Re-export commonly used local modules
export type { User, ApiResponse, PaginatedResponse, PaginationParams } from '~/types';
export { ResponseUtil } from '~/utils/response';
export { CONFIG } from '~/config';
