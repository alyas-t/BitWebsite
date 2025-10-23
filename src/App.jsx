import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import EventsPage from './components/Events/EventsPage';
import AllUpcomingEvents from './components/Events/AllUpcomingEvents';
import PastEvents from './components/Events/PastEvents';
import ResourcesPage from './components/Resources/ResourcesPage';
import GetInvolved from './components/GetInvolved/GetInvolved';
import BoardResponsibilities from './components/GetInvolved/BoardResponsibilities';
import ClubPageExample from './components/ClubPageExample';
import PastBoardMembers from './components/About/PastBoardMembers';
import PartnersPage from './components/Partners/PartnersPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="events" element={<EventsPage />} />
          <Route path="events/upcoming" element={<AllUpcomingEvents />} />
          <Route path="events/past" element={<PastEvents />} />
          <Route path="resources" element={<ResourcesPage />} />
          <Route path="get-involved" element={<GetInvolved />} />
          <Route path="volunteer-opportunities" element={<BoardResponsibilities />} />
          <Route path="about" element={<ClubPageExample />} />
          <Route path="about/past-board" element={<PastBoardMembers />} />
          <Route path="partners" element={<PartnersPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App; 