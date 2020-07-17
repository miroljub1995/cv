import React from 'react'
import { experiences } from '../data/experiences.json'
import './Experiances.css'
import { switchExp } from './Utils'

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
        <div className='column'>
          {exp.description.map((desc, i) => switchExp(desc.type, {
            'text': () => (<span key={i}>{desc.value}</span>),
            'list': () => (
              <ul key={i} className='desc-list'>
                {(desc.value as string[]).map((val) => (
                  <li key={val}>{val}</li>
                ))}
              </ul>
            )
          }))}
        </div>
        <ul className='keywords'>
          {exp.keywords.map(w => (
            <li key={w}>{w}</li>
          ))}
        </ul>
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