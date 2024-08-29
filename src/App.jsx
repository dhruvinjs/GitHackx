import { useState } from 'react'

import { BrowserRouter, Route,Routes } from 'react-router-dom'
import { TeamsMembers } from './Components/TeamMembers'
import Landingpg from './Components/Landing'
// import ContactUs from './Components/ContactUs'
import Contact from './Components/Contact'
// import ContactUs from './Components/ContactUs'


function App() {
  return (
    <BrowserRouter basename="/GitHackx">
      <Routes>
        <Route path="/" element={<Landingpg />} />
        <Route path="/Team" element={<TeamsMembers />} />
        <Route path='/ContactUs' element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;



