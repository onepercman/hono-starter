import type { ApiResponse, PaginatedResponse } from "~/lib"

export function success<T>(data: T, message?: string): ApiResponse<T> {
	return {
		success: true,
		data,
		message,
	}
}

export function error(message: string, error?: string): ApiResponse {
	return {
		success: false,
		message,
		error,
	}
}

export function paginated<T>(
	data: T[],
	page: number,
	limit: number,
	total: number,
	message?: string
): PaginatedResponse<T> {
	const totalPages = Math.ceil(total / limit)

	return {
		success: true,
		data,
		message,
		pagination: {
			page,
			limit,
			total,
			totalPages,
		},
	}
}
