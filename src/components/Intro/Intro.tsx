import { useEffect, useRef } from 'react';
import style from './Intro.module.scss';
import { init } from 'ityped';


const Intro: React.FC = () => {
  const textRef = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    if (!textRef.current) {
      return;
    }
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: [" Front-end Developer", " React Developer"]
    });
  }, []);
  return (
    <div className={style.intro} id='intro'>
      <div className={style.intro__left}>
        <div className={style.intro__image}>
          <img src="assets/photo.png" alt="Portfolio photo" />
        </div>
      </div>
      <div className={style.intro__right}>
        <div className={style.intro__wrapper}>
          <h2>Hi There, I'm</h2>
          <h1>Mariia Ushakova</h1>
          <h3>Freelance
            <span ref={textRef}></span>
          </h3>
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
