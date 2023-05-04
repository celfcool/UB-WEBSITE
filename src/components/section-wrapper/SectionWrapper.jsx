import React from 'react'
import './SectionWrapper.css'

function SectionWrapper(props) {
  return (
    <div  className="section-wrapper">
        {props.children}
    </div>
  )
}

export default SectionWrapper