import React from "react"
import "./Header.css"
import logo from "./../../images/logo2.jpg"

export default function Header() {
    return (
        <>
            <div id="topo"></div>
            <header className="center">
                {/* EXIBIÇÃO PARA WEB */}
                <div className="div-esquerda no-mobile">
                    <div>
                        <p>&nbsp;&nbsp;Simplificando seu trabalho.<br />&nbsp;&nbsp;Aqui você encontrará conteúdos acerca das principais ferramentas digitais.</p>
                    </div>
                </div>
                <div className="div-direita no-mobile">
                    <img src={logo} alt="Logo do site" />
                </div>

                {/* EXIBIÇÃO PARA MOBILE */}
                <div className="center mobile">
                    <div className="div-imagem center mobile">
                        <img src={logo} alt="Logo do site" />

                        <div className="div-central center mobile">                          
                            <p>Simplificando seu trabalho.<br />Disponibilizando conteúdos acerca das principais ferramentas digitais.</p>                           
                        </div>
                    </div>
                </div>

            </header>
        </>
    )
}