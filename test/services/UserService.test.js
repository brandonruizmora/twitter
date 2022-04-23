const UserService = require('../../app/services/UserService');
describe('UserService unit test', () => {
    test('Requerimiento 1: Crear un nuevo usuario con la clase UserService', () => {
        const usuario = UserService.create(1, 'pandaimpetuoso7', 'Brandon');
        expect(usuario.id).toBe(1);
        expect(usuario.username).toBe('pandaimpetuoso7');
        expect(usuario.name).toBe('Brandon');
        expect(usuario.bio).not.toBeUndefined();
    });
});