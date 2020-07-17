import React from 'react'
import './App.css'
import PersonalInfo from './PersonalInfo'
import Education from './Education'
import Experiances from './Experiances'

function App() {
  return (
    <div className="app">
      <div className='column'>
        <PersonalInfo />
      </div>
      <div className='column'>
        <Education />
        <Experiances />
      </div>
    </div>
  )
}

export default App
