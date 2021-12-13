import Intro from './components/Intro/Intro';
import Topbar from './components/Topbar/Topbar';

function App() {
  return (
    <div className="App">
      <Topbar />
      <div className="sections">
        <Intro />
      </div>
    </div>
  );
}

export default App;
