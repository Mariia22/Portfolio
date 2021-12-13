import style from './Intro.module.scss'

const Intro: React.FC = () => {
  return (
    <div className={style.intro} id='intro'>
      <div className={style.left}>
        <div className={style.img__container}>
          <img src="assets/photo.png" alt="Portfolio photo" />
        </div>
      </div>
      <div className={style.right}>
        <div className={style.wrapper}>
          <h2>Hi There, I'm</h2>
          <h1>Mariia Ushakova</h1>
          <h3>Freelance</h3>
          <span></span>
          <a href="#portfolio">
            <img src="assets/down.png" alt="Down button" />
          </a>
        </div>

      </div>
    </div>
  )
}
export default Intro;
