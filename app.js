"use strict";
function getFullName(userEntity) {
    return `${userEntity.firstname} ${userEntity.surname}`;
}
const user = {
    firstname: 'Vlad',
    surname: 'Korobko',
    city: 'Ternopil',
    age: 28
};
console.log(getFullName(user));
