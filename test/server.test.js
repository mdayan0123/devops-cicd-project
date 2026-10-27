const request = require("supertest");
const app = require("../src/server");

describe("DevOps CI/CD Application", () => {

    test("GET / should return application message", async () => {
        const response = await request(app).get("/");

        expect(response.statusCode).toBe(200);
        expect(response.body.message).toBe(
            "DevOps CI/CD Pipeline is running!"
        );
    });

    test("GET /health should return healthy status", async () => {
        const response = await request(app).get("/health");

        expect(response.statusCode).toBe(200);
        expect(response.body.status).toBe("healthy");
    });

});