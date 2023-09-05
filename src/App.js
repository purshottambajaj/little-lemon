import { Route, Routes } from 'react-router-dom';
import pages from './utils/pages';
import Layout from './components/layout/Layout';
import Home from './components/pages/Home';
import Bookings from './components/pages/Booking';
import ConfirmedBooking from './components/pages/Booking/ConfirmedBooking';
import NotFound from './components/pages/NotFound';
import UnderConstruction from './components/pages/UnderConstruction';
import './App.css';
import OurStory from './components/pages/Home/OurStory';
import WeekSpecials from './components/pages/Home/WeekSpecials';

const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path={pages.get('home').path} element={<Home />} />
          <Route path={pages.get('about').path} element={<OurStory />} />
          <Route path={pages.get('menu').path} element={<WeekSpecials />} />
          <Route path={pages.get('bookings').path} element={<Bookings />} />
          <Route path={pages.get('confirmedBooking').path} element={<ConfirmedBooking />} />
          <Route path={pages.get('orderOnline').path} element={<UnderConstruction />} />
          <Route path={pages.get('login').path} element={<UnderConstruction />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;