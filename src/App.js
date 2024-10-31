import './App.scss';
import Navigation from './routes/navigation/navigation.component';
import NavigationWithLogo from './routes/navigation-with-logo/navigation-with-logo.component';
import Hero from './components/hero/hero.component';
import OurStory from './routes/our-story/our-story.component';
import LatestMusic from './routes/latest-music/latest-music.component';
import { Route, Routes } from 'react-router-dom';
import { Outlet, useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();
  const navigation = (location.pathname === '/') ? <Navigation outlet={<Outlet />} /> : <NavigationWithLogo outlet={<Outlet />}/>;

  return (
    <Routes>
      <Route path='/' element={navigation}>
        <Route index element={<Hero />} />
        <Route path='/our-story' element={<OurStory />}/>
        <Route path='/latest-music' element={<LatestMusic />}/>
      </Route>
    </Routes>
  );
}

export default App;
