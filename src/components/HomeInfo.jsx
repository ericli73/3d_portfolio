import React from 'react'
import { Link } from 'react-router-dom'
import { arrow } from '../assets/icons'

const InfoBox = ({ text, link, btnText }) => (
    <div className = "info-box">
        <p className="font-medium sm: text-xl text-center">{text}</p>
        <Link to={link} className="neo-brutalism-white neo-btn">
            {btnText}
            <img src={arrow} className="w-4 h-4 object-contain" />
        </Link>
    </div>
)

const renderContent = {
    1: (
        <h1 className="sm:text-xl sm:leading-smug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
        Hi, I am <span className="font-semibold">Eric</span>
        <br/>
        An Applied Math Student at Northwestern University
        </h1>
    ),
    2: (
        <InfoBox 
        text="Started coding four years ago, and have been building projects ever since."
        link="/about"
        btnText="Learn more"
        />
    ),
    3: (
        <InfoBox 
        text="Started coding four years ago, and have been building projects ever since."
        link="/projects"
        btnText="Visit my portfolio"
        />
    ),
    4: (
        <InfoBox 
        text="Started coding four years ago, and have been building projects ever since."
        link="/contact"
        btnText="Let's connect"
        />
    ),
}

const HomeInfo = ({ currentStage }) => {
  return renderContent [currentStage] || null;
}

export default HomeInfo