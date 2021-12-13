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
      <ul onClick={() => setActive(false)}>
        <li>
          <a href='#intro'>Home</a>
        </li>
        <li>
          <a href='#portfolio'>Portfolio</a>
        </li>
        <li>
          <a href='#works'>Works</a>
        </li>
        <li>
          <a href='#contacts'>Contacts</a>
        </li>
      </ul>
    </div>

  )
}
export default Menu;
