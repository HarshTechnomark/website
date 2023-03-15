import React, { Fragment } from 'react';
import './App.css';
import AccountSummary from './components/AccountSummary/AccountSummary';
import AvailableBalance from './components/AvailableBalance/AvailableBalance';
import Manager from './components/Manager/Manager';
import Navbar from './components/Navbar/Navbar';
import QuickLinks from './components/QuickLinks/QuickLinks';

function App() {
  return (
    <Fragment>
      {/* <Navbar /> */}
      {/* <AvailableBalance /> */}
      {/* <AccountSummary /> */}
      {/* <QuickLinks /> */}
      <Manager />
    </Fragment>
  );
}

export default App;
