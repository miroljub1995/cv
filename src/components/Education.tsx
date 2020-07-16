import React from 'react'
import { studies } from '../data/education.json'
import './Education.css'

type Studies = {
  university: string,
  from: string,
  to: string,
  school: string,
  studies: string,
  department: string,
  module?: string,
  GPAByNow?: string,
  GPA?: string
}

const Items = () => (
  <div className='column'>
    {studies.map((studies: Studies, key) => (
      <div key={key} className='studies column'>
        <div>
          <b>{studies.university}</b>
          <p>{`${studies.from} - ${studies.to}`}</p>
        </div>
        <div>
          {`${studies.school}`}
        </div>
        <div>{`${studies.studies}, Department of ${studies.department}, ${studies.GPA ? 
          `GPA: ${studies.GPA}` : studies.GPAByNow ? `GPA by now: ${studies.GPAByNow}` : ''}`}</div>
      </div>
    ))}
  </div>
)

export default () => (
  <>
    <h3>Eduation</h3>
    <Items />
  </>
)