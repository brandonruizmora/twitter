const UserService = require('../../app/services/UserService');
describe('UserService unit test', () => {
    test('Requerimiento 1: Crear un nuevo usuario con la clase UserService', () => {
        const user = UserService.create(1, 'pandaimpetuoso7', 'Brandon');
        expect(user.id).toBe(1);
        expect(user.username).toBe('pandaimpetuoso7');
        expect(user.name).toBe('Brandon');
        expect(user.bio).not.toBeUndefined();
    });
    test('Requerimiento 2: static method getInfo', () => {
        const user = UserService.create(1, 'pandaimpetuoso7', 'Brandon');
        const userInfoList = UserService.getInfo(user);
        expect(userInfoList[0]).toBe(1);
        expect(userInfoList[1]).toBe('pandaimpetuoso7');
        expect(userInfoList[2]).toBe('Brandon');
        expect(userInfoList[3]).not.toBeUndefined();
    });
    test('Requerimiento 3: static method updateUserUsername', () => {
        const user = UserService.create(1, 'pandaimpetuoso7', 'Brandon');
        const userUpdatedInfo = UserService.updateUserUsername(user, 'Pandita7');
        expect(userUpdatedInfo.id).toBe(1);
        expect(userUpdatedInfo.username).toBe('Pandita7');
        expect(userUpdatedInfo.name).toBe('Brandon');
        expect(userUpdatedInfo.bio).toBe('Sin bio');
    });
});