import React from 'react'
import './Team.css'
import { Link } from 'react-router-dom';
import member1 from'../../assets/images/team-member-1.png'
import member2 from'../../assets/images/team-member-2.png'
import member3 from'../../assets/images/team-member-3.png'
import member4 from'../../assets/images/team-member-4.png'
import member5 from'../../assets/images/team-member-5.png'
import member6 from'../../assets/images/team-member-6.png'
import member7 from'../../assets/images/team-member-7.png'
import member8 from'../../assets/images/team-member-8.png'
import member9 from'../../assets/images/team-member-9.png'

function Team() {
  return (
    <section className="team" id="team">
        <div className="container">

        <h2 className="h2 section-title">Active Team Members</h2>

        <ul className="team-list">

            <li>
            <Link to="/team/member1" className="team-member">
                <figure>
                <img src={member1} alt="Team member image" />
                </figure>

                <ion-icon name="link-outline"></ion-icon>
            </Link>
            </li>

            <li>
            <Link to="/team/member2" className="team-member">
                <figure>
                <img src={member2} alt="Team member image" />
                </figure>

                <ion-icon name="link-outline"></ion-icon>
            </Link>
            </li>

            <li>
            <Link to="/team/member3" className="team-member">
                <figure>
                <img src={member3} alt="Team member image" />
                </figure>

                <ion-icon name="link-outline"></ion-icon>
            </Link>
            </li>

            <li>
            <Link to="/team/member4" className="team-member">
                <figure>
                <img src={member4} alt="Team member image" />
                </figure>

                <ion-icon name="link-outline"></ion-icon>
            </Link>
            </li>

            <li>
            <Link to="/team/member5" className="team-member">
                <figure>
                <img src={member5} alt="Team member image" />
                </figure>

                <ion-icon name="link-outline"></ion-icon>
            </Link>
            </li>

            <li>
            <Link to="/team/member6" className="team-member">
                <figure>
                <img src={member6} alt="Team member image" />
                </figure>

                <ion-icon name="link-outline"></ion-icon>
            </Link>
            </li>

            <li>
            <Link to="/team/member7" className="team-member">
                <figure>
                <img src={member7} alt="Team member image" />
                </figure>

                <ion-icon name="link-outline"></ion-icon>
            </Link>
            </li>

            <li>
            <Link to="/team/member8" className="team-member">
                <figure>
                <img src={member8} alt="Team member image" />
                </figure>

                <ion-icon name="link-outline"></ion-icon>
            </Link>
            </li>

            <li>
            <Link to="/team/member9" className="team-member">
                <figure>
                <img src={member9}  alt="Team member image" />
                </figure>

                <ion-icon name="link-outline"></ion-icon>
            </Link>
            </li>

        </ul>

        <button className="btn btn-primary">view all members</button>

        </div>
    </section>
  )
}

export default Team