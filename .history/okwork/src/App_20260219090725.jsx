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

// Home Page Component - Jisme saare components ek saath honge
const HomePage = () => {
  return (
    <>
      <Navbar />
      <Home />
      <AboutUs />
      <ProgramSection />
      <WhyChooseUs />
      <MeetOurTeachers />
      <ScheduleSection />
      <Footer />
    </>
  )
}

function App() {
  return (
    <Routes>
      {/* Home Route - Saare components yahan render honge */}
      <Route path="/" element={<HomePage />} />
      
      {/* Admission Form Route */}
      <Route path='/admission' element={<AdmissionForm />} />

       <Route path='/france' element={<Fra />} />
    </Routes>
  )
}

export default App