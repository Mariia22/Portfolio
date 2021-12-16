import { useState } from 'react';
import Contact from './components/Contact/Contact';
import Intro from './components/Intro/Intro';
import Topbar from './components/Topbar/Topbar';
import Works from './components/Works/Works';
import Menu from './components/Menu/Menu';
import style from './App.module.scss';

function App() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  return (
    <div className={style.app}>
      <Topbar active={menuOpen} setActive={setMenuOpen} />
      <Menu active={menuOpen} setActive={setMenuOpen} />
      <div className={style.sections}>
        <Intro />
        <Works />
        <Contact />
      </div>
    </div>
  );
}

export default App;
