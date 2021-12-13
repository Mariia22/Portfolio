import style from './Topbar.module.scss'
import { Person, Mail } from '@material-ui/icons';

export default function Topbar() {
  return (
    <div className={style.topbar}>
      <div className={style.wrapper}>
        <div className={style.left}>
          <a className={style.logo} href="#intro">MASHAUSHAKOVA</a>
          <div className="item__container">
            <Person />
            <span> +48 729 402 417</span>
          </div>
          <div className="item__container">
            <Mail />
            <span>m.ushakova22@gmail.com</span>
          </div>
        </div>
        <div className={style.right}></div>
      </div>
    </div>
  )
}
