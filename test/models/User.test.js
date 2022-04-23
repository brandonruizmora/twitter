const User = require("../../app/models/User");

describe('User unit test', () => {

    test('Requirement 1: Creation of User model', () => {
        const user = new User(122332, 'pandaimpetuoso7', 'Brandon', 'Hey whatsup');
        expect(user.id).toBe(122332);
        expect(user.username).toBe('pandaimpetuoso7');
        expect(user.name).toBe('Brandon');
        expect(user.bio).toBe('Hey whatsup');
    });

    test('Requirement 2: User dateCreated and lastUpdated created when instancing', () => {
        const user = new User(122332, 'pandaimpetuoso7', 'Brandon', 'Hey whatsup');
        expect(user.dateCreated).toBeTruthy();
        expect(user.dateCreated instanceof Date).toBe(true);
        expect(user.lastUpdated).toBeTruthy();
        expect(user.lastUpdated instanceof Date).toBe(true);
    });

    test('Requirement 3: User name, bio, dateCreated, lastUpdate getters', () => {
        const user = new User(122332, 'pandaimpetuoso7', 'Brandon', 'Hey whatsup');
        expect(user.getUsername).toBe('pandaimpetuoso7');
        expect(user.getBio).toBe('Hey whatsup');
        expect(user.getDateCreated).not.toBeUndefined();
        expect(user.getLastUpdated).not.toBeUndefined();
    });

    test('Requirement 4: User username, bio, setters', () => {
        const user = new User(122332, 'pandaimpetuoso7', 'Brandon', 'Hey whatsup');
        user.setUsername = 'pandita';
        user.setBio = 'Hola a todos!';
        expect(user.getUsername).toBe('pandita');
        expect(user.getBio).toBe('Hola a todos!');
    });

});