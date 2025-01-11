import './App.css';
import SSRContentLoader from './components/ssr-content-loader/SSRContentLoader';
import TopProjectsCarousel from './components/TopProjectsCarousel/TopProjectsCarousel';

function App() {
  return (
    <div className="App">
      <TopProjectsCarousel />
      <SSRContentLoader endpoint='resume' />
    </div>
  );
}

export default App;
