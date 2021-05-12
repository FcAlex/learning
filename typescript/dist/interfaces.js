"use strict";
var residentEvil8 = {
    title: 'Resident Evil Vilage',
    description: 'The best game of world',
    genre: 'Action',
    platform: ['PS4', 'PS5', 'PC'],
    getSimilars: function (title) {
        console.log('Resident Evil 7', 'The last of us');
    }
};
var leftbehind = {
    title: 'The last of us: Left Behind',
    description: 'The best game of world',
    genre: 'Action',
    platform: ['PS4', 'PS5', 'PC'],
    content: ['3 hours story']
};
var CreateGame = /** @class */ (function () {
    function CreateGame(title, description, genre) {
        this.title = title;
        this.description = description;
        this.genre = genre;
    }
    return CreateGame;
}());
var $ = {
    a: 'alex',
    b: 'sousa'
};
// quando tiver criando libs, prefira interfaces, porque são mais extensiveis
// prefira interfaces quando estiver criando objetos/classes
// não é possível definir tuplas com interfaces
