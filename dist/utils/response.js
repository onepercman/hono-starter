export class ResponseUtil {
    static success(data, message) {
        return {
            success: true,
            data,
            message,
        };
    }
    static error(message, error) {
        return {
            success: false,
            message,
            error,
        };
    }
    static paginated(data, page, limit, total, message) {
        const totalPages = Math.ceil(total / limit);
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
        };
    }
}
