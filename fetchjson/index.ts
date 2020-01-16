import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';
/*
{
  "userId": 1,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
}
*/

//Interface is used to define the structure of an object
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then(response => {
  console.log(response.data);

  //Without Type
  const todo = response.data;
  const ID = todo.ID;
  const title = todo.Title;
  const finished = todo.finished;

  console.log(`
    The Todo with ID: ${ID}
    Has a title of: ${title}
    Is it finished? ${finished}
  `);

  //With Type
  const todoWithType = response.data as Todo;
  // If we use todoWithType.ID; //Property 'ID' does not exist on type 'Todo'. Did you mean 'id'?
  const idWithType = todoWithType.id;
  const titleWithType = todoWithType.title;
  const finishedWithType = todoWithType.completed;

  console.log(`
    The Todo with ID: ${idWithType}
    Has a title of: ${titleWithType}
    Is it finished? ${finishedWithType}
  `);

  logTodo(idWithType, finishedWithType, titleWithType);

  //logTodoWithType(idWithType, finishedWithType, titleWithType); //Argument of type 'boolean' is not assignable to parameter of type 'string'.
  logTodoWithType(idWithType, titleWithType, finishedWithType);
});

const logTodo = (id, title, completed) => {
  console.log(`
  The Todo with ID: ${id}
  Has a title of: ${title}
  Is it finished? ${completed}
`);
};

//logTodo With Type
const logTodoWithType = (id: number, title: string, completed: boolean) => {
  console.log(`
  The Todo with ID: ${id}
  Has a title of: ${title}
  Is it finished? ${completed}
`);
};
