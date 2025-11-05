# Hono Starter Project Conventions (Bun Native)

## Project Structure

```
src/
├── index.ts                    # Main application entry point (Bun.serve)
├── lib/                        # Barrel exports for common imports
│   └── index.ts               # Re-exports Hono, Zod, utils, types
├── config/                     # Configuration files
│   └── index.ts               # App configuration (database, env vars, etc.)
├── middleware/                 # Custom middleware functions
├── modules/                    # Feature-based modules
│   ├── user/                  # User module example
│   │   ├── user.routes.ts     # User-specific routes
│   │   ├── user.service.ts    # User business logic
│   │   ├── user.model.ts      # User data models/schemas
│   │   └── types.ts           # User-specific types
│   └── auth/                  # Authentication module
│       ├── auth.routes.ts
│       ├── auth.service.ts
│       ├── auth.model.ts
│       └── types.ts
├── routes/                     # Global route definitions
│   └── index.ts              # Main route registry
├── services/                   # Shared services (database, external APIs)
├── utils/                      # Utility functions
│   └── response.ts            # Response helper utilities
└── types/                      # Global type definitions
    └── index.ts              # Common interfaces and types
```

## Code Conventions

### 1. Module Structure
- Each feature module should contain: `routes.ts`, `service.ts`, `model.ts`, and `types.ts`
- Routes: Define OpenAPI routes with validation schemas
- Services: Business logic and data operations
- Models: Database schemas and validation models
- Types: Module-specific TypeScript interfaces

### 2. Path Aliases
Use Bun-friendly TypeScript path aliases:
- `~/*` - src directory (wildcard pattern covers all subdirectories)
- `~/lib` - Common imports barrel (Hono, Zod, utils, types)
- Import without index: `import { foo } from "~/routes"`

### 3. Import Strategy
- **Short imports** for common modules: `import { Hono, z } from "~/lib"`
- **Absolute imports** for specific modules: `import { UserRoutes } from "~/modules/user/user.routes"`
- No `.js` extensions needed (Bun supports TypeScript natively)
- Use barrel exports (`src/lib/index.ts`) for frequently imported dependencies

### 4. API Development
- Use `@hono/zod-openapi` for route definitions
- Always include OpenAPI schemas for request/response validation
- Return structured responses using the `ResponseUtil` helper
- Each route should have proper error handling
- Server initialization with `Bun.serve()`

### 5. Response Format
Use `ResponseUtil` for consistent API responses:
- `ResponseUtil.success(data, message)` - Success responses
- `ResponseUtil.error(message, error)` - Error responses  
- `ResponseUtil.paginated(data, page, limit, total)` - Paginated responses

### 6. Configuration
- Store configuration in `~/config`
- Use environment variables for sensitive data
- Provide sensible defaults for development

### 7. Type Safety
- Define all interfaces in `~/types` or module-specific types files
- Use Zod schemas for runtime validation
- Enable strict TypeScript mode with Bun-specific settings

## Development Guidelines

1. **Bun Native**: Leveraging Bun's performance and TypeScript support
2. **Feature First**: Create modules based on features, not technical layers
3. **Single Responsibility**: Each file should have a single, clear purpose
4. **Documentation**: Use OpenAPI schemas for automatic API documentation
5. **Validation**: Always validate input using Zod schemas
6. **Error Handling**: Implement consistent error handling across all modules
7. **Performance**: Utilize Bun's built-in bundler and runtime

## API Documentation

- OpenAPI spec available at: `/doc`
- Swagger UI available at: `/swagger`
- All routes should include proper OpenAPI schemas

## Adding New Modules

1. Create module directory: `src/modules/[feature]/`
2. Add required files: `routes.ts`, `service.ts`, `model.ts`, `types.ts`
3. Register routes in `src/routes/index.ts`
4. Implement service logic with proper error handling
5. Add OpenAPI schemas to routes
6. Test endpoints via Swagger UI

## Environment Variables

Required environment variables:
- `PORT` - Server port (default: 8080)
- `DATABASE_URL` - Database connection string
- `JWT_SECRET` - JWT secret key
- `CORS_ORIGIN` - CORS allowed origins

## Build and Run

- Development: `bun run dev` (hot reload with --watch)
- Build: `bun build src/index.ts --outdir dist --target node`
- Start: `bun dist/index.js`
- Install: `bun install`

## Bun Specific Features

- **Fast builds**: TypeScript compilation in ~9ms
- **Native imports**: No transpilation needed during development
- **Built-in server**: `Bun.serve()` instead of Node.js server
- **Lock file**: `bun.lockb` for deterministic dependency resolution
- **TypeScript path resolution**: Native support for aliases
