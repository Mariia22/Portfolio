import style from './Topbar.module.scss'
import { Person, Mail } from '@material-ui/icons';
import React, { Dispatch, SetStateAction } from 'react';

interface Props {
  active: boolean,
  setActive: Dispatch<SetStateAction<boolean>>
}
const Topbar: React.FC<Props> = ({ active, setActive }) => {
  const classNameTopbar = active ? style.active : style.topbar;
  return (
    <div className={classNameTopbar}>
      <div className={style.wrapper}>
        <div className={style.left}>
          <a className={style.logo} href="#intro">MASHAUSHAKOVA</a>
          <div className={style.item__container}>
            <Person className={style.icon} />
            <span> +48 729 402 417</span>
          </div>
          <div className={style.item__container}>
            <Mail className={style.icon} />
            <span>m.ushakova22@gmail.com</span>
          </div>
        </div>
        <div className={style.right}>
          <div className={style.hamburger} onClick={() => setActive(!active)}>
            <span className={style.line__one}></span>
            <span className={style.line__two}></span>
            <span className={style.line__three}></span>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Topbar;
