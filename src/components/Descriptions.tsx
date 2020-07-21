import React from "react";
import './Descriptions.css'
import { switchExp } from "../Utils";

export default ({ val }: { val: { type: string, value: string | string[] }[] }) => (
  <div className='column desc'>
    {val.map((desc, i) => switchExp(desc.type, {
      'text': () => (<span key={i}>{desc.value}</span>),
      'list': () => (
        <ul key={i}>
          {(desc.value as string[]).map((val) => (
            <li key={val}>{val}</li>
          ))}
        </ul>
      )
    }))}
  </div>
)