enum StatusCode {
    SUCCESS = 123,
    IN_PROCESS= 15,
    FAILED
}

const res = {
    message: 'Платіж успішний',
    statusCode: StatusCode.SUCCESS
}

if(res.statusCode === StatusCode.SUCCESS) {

}

function action(status: StatusCode) {

}

action(StatusCode.SUCCESS);
