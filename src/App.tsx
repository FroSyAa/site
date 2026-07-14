import { Header } from './components/Header';
import { AboutMe } from './sections/AboutMe/AboutMe';
import { Contacts } from './sections/Contacts/Contacts';
import { Experience } from './sections/Experience/Experience';
import { Hero } from './sections/Hero/Hero';
import { Skills } from './sections/Skills/Skills';

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <AboutMe />
      <Experience />
      <Skills />
      <Contacts />
    </div>
  );
}

export default App;