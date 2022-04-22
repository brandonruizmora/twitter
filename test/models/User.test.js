const User = require("../../app/models/User");

describe('User unit test', () => {
    test('Creation of User model', () => {
        const user = new User(122332, 'pandaimpetuoso7', 'Brandon', 'Hey whatsup', '01012022', '02022022');
        expect(user.id).toBe(122332);
        expect(user.username).toBe('pandaimpetuoso7');
        expect(user.name).toBe('Brandon');
        expect(user.bio).toBe('Hey whatsup');
        expect(user.dateCreated).toBe('01012022');
        expect(user.lastUpdated).toBe('02022022');
    });
});