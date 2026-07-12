import { Header } from './components/Header';
import { AboutMe } from './sections/AboutMe/AboutMe';
import { Hero } from './sections/Hero/Hero';

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <AboutMe />
    </div>
  );
}

export default App;