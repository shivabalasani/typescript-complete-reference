import { UserList } from './views/UserList';
import { Collection } from './models/Collection';
import { UserProps, User } from './models/User';
import { UserEdit } from './views/UserEdit';

//---------------------------------------------------------
const collection = User.buildUserCollection();
collection.on('change', () => {
  console.log(collection);
});
collection.fetch();

//---------------------------------------------------------
const user = User.buildUser({ name: 'Name', age: 20 });
const root = document.getElementById('root');
if (root) {
  const userEdit = new UserEdit(root, user);
  userEdit.render();
  console.log(userEdit);
} else {
  throw new Error('Root element not found');
}

//---------------------------------------------------------
const users = new Collection(
  'http://localhost:3000/users',
  (json: UserProps) => {
    return User.buildUser(json);
  }
);

users.on('change', () => {
  const list = document.getElementById('list');
  if (list) {
    new UserList(list, users).render();
  }
});

users.fetch();
