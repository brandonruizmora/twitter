const UserView = require('../../app/views/UserView');

describe('UserView unit test', () => {
    test('Requerimiento 1: Return an error object when trying to create a new user with a null payload', () => {
        const payload = null;
        const result = UserView.createUser(payload);
        expect(result.error).toMatch(/payload no existe/);
    });
});