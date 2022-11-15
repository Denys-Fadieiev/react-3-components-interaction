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

import React from "react";

class User extends React.Component {
  render() {
    const {id, name, surname} = this.props;
    return(
      <>
        <p>
          <i>User ID: {id}</i>
        </p>
        <p>{name} {surname}</p>
      </>
    )
  }
}

export default User;