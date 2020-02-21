import React from 'react';
import useIpfsSite from './hooks/use-ipfs-site';
import LoadingIpfsSite from './Components/LoadingIpfsSite';

import './App.css';

function createMarkup(site) {
  return {__html: site};
}

function App() {
  const site = useIpfsSite('QmezFjxaWTMZ8BxVD7km3KuyX56Heqt57ATdpourn2G9dQ/index.html');

  return site ? (
    <div className="App" dangerouslySetInnerHTML={createMarkup(site)} />
  ): (<LoadingIpfsSite />)
}

export default App;
