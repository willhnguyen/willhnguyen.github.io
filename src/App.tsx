import React from 'react';
// import logo from './logo.svg';
import './App.css';
import BusinessCard from './component/BusinessCard';
import profile_pic from './assets/me.jpg';

function App() {
  return (
    <div className="App">
      <BusinessCard
        name={"William Nguyen"}
        profile_pic={profile_pic}
        email={"willhnguyen@gmail.com"}
        website={"www.willhnguyen.com"}
        github={"willhnguyen"}
        linkedin={"willhnguyen"} />
    </div>
  );
}

export default App;
