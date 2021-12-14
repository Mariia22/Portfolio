import style from './Portfolio.module.scss';

const Portfolio: React.FC = () => {
  return (
    <div className={style.portfolio} id='portfolio'>
      <h1>Portfolio</h1>
      <div className={style.container}>
        <div className={style.item}>
          <img className={style.verticalImg} src="assets/todoApp.jpg" alt="Image for todo application" />
          <h3>To-do app</h3>
        </div>
        <div className={style.item}>
          <img className={style.horizontalImg} src="assets/windowCompany.png" alt="Image for window company" />
          <h3>Window company</h3>
        </div>
        <div className={style.item}>
          <img className={style.horizontalImg} src="assets/candyCrash.png" alt="Image for candy crash game" />
          <h3>Game "Candy Crash"</h3>
        </div>
      </div>
    </div>
  )
}
export default Portfolio;
