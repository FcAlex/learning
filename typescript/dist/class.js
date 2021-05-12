"use strict";
// considere todos os conceitos de OO
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var UserAccount = /** @class */ (function () {
    function UserAccount(name, age) {
        this.name = name;
        this.age = age;
    }
    UserAccount.prototype.logDetails = function () {
        console.log("The player " + this.name + " is " + this.age + " years old");
    };
    return UserAccount;
}());
// const alex = new UserAccount("Alex", 21) // Error (Classe abstrata)
// console.log(alex.age)
// console.log(alex.name)
// alex.logDetails()
var CharAccount = /** @class */ (function (_super) {
    __extends(CharAccount, _super);
    function CharAccount(name, age, nickname, level) {
        var _this = _super.call(this, name, age) || this;
        _this.nickname = nickname;
        _this.level = level;
        return _this;
    }
    CharAccount.prototype.logCharDetails = function () {
        console.log("The player " + this.name + " has the char " + this.nickname + " at level " + this.level);
    };
    Object.defineProperty(CharAccount.prototype, "getLevel", {
        get: function () {
            console.log('Get...');
            return this.level;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CharAccount.prototype, "setAge", {
        set: function (age) {
            this.age = age;
        },
        enumerable: false,
        configurable: true
    });
    return CharAccount;
}(UserAccount));
var alex2 = new CharAccount("Alex", 20, "fcalex", 110);
// alex2.nickname = 'joao' // Error
// console.log(alex2)
// alex2.logDetails()
console.log(alex2.getLevel);
