import style from './Topbar.module.scss'
import {PersonIcon} from 'mate'

export default function Topbar() {
  return (
    <div className={style.topbar}>
      <div className={style.wrapper}>
        <div className={style.left}>
          <a className={style.logo} href="#intro">MASHAUSHAKOVA</a>
          <div className="item__container"></div>
        </div>
        <div className={style.right}></div>
      </div>
    </div>
  )
}
