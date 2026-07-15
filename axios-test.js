import axios from "axios";

try {
    await axios.get("https://jsonplaceholder.typicode.com/invalid-url");
} catch (error) {
    console.log({
        name: error.name,
        message: error.message,
        code: error.code,
        status: error.response?.status,
        method: error.config?.method,
        url: error.config?.url
    });
}