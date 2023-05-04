import React from 'react'
import './Footer.css'
import logo from'../../assets/images/ub-logo.svg'
import footerBottomImg from'../../assets/images/footer-bottom-img.png'

function Footer() {
  return (
    <>
        <footer>
            <div className="footer-top">
                <div className="container">

                    <div className="footer-brand-wrapper">

                    <a href="#" className="logo">
                        <img src={logo} alt="GameX logo" />
                    </a>

                    <div className="footer-menu-wrapper">

                        <ul className="footer-menu-list">

                        <li>
                            <a href="#hero" className="footer-menu-link">Home</a>
                        </li>

                        <li>
                            <a href="#about" className="footer-menu-link">About</a>
                        </li>

                        <li>
                            <a href="#news" className="footer-menu-link">News</a>
                        </li>

                        <li>
                            <a href="#team" className="footer-menu-link">Team</a>
                        </li>

                        <li>
                            <a href="#" className="footer-menu-link">Contact</a>
                        </li>

                        </ul>

                    </div>

                    </div>

                    <div className="footer-quicklinks">

                    <ul className="quicklink-list">

                        <li>
                        <a href="#" className="quicklink-item">Faq</a>
                        </li>

                        <li>
                        <a href="#" className="quicklink-item">Help center</a>
                        </li>

                        <li>
                        <a href="#" className="quicklink-item">Terms of use</a>
                        </li>

                        <li>
                        <a href="#" className="quicklink-item">Privacy</a>
                        </li>

                    </ul>

                    <ul className="footer-social-list">

                        <li>
                        <a href="#" className="footer-social-link">
                            <ion-icon name="logo-discord"></ion-icon>
                        </a>
                        </li>

                        <li>
                        <a href="#" className="footer-social-link">
                            <ion-icon name="logo-twitch"></ion-icon>
                        </a>
                        </li>

                        <li>
                        <a href="#" className="footer-social-link">
                            <ion-icon name="logo-xbox"></ion-icon>
                        </a>
                        </li>

                        <li>
                        <a href="#" className="footer-social-link">
                            <ion-icon name="logo-youtube"></ion-icon>
                        </a>
                        </li>

                    </ul>

                    </div>

                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <p className="copyright">
                    Copyright &copy; 2023 <a href="#">ubteam</a>. all rights reserved
                    </p>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer