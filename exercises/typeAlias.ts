type httpMethod = 'post' | 'get';


function fetchWithAuth(url: string, method: httpMethod): 1 | -1 {
    return 1;
}

fetchWithAuth('s', 'post');


type User = {
    name: string,
    age: number,
    skills: string[]
}

let user: User = {
    name: 'Vlad',
    age: 28,
    skills: ['1', '2']
}

type Role = {
    id: number
}

type UserWithRole = User & Role;

let user2: UserWithRole = {
    name: 'Olenka',
    age: 26,
    skills: ['1', '2'],
    id: 12345
}