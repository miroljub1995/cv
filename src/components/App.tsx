import React from 'react'
import './App.css'
import PersonalInfo from './PersonalInfo'
import Education from './Education'
import Experiance from './Experiance'

function App() {
  return (
    <div className="app">
      <div className='column'>
        <PersonalInfo />
      </div>
      <div className='column'>
        <h1>Miroljub Tomic</h1>
        <Education />
        <Experiance />
      </div>
    </div>
  )
}

export default App
