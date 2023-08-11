import React from 'react';
import Sidebar from './components/sidebar/sidebar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/pages/Dashboard/Dashboard';
import Housekeeping from './components/pages/Housekeeping/Housekeeping';
import Maintenance from './components/pages/Maintenance/Maintenance';
import Messages from './components/pages/Messages/Messages';
import Settings from './components/pages/Settings/Settings';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App" id="outer-container">
        <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
        <div id="page-wrap">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/housekeeping" element={<Housekeeping />} />
            <Route path="/maintenance" element={<Maintenance />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
