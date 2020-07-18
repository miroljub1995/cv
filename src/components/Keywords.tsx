import React from 'react'
import './Keywords.css'

export default ({ val }: { val: string[] }) => (
  <ul className='keywords'>
    {val.map(w => (
      <li key={w}>{w}</li>
    ))}
  </ul>
)