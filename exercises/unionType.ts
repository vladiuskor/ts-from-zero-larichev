function logId(id: string | number | boolean) {
    console.log(id);

    if(typeof id === 'string') {
        console.log(id.toUpperCase());
    } else if (typeof id === 'number'){
        console.log(id);
    } else {
        console.log(id);
    }
}

function logError(err: string | string[]) {
    if(Array.isArray(err)) {
        console.log(err);
    } else {
        console.log(err);
    }
}


function logObj(obj: {a: number } | {b: number}) {
    if('a' in obj) {
        console.log(obj.a);
    } else {
        console.log(obj.b);
    }
}

function logMultipleIds(a: string | number, b: string | boolean) {
    if(a === b) {
        console.log(a + b);
    } else {
        console.log(a);
    }
}
