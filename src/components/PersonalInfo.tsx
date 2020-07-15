import React from 'react'
import './PersonalInfo.css'
import PersonalInfoData from '../data/personalInfo.json'
import profileImage from '../data/profileImage.jpg'

const Contact = () => (
  <div className='contact'>
    <div>
      <p>Mobile:</p>
      <a href={`tel:${PersonalInfoData.contact.mobile}`}>{PersonalInfoData.contact.mobile}</a>
    </div>
    <div>
      <p>Email:</p>
      <a href={`mailto:${PersonalInfoData.contact.email}`}>{PersonalInfoData.contact.email}</a>
    </div>
    <div>
      <p>Location:</p>
      <p>{`${PersonalInfoData.contact.city}, ${PersonalInfoData.contact.country}`}</p>
    </div>
    <div>
      <p>LinkedIn:</p>
      <a href={PersonalInfoData.contact.linkedIn}>Visit profile</a>
    </div>
    <div>
      <p>GitHub:</p>
      <a href={PersonalInfoData.contact.github}>Visit profile</a>
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
        <p>{PersonalInfoData.birthDate}</p>
      </div>
      <p className='align-justify'>{PersonalInfoData.aboutMe}</p>
      <h3>Contact</h3>
      <Contact />
      <h3>Soft skills</h3>
      <p className='align-justify'>{PersonalInfoData.softSkills}</p>
    </div>
  )
}