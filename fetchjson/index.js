"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = 'https://jsonplaceholder.typicode.com/todos/1';
axios_1["default"].get(url).then(function (response) {
    console.log(response.data);
    //Without Type
    var todo = response.data;
    var ID = todo.ID;
    var title = todo.Title;
    var finished = todo.finished;
    console.log("\n    The Todo with ID: " + ID + "\n    Has a title of: " + title + "\n    Is it finished? " + finished + "\n  ");
    //With Type
    var todoWithType = response.data;
    // If we use todoWithType.ID; //Property 'ID' does not exist on type 'Todo'. Did you mean 'id'?
    var idWithType = todoWithType.id;
    var titleWithType = todoWithType.title;
    var finishedWithType = todoWithType.completed;
    console.log("\n    The Todo with ID: " + idWithType + "\n    Has a title of: " + titleWithType + "\n    Is it finished? " + finishedWithType + "\n  ");
});
