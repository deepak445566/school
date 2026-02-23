import React from 'react'
import Home from './components/Home'

import WhyChooseUs from './components/WhyChooseUs'
import MeetOurTeachers from './components/MeetOurTeachers'
import ScheduleSection from './components/ScheduleSection'
import AboutUs from './components/About'
import Footer from './components/Footer'
import ProgramSection from './components/ProgramSection'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import AdmissionForm from './pages/AdmissionForm'

function App() {
  return (
    <>
<Routes>

<Route path="/"
    <Navbar/>
    <Home/>
   <AboutUs/>
   <ProgramSection/>
    <WhyChooseUs/>
    <MeetOurTeachers/>
    <ScheduleSection/>
    <Footer/>
   />
    <Route path='/admission' element={<AdmissionForm/>}/>
    </Routes>
    </>
  )
}

export default App