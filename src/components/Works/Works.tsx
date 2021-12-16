import style from './Works.module.scss';
import { useState } from 'react';

const Works: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const data = [
    {
      id: 0,
      title: 'ToDo App',
      description: 'Application for ...',
      img: 'assets/todoSlider.jpg',
      link: 'https://mariia22.github.io/todo-react/'
    },
    {
      id: 1,
      title: 'Window Company',
      description: 'Application for ...',
      img: 'assets/windowCompany.png',
      link: 'https://mariia22.github.io/todo-react/'
    },
    {
      id: 2,
      title: 'Candy Crash',
      description: 'JS Game',
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
      <div className={style.slider} style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
        {data.map(item => (
          <div className={style.container} key={item.id}>
            <div className={style.item}>
              <div className={style.left}>
                <div className={style.leftContainer}>
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                  <span>Projects</span>
                </div>
              </div>
              <div className={style.right}>
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