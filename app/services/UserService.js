const User = require('../models/User');
class UserService {
    static create(id, username, name) {
        return new User(id, username, name, "Sin bio");
    }
    static getInfo(user) {
        return [user.id, user.username, user.name, user.bio]
    }
    static updateUserUsername(user, username) {
        return new User(user.id, username, user.name, user.bio);
    }
    static getAllUsernames(userList) {
        return userList.map(user => {
          return user.username
        });
    }
}

module.exports = UserService;