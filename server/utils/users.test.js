const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {

    var users;

    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'Joaq',
            room: 'Sala 1'
        }, {
            id: '2',
            name: 'Diego',
            room: 'Sala 2'
        }, {
            id: '3',
            name: 'Martin',
            room: 'Sala 1'
        }]
    })

    it('should add new user', () => {
        var users = new Users();
        var user = {
            id: '123',
            name: 'Joaq',
            room: 'Sala 1'
        };
        var resUser = users.addUser(user.id, user.name, user.room);

        expect(users.users).toEqual([user]);
    });

    it('should remove a user', () => {
        var userId = '1';
        var user = users.removeUser(userId);

        expect(user.id).toBe(userId);
        expect(users.users.length).toBe(2);
    });

    it('should not remove user', () => {
        var userId = '99';
        var user = users.removeUser(userId);

        expect(user).toNotExist();
        expect(users.users.length).toBe(3);
    });

    it('should find user', () => {
        var userId = '2';
        var user = users.getUser(userId);

        expect(user.id).toBe(userId);
    });

    it('should not find user', () => {
        var userId = '99';
        var user = users.getUser(userId);

        expect(user).toNotExist();
    });

    it('should return names for Sala 1', () => {
        var userList = users.getUserList('Sala 1');

        expect(userList).toEqual(['Joaq', 'Martin']);
    });

    it('should return names for Sala 2', () => {
        var userList = users.getUserList('Sala 2');

        expect(userList).toEqual(['Diego']);
    });

});