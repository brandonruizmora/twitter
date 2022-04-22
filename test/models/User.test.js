describe('User unit test', () => {
    test('Creation of User model', () => {
        const user = new User(122332, 'pandaimpetuoso7', 'Brandon', new Date(), new Date());
        expect(user.id).toBe(122332);
        expect(user.username).toBe('pandaimpetuoso7');
        expect(user.name).toBe('Brandon');
        expect(user.dateCreated).toBe(new Date());
        expect(user.lastUpdated).toBe(new Date());
    });
});