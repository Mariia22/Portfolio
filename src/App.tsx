import { useState } from 'react';
import Contact from './components/Contact/Contact';
import Intro from './components/Intro/Intro';
import Portfolio from './components/Portfolio/Portfolio';
import Topbar from './components/Topbar/Topbar';
import Works from './components/Works/Works';
import style from './App.module.scss';

function App() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  return (
    <div className={style.app}>
      <Topbar active={menuOpen} setActive={setMenuOpen} />
      <div className={style.sections}>
        <Intro />
        <Portfolio />
        <Works />
        <Contact />
      </div>
    </div>
  );
}

export default App;
