interface User {
    name: string,
    age: number,
    skills: string[]
}

interface Role {
    roleId: number
}

interface UserWithRole1 extends User, Role {
    createdAt: Date
}

let user1: UserWithRole1 = {
    name: 'Vlad',
    age: 28,
    skills: ['web'],
    roleId: 1,
    createdAt: new Date(),
}


interface UserDictionary {
    [index: number]: User
}

type UserDictionary2 =  {
    [index: number]: User
}