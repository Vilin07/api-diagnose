const http404 = {

    id: "HTTP_404",

    matches(error) {
        return (
            error.type === "http" &&
            error.status === 404
        );
    },

    title: "404 Not Found",

    meaning: "The requested endpoint does not exist on the server.",

    causes: [
        "Incorrect endpoint URL",
        "Wrong HTTP method",
        "Missing API version",
        "Express route not registered"
    ],

    checks: [
        "Verify the request URL",
        "Check your backend routes",
        "Test the endpoint using Postman or curl"
    ],

    fixes: [
        "Correct the endpoint URL",
        "Register the route in your backend",
        "Use the correct HTTP method"
    ],

    confidence: 95

};

export default http404;