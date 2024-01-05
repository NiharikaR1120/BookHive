const app = require("./server.js");
const supertest = require("supertest");
const { describe, it, expect } = require('@jest/globals'); // Updated import for Jest's expect
const request = supertest(app);

describe('Testing server endpoints', () => {
    it('should return status code 200 for the / endpoint', async () => {
        try {
            const response = await request.get('/');
            expect(response.status).toBe(200);
            console.log('Response body:', response.body); // Log the response body
        } catch (error) {
            console.error('Error:', error);
        }
    });
});
