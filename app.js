var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["SUCCESS"] = 123] = "SUCCESS";
    StatusCode[StatusCode["IN_PROCESS"] = 15] = "IN_PROCESS";
    StatusCode[StatusCode["FAILED"] = 16] = "FAILED";
})(StatusCode || (StatusCode = {}));
var res = {
    message: 'Платіж успішний',
    statusCode: StatusCode.SUCCESS
};
if (res.statusCode === StatusCode.SUCCESS) {
}
