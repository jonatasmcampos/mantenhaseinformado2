import React from "react"
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
                <h1 className="titulo">Mantenha-se<br/>informado</h1>
                <ul className="nav-items center">
                    <a href=""><li>Trello&nbsp;</li></a>
                    <a href=""><li>| Google sala de aula |</li></a>
                    <a href=""><li> &nbsp;Escola digital</li></a>
                </ul>
            </nav>
        </>
    )
}