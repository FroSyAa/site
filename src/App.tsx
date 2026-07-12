import { Header } from './components/Header';
import { AboutMe } from './sections/AboutMe/AboutMe';
import { Experience } from './sections/Experience/Experience';
import { Hero } from './sections/Hero/Hero';

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <AboutMe />
      <Experience />
    </div>
  );
}

export default App;