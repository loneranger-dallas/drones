var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
abstract;
var HTTPClientError = (function (_super) {
    __extends(HTTPClientError, _super);
    function HTTPClientError() {
        _super.apply(this, arguments);
        this.readonly = statusCode;
    }
    return HTTPClientError;
})(Error);
!;
number;
readonly;
name;
!;
string;
constructor(message, object | string);
{
    if (message instanceof Object) {
        _super.call(this, JSON.stringify(message));
    }
    else {
        _super.call(this, message);
    }
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
}
var HTTP400Error = (function (_super) {
    __extends(HTTP400Error, _super);
    function HTTP400Error(message) {
        if (message === void 0) { message = "Bad Request"; }
        _super.call(this, message);
        this.readonly = statusCode = 400;
    }
    return HTTP400Error;
})(HTTPClientError);
exports.HTTP400Error = HTTP400Error;
var HTTP401Error = (function (_super) {
    __extends(HTTP401Error, _super);
    function HTTP401Error(message) {
        if (message === void 0) { message = "Unauthorized"; }
        _super.call(this, message);
        this.readonly = statusCode = 401;
    }
    return HTTP401Error;
})(HTTPClientError);
exports.HTTP401Error = HTTP401Error;
var HTTP403Error = (function (_super) {
    __extends(HTTP403Error, _super);
    function HTTP403Error(message) {
        if (message === void 0) { message = "Forbidden"; }
        _super.call(this, message);
        this.readonly = statusCode = 403;
    }
    return HTTP403Error;
})(HTTPClientError);
exports.HTTP403Error = HTTP403Error;
var HTTP404Error = (function (_super) {
    __extends(HTTP404Error, _super);
    function HTTP404Error(message) {
        if (message === void 0) { message = "Not found"; }
        _super.call(this, message);
        this.readonly = statusCode = 404;
    }
    return HTTP404Error;
})(HTTPClientError);
exports.HTTP404Error = HTTP404Error;
