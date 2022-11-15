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

import React from "react";

class User extends React.Component {
  render() {
    const {id, name, surname, isLike, handleLike, deleteUser} = this.props;
    return(
      <>
        <p>
          <i>User ID: {id}</i>
        </p>
        <p>{name} {surname}</p>
        <p>Likes: {isLike ? 1 : 0}</p>
        <button onClick={() => handleLike(id)} disabled={isLike}>Like </button>
        <button onClick={() => deleteUser(id)}>Delete user</button>
      </>
    )
  }
}

export default User;