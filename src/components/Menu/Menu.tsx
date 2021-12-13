import style from './Menu.module.scss';
interface Props {
  active: boolean
}
const Menu: React.FC<Props> = ({ active }) => {
  const classNameMenu = active ? style.active : style.menu;
  return (
    <div className={classNameMenu}>
      <ul>
        <li>
          <a href='#intro'>Home</a>
        </li>
        <li>
          <a href='#portfolio'>Portfolio</a>
        </li>
        <li>
          <a href='#works'>Works</a>
        </li>
        <li>
          <a href='#contacts'>Contacts</a>
        </li>
      </ul>
    </div>

  )
}
export default Menu;
