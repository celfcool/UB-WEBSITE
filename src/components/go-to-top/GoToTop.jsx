import React, { useState } from 'react'
import './GoToTop.css'

function GoToTop() {
    const [active, setActive] = useState('');
    window.addEventListener("scroll", function () {
        if (window.scrollY >= 800) {
            setActive('active')
        } else {
            setActive('')
        }
    })
    const handleClick = () => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth"
        })
    }
  return (
    <button onClick={handleClick} className={`btn btn-primary go-top ${active}`} data-go-top>
        <ion-icon name="chevron-up-outline"></ion-icon>
    </button>
  )
}

export default GoToTop