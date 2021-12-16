import style from './Menu.module.scss';
import React, { Dispatch, SetStateAction } from 'react';

interface Props {
  active: boolean,
  setActive: Dispatch<SetStateAction<boolean>>
}
const Menu: React.FC<Props> = ({ active, setActive }) => {
  const classNameMenu = active ? style.active : style.menu;
  return (
    <div className={classNameMenu}>
      <ul className={style.menu__list} onClick={() => setActive(false)}>
        <li className={style.menu__item} >
          <a href='#intro'>Home</a>
        </li>
        <li className={style.menu__item} >
          <a href='#portfolio'>Portfolio</a>
        </li>
        <li className={style.menu__item} >
          <a href='#contact'>Contacts</a>
        </li>
      </ul>
    </div>
  )
}
export default Menu;
