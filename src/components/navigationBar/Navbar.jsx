import React, { useState } from "react"
import "./Navbar.css"

export default function Navbar() {
    const [exibirBottomNavigation, setExibirBottomNavigation] = useState(false);
    const [iconeMenu, setIconeMenu] = useState(true);
    return (
        <>
            {/* EXIBIÇÃO WEB */}
            <nav className="center navigationbar no-mobile">
                <ul className="nav-items center no-mobile">
                    <a href="#videoconferencia"><li>Videoconferência&nbsp;</li></a>
                    <a href="#ferramentasGoogle"><li>| Ferramentas Google |</li></a>
                    <a href="#goConqr"><li>&nbsp;Goconqr</li></a>
                </ul>
                <h1 className="titulo no-mobile">Mantenha-se<br />informado</h1>
                <ul className="nav-items center no-mobile">
                    <a href="#trello"><li>Trello&nbsp;</li></a>
                    <a href="#classroom"><li>| Google sala de aula |</li></a>
                    <a href="#escolaDigital"><li> &nbsp;Escola digital</li></a>
                </ul>
            </nav>

            {/* BOTÃO DE MENU NO MOBILE */}
            <div className="mobile bt-menu-mobile"
                onClick={() => {
                    if (exibirBottomNavigation) {
                        setExibirBottomNavigation(false)
                        setIconeMenu(true)
                    } else {
                        setExibirBottomNavigation(true)
                        setIconeMenu(false)
                    }
                }}>
                <h2 className="titulo mobile">Mantenha-se informado</h2>
                <div className="bt-menu">
                    {iconeMenu && <i class="fa fa-bars"></i>}
                    {!iconeMenu && <i class="fa fa-times"></i>}
                </div>
            </div>

            {/* EXIBIÇÃO MOBILE */}
            <nav className={exibirBottomNavigation ? "mobile" : "no-mobile"}>
                <ul className="nav-items center mobile">
                    <a href="#videoconferencia"><li>Videoconferência</li></a>
                    <a href="#ferramentasGoogle"><li>Ferramentas Google</li></a>
                    <a href="#goConqr"><li>Goconqr</li></a>
                    <a href="#trello"><li>Trello</li></a>
                    <a href="#classroom"><li>Google sala de aula</li></a>
                    <a href="#escolaDigital"><li>Escola digital</li></a>
                </ul>
            </nav>

        </>
    )
}