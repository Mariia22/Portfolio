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
      <div className={style.topbar__wrapper}>
        <div className={style.topbar__left}>
          <a className={style.topbar__logo} href="#intro">MASHAUSHAKOVA</a>
          <div className={style.topbar__contacts}>
            <Person className={style.topbar__icon} />
            <span> +48 729 402 417</span>
          </div>
          <div className={style.topbar__contacts}>
            <Mail className={style.topbar__icon} />
            <span>m.ushakova22@gmail.com</span>
          </div>
        </div>
        <div className={style.topbar__right}>
          <div className={style.topbar__hamburger} onClick={() => setActive(!active)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Topbar;
