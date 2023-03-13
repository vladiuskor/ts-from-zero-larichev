function fetchWithAuth(url: string, method: 'post' | 'get') {

}

fetchWithAuth('random', 'post');
//fetchWithAuth('random', 'put'); ERROR!

let method = 'post';

// fetchWithAuth('sdsd', method); ERROR!
fetchWithAuth('sdsd', method as 'post'); // Use as very careful