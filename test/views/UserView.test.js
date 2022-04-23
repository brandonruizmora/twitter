const UserView = require('../../app/views/UserView');

describe('UserView unit test', () => {
    test('Requerimiento 1: Return an error object when trying to create a new user with a null payload', () => {
        const payload = null;
        const result = UserView.createUser(payload);
        expect(result.error).toMatch(/payload no existe/);
    });
    test('Requerimiento 2: Return an error object when try to create a new user with a playload with invalid properties', () => {
        const payload = {username: null, name: 12, id: 'id'};
        const result = UserView.createUser(payload);
        expect(result.error).toMatch(/necesitan tener un valor válido/);
    });
    test('Requerimiento 3: Return an error object when try to create a new user with a playload with some invalid properties', () => {
        const payload1 = {username: 'panda', name: 'brandon', id: 'id'};
        const payload2 = {username: 'panda', name: 12, id: 1};
        const payload3 = {username: null, name: 'brandon', id: 1};
        const result1 = UserView.createUser(payload1);
        const result2 = UserView.createUser(payload2);
        const result3 = UserView.createUser(payload3);
        expect(result1.error).toMatch(/necesitan tener un valor válido/);
        expect(result2.error).toMatch(/necesitan tener un valor válido/);
        expect(result3.error).toMatch(/necesitan tener un valor válido/);
    });
});