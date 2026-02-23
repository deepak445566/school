import React from 'react'
import Home from './components/Home'
import WhyChooseUs from './components/WhyChooseUs'

import ScheduleSection from './components/ScheduleSection'
import AboutUs from './components/About'
import Footer from './components/Footer'
import ProgramSection from './components/ProgramSection'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import AdmissionForm from './pages/AdmissionForm'
import FranchiseForm from './pages/FranchiseForm'
import FounderMessage from './pages/FounderMessage'

// Home Page Component - Jisme saare components ek saath honge
const HomePage = () => {
  return (
    <>
      <Navbar />
      <Home />
      <AboutUs />
      <ProgramSection />
      <WhyChooseUs />
    
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

       <Route path='/france' element={<FranchiseForm />} />
       <Route path='/founder' element={<FounderMessage/>}/>
       <Route path=''
    </Routes>
  )
}

export default App