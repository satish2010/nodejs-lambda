const { handler } = require('./../../index');

describe('handler', () => {
    it('should return success data', async () => {
        const response = {
            statusCode: 200,
            body: 'Success'
        }
        const event = {};
        const actualValue = await handler(event);
        expect(actualValue).toEqual(response);
    })
})