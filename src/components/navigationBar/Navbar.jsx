import React from "react"
import Logo from "./../../images/fd.jpg"
import "./Navbar.css"

export default function Navbar() {
    return (
        <>
            <nav className="center navigationbar">
                <ul className="nav-items center">
                    <a href=""><li>Videoconferência&nbsp;</li></a>
                    <a href=""><li>| Ferramentas Google |</li></a>
                    <a href=""><li>&nbsp;Goconqr</li></a>
                </ul>
                <img className="logo" src={Logo} alt="Logo do site" />
                <ul className="nav-items center">
                    <a href=""><li>Trello&nbsp;</li></a>
                    <a href=""><li>| Google sala de aula |</li></a>
                    <a href=""><li> &nbsp;Escola digital</li></a>
                </ul>
            </nav>
        </>
    )
}