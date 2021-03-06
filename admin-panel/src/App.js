import React from 'react'
import EventsPage from './components/EventsPage';
import OfficersPage from './components/OfficersPage';
import PostsPage from './components/PostsPage';
import { Tabs, Tab } from 'react-bootstrap'

function App() {


  return (
    <Tabs>
      <Tab eventKey="events" title="Events">
        <EventsPage />
      </Tab>
      <Tab eventKey="officers" title="Officers">
        <OfficersPage />
      </Tab>
      <Tab eventKey="posts" title="Posts">
        <PostsPage />
      </Tab>
    </Tabs>
  );
}

export default App;
