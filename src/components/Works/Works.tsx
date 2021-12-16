import style from './Works.module.scss';
import { useState } from 'react';

const Works: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const data = [
    {
      id: 0,
      title: 'ToDo App',
      description: 'The classic todo app with a few twists! This app includes a dark/light theme toggle and drag & drop reordering for anyone wanting an extra test',
      img: 'assets/todoSlider.jpg',
      link: 'https://mariia22.github.io/todo-react/'
    },
    {
      id: 1,
      title: 'Window Company',
      description: 'First attempt to add Vanilla JS code to a ready-made layout',
      img: 'assets/windowCompany.png',
      link: 'https://mariia22.github.io/todo-react/'
    },
    {
      id: 2,
      title: 'Candy Crash',
      description: 'My first own React project for my niece. I was inspired by Ania Kubow',
      img: 'assets/candyCrash.png',
      link: 'https://mariia22.github.io/todo-react/'
    }
  ];
  const handleClick = (way: string): void => {
    way === 'left'
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : data.length - 1)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0)
  };

  return (
    <div className={style.works} id='works'>
      <div className={style.works__slider} style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
        {data.map(item => (
          <div className={style.works__container} key={item.id}>
            <div className={style.works__item}>
              <div className={style.works__left}>
                <div className={style.works__leftContainer}>
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                  <a href={item.link}>Link</a>
                </div>
              </div>
              <div className={style.works__right}>
                <img alt='Todo App' src={item.img} />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img alt='Arrow left' src='assets/arrow.png' className={style.arrowLeft} onClick={() => handleClick('left')} />
      <img alt='Arrow right' src='assets/arrow.png' className={style.arrowRight} onClick={() => handleClick('right')} />
    </div>
  )
}
export default Works;