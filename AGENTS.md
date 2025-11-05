# Hono Starter Project Conventions

## Project Structure

```
src/
├── index.ts                    # Main application entry point
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
Use TypeScript path aliases for clean imports:
- `@/*` - src directory
- `@/modules/*` - feature modules
- `@/routes/*` - global routes
- `@/middleware/*` - middleware functions
- `@/services/*` - shared services
- `@/utils/*` - utility functions
- `@/types/*` - type definitions
- `@/config/*` - configuration files

### 3. API Development
- Use `@hono/zod-openapi` for route definitions
- Always include OpenAPI schemas for request/response validation
- Return structured responses using the `ResponseUtil` helper
- Each route should have proper error handling

### 4. Response Format
Use `ResponseUtil` for consistent API responses:
- `ResponseUtil.success(data, message)` - Success responses
- `ResponseUtil.error(message, error)` - Error responses  
- `ResponseUtil.paginated(data, page, limit, total)` - Paginated responses

### 5. Configuration
- Store configuration in `@/config/index.ts`
- Use environment variables for sensitive data
- Provide sensible defaults for development

### 6. Type Safety
- Define all interfaces in `@/types/index.ts` or module-specific types files
- Use Zod schemas for runtime validation
- Enable strict TypeScript mode

## Development Guidelines

1. **Feature First**: Create modules based on features, not technical layers
2. **Single Responsibility**: Each file should have a single, clear purpose
3. **Documentation**: Use OpenAPI schemas for automatic API documentation
4. **Validation**: Always validate input using Zod schemas
5. **Error Handling**: Implement consistent error handling across all modules
6. **Testing**: Follow module structure for test organization (not implemented yet)

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

- Development: `pnpm run dev`
- Build: `pnpm run build`
- Start: `pnpm run start`
