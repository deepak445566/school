import React from 'react'
import Home from './components/Home'

import WhyChooseUs from './components/WhyChooseUs'
import MeetOurTeachers from './components/MeetOurTeachers'
import ScheduleSection from './components/ScheduleSection'
import AboutUs from './components/About'
import Footer from './components/Footer'
import ProgramSection from './components/ProgramSection'

function App() {
  return (
    <>
    <Home/>
   <AboutUs/>
   <ProgramSection/>
    <WhyChooseUs/>
    <MeetOurTeachers/>
    <ScheduleSection/>
    <Footer/>
    </>
  )
}

export default App