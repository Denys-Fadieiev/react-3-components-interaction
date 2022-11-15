// Lists tasks:
// Создать компонент Пользователь
// Принимает данные о пользователе:
// id
// имя
// фамилию
// Создать компонент СписокПользователей
// У него в состоянии должен быть массив с обьектами пользователей.
// Реализовать в СпискеПользователей отрисовку списка Пользователей на основании информации в состоянии.

// Interaction Tasks:
// Добавте пользователям свойство likes, показывающее количество их лайков. Добавте  в верстку Пользователя кнопку, позволяющую лайкнуть пользователя. Лайкнуть его кнопкой можно только один раз

// * Добавить в верстку Пользователя кнопку удаления пользователя. При нажатии пользователь должен перестать отображатся в верстке и исчезнуть из состояния.

import User from '../User';
import React, { Component } from 'react';

class UserList extends Component {
  state = {
    users: [
      { id: 1, name: 'John', surname: 'Snow', isLike: false },
      { id: 2, name: 'Piter', surname: 'Parker', isLike: false },
      { id: 3, name: 'Alex', surname: 'Tarasow', isLike: false },
      { id: 4, name: 'liza', surname: 'Kirilenko', isLike: false },
      { id: 5, name: 'Nataly', surname: 'Portman', isLike: false },
    ],
  }

  handleLike = (userId) => {
    this.setState ({
      users: this.state.users.map((user) => {
        return {
          isLike: userId === user.id ? true : user.isLike,
        }
      }),
    });
  };

  render() {
    const usersListRender = this.state.users.map(({id, name, surname, isLike}) => (
      <li key={id}>
        <User
        id={id}
        name={name}
        surname={surname}
        isLike={isLike}
        handleLike={this.handleLike}
        />
      </li>
    ))
    return (
      <article>
        <ul><b>Users list:</b> 
          {usersListRender}
        </ul>
      </article>
    );
  }
}

export default UserList;