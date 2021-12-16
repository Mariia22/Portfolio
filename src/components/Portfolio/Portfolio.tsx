import style from './Portfolio.module.scss';

const Portfolio: React.FC = () => {
  const data = [
    {
      id: 0,
      title: 'ToDo App',
      description: 'The classic todo app with a few twists! This app includes a dark/light theme toggle and drag & drop reordering for anyone wanting an extra test',
      img: 'assets/todoSlider.jpg',
      class: 'style.portfolio__verticalImg',
      link: 'https://mariia22.github.io/todo-react/'
    },
    {
      id: 1,
      title: 'Window Company',
      description: 'First attempt to add Vanilla JS code to a ready-made layout',
      img: 'assets/windowCompany.png',
      class: 'style.portfolio__horizontalImg',
      link: 'https://mariia22.github.io/todo-react/'
    },
    {
      id: 2,
      title: 'Candy Crash',
      description: 'My first own React project for my niece. I was inspired by Ania Kubow',
      img: 'assets/candyCrash.png',
      class: 'style.portfolio__horizontalImg',
      link: 'https://mariia22.github.io/todo-react/'
    }
  ];
  return (
    <div className={style.portfolio} id='portfolio'>
      <h1>Portfolio</h1>
      <div className={style.portfolio__container}>
        {data.map(item => (
          <div className={style.portfolio__item} key={item.id}>
            <img className={item.class} src={item.img} alt="Image for application" />
            <a href={item.link}>{item.title}</a>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Portfolio;
