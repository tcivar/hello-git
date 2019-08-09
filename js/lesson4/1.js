'use strict';
function const_parent () {
    this.role = 'user',
    this.userName = null,
    this.showRole = function () {
    console.log(this.role);
    }
}
const post_parent = {
    role : 'user',
    userName : null,
    showRole : function () {
    console.log(this.role);
    }
};

let post1_child = Object.create(post_parent);
post1_child.role = 'moderator';
post1_child.userName = 'Dima';
console.log(post1_child.role);

let post2_child = new const_parent();
post2_child.role = 'admin';
post2_child.userName = 'Ivan';
console.log(post2_child.role);

const baseUser = {
    rights: ['create','edit'],
}
function User(name) {
    this.name = name;
};

User.prototype = baseUser;

const user1 = new User('Alex');
console.log(user1);
console.log(user1.rights);

function User2(age){
    this.age = age;
}

const user2 = new User2(25);

console.log(user2.constructor);