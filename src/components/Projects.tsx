import React from "react";
import { projects } from '../data/projects.json'
import Keywords from "./Keywords";
import Descriptions from "./Descriptions";

const Items = () => (
  <>
    {projects.map(project => (
      <div className='column marg-l-20'>
        <b>{project.name}</b>
        <Descriptions val={project.descriptions} />
        <Keywords val={project.keywords} />
      </div>
    ))}
  </>
)

export default () => (
  <>
    <h3>Projects</h3>
    <Items />
  </>
)