import './App.scss';
import Navigation from './routes/navigation/navigation.component';
// import MobileNavigation from './components/mobile-navigation/mobile-navigation.component';
import Hero from './components/hero/hero.component';
import OurStory from './routes/our-story/our-story.component';
import LatestMusic from './routes/latest-music/latest-music.component';
import { Route, Routes } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

function App() {

  // const navigationTypeSwitch;

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Hero />} />
        <Route path='/our-story' element={<OurStory />}/>
        <Route path='/latest-music' element={<LatestMusic />}/>
      </Route>
    </Routes>
  );
}

export default App;
