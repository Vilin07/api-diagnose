export function normalize(error) {

    // Axios HTTP Error
    if (error.name === "AxiosError" && error.response) {
        return {
            source: "axios",
            type: "http",
            status: error.response.status,
            code: error.code,
            message: error.message,
            method: error.config?.method || null,
            url: error.config?.url || null,
            raw: error
        };
    }

    // Generic HTTP Error
    if (typeof error.status === "number") {
        return {
            source: "unknown",
            type: "http",
            status: error.status,
            code: error.code || null,
            message: error.message || "",
            method: null,
            url: null,
            raw: error
        };
    }

    // Unknown Error
    return {
        source: "unknown",
        type: "unknown",
        status: null,
        code: error.code || null,
        message: error.message || "",
        method: null,
        url: null,
        raw: error
    };
}