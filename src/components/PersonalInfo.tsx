import React from 'react'
import './PersonalInfo.css'
import * as data from '../data/personalInfo.json'
import profileImage from '../data/profileImage.jpg'

const Contact = () => (
  <div className='contact'>
    <div>
      <p>Mobile:</p>
      <a href={`tel:${data.contact.mobile}`}>{data.contact.mobile}</a>
    </div>
    <div>
      <p>Email:</p>
      <a href={`mailto:${data.contact.email}`}>{data.contact.email}</a>
    </div>
    <div>
      <p>Location:</p>
      <p>{`${data.contact.city}, ${data.contact.country}`}</p>
    </div>
    <div>
      <p>LinkedIn:</p>
      <a href={data.contact.linkedIn} target="_blank" rel="noopener noreferrer">Visit profile</a>
    </div>
    <div>
      <p>GitHub:</p>
      <a href={data.contact.github} target="_blank" rel="noopener noreferrer">Visit profile</a>
    </div>
  </div>
)

export default function PersonalInfo() {
  return (
    <div className='personal-info'>
      <img className='profile-image' src={profileImage} alt='' />
      <h3>Personal info</h3>
      <div className='birth-date'>
        <p>Birth date</p>
        <p>{data.birthDate}</p>
      </div>
      <p className='align-justify'>{data.aboutMe}</p>
      <h3>Contact</h3>
      <Contact />
      <h3>Soft skills</h3>
      <p className='align-justify'>{data.softSkills}</p>
    </div>
  )
}