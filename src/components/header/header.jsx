import React from "react"
import "./Header.css"
import logo from "./../../images/logo2.jpg"
import imgTitulo from "./../../images/img-titulo.png"

export default function Header() {
    return (
        <>
            <header className="center">
                <div className="div-esquerda">
                    <div>
                        <p>&nbsp;&nbsp;Simplificando seu trabalho.<br/>&nbsp;&nbsp;Aqui você encontrará conteúdos acerca das principais ferramentas digitais.</p>
                        {/* <img src={imgTitulo} alt="Logo do site"/> */}
                    </div>
                </div>
                <div className="div-direita">
                    <img src={logo} alt="Logo do site"/>
                </div>
            </header>
        </>
    )
}