const User = require("../../app/models/User");

describe('User unit test', () => {
    test('Creation of User model', () => {
        const user = new User(122332, 'pandaimpetuoso7', 'Brandon', 'Hey whatsup');
        expect(user.id).toBe(122332);
        expect(user.username).toBe('pandaimpetuoso7');
        expect(user.name).toBe('Brandon');
        expect(user.bio).toBe('Hey whatsup');
        expect(user.dateCreated).toBeTruthy();
        expect(user.dateCreated instanceof Date).toBe(true);
        expect(user.lastUpdated).toBeTruthy();
        expect(user.lastUpdated instanceof Date).toBe(true);
    });
});