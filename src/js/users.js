const Users = [
    { "username": "admin", "password": "admin", "admin": true, "token": "" },
    { "username": "root", "password": "root", "admin": true, "token": "" },
    { "username": "user1", "password": "user1", "admin": false, "token": "" },
    { "username": "user2", "password": "user2", "admin": false, "token": "" },
    { "username": "user3", "password": "user3", "admin": false, "token": "" },
    { "username": "user3", "password": "user3", "admin": false, "token": "" },
    { "username": "user4", "password": "user4", "admin": false, "token": "" },
    { "username": "user5", "password": "user5", "admin": false, "token": "" }
],
    UserNames = Object.keys(Users).map(value => value.username)
export { Users, UserNames }