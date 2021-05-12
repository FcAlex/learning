"use strict";
function logDetails(uid, item) {
    console.log("A product with " + uid + " has a title as " + item);
}
logDetails(123, "TV");
logDetails("123", "TV");
// use o type alias é utilizado na maioria das vezes
// melhor em react / para props
// CONSISTÊNCIA!
