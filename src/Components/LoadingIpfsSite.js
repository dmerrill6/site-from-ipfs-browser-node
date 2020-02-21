import React from 'react';
import logo from '../logo.svg';
import './LoadingIpfsSite.css';

const LoadingIpfsSite = () => (
  <div className="LoadingIpfsSite">
    <div className="LoadingSiteLogo">
      <img alt='IPFS logo' src={logo} style={{ height: 200 }} className='Logo' />
      <h3>Loading your site through IPFS...</h3>
    </div>
  </div>
);

export default LoadingIpfsSite;