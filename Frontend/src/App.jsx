import { useContext, useState } from 'react'

import './App.css'
import './index.css'
import Header from './components/Header'

import JobListingpage from './pages/JobListingpage'
import { JobContext } from './contexts/JobContext'

import { Sidebar } from './components/Sidebar'
import AllJobs from './pages/AllJobs'

function App() {

  const { filteredJobs } = useContext(JobContext)
  return (
    <div >
      <Header />
      <Sidebar />
      <AllJobs />
      <JobListingpage />


    </div>
  )
}

export default App
