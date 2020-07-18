import React from 'react'
import { experiences } from '../data/experiences.json'
import Descriptions from './Descriptions'
import './Experiances.css'
import Keywords from './Keywords'

const Items = () => (
  <>
    {experiences.map((exp, i) => (
      <div key={i} className='column exp'>
        <div>
          <b>
            <span>{exp.position} in </span>
            <a href={exp.companyLink} target="_blank" rel="noopener noreferrer">{exp.company}</a>
          </b>
          <span>, {exp.location}</span>
          <span>{exp.from} - {exp.to}</span>
        </div>
        <Descriptions val={exp.descriptions} />
        <Keywords val={exp.keywords} />
      </div>
    ))}
  </>
)

export default () => (
  <>
    <h3>Experience</h3>
    <Items />
  </>
)