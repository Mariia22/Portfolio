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
      <ul className={style.menuList} onClick={() => setActive(false)}>
        <li className={style.menuItem} >
          <a href='#intro'>Home</a>
        </li>
        <li className={style.menuItem} >
          <a href='#works'>Portfolio</a>
        </li>
        <li className={style.menuItem} >
          <a href='#contact'>Contacts</a>
        </li>
      </ul>
    </div>

  )
}
export default Menu;
