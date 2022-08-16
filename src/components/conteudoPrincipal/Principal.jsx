import React, { useState } from "react"
import "./Principal.css"
import logoZoom from "./../../images/logoZoom.png"
import logoGoogleMeet from "./../../images/logoGoogleMeet.png"
import logoMicrosoftTeams from "./../../images/logoMicrosoftTeams.png"
import iconeGoogleMeet from "./../../images/googlemeet.png"
import iconeZoom from "./../../images/zoom.png"
import iconeMicrosoftTeams from "./../../images/teams.png"

export default function Principal() {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    const root = document.getElementById("root");
    let larguraTela = root.clientWidth;
    
    const [esconder, setEsconder] = useState(false);
    
    function trocarIcone(){
        if(larguraTela < 1154){
            setEsconder(true)
        } else {
            setEsconder(false)
        }
    }

    window.addEventListener("load", trocarIcone )

    return (
        <>
            <div className="center principal-center">
                <br/> <br/>
                <h1 className="titulo-secao">Videoconferência</h1>
                <div className="container">
                    <div className="bloc-tabs">
                        <button
                            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                            onClick={() => toggleTab(1)}
                        >
                            <img src={logoZoom} className={esconder && "esconderIcone"}/>
                            <img src={iconeZoom} className={!esconder && "esconderIcone"}/>
                        </button>
                        <button
                            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                            onClick={() => toggleTab(2)}
                        >
                            <img src={logoGoogleMeet} className={esconder && "esconderIcone"}/>
                            <img src={iconeGoogleMeet} className={!esconder && "esconderIcone"}/>
                        </button>
                        <button
                            className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                            onClick={() => toggleTab(3)}
                        >
                            <img src={logoMicrosoftTeams} className={esconder && "esconderIcone"}/>
                            <img src={iconeMicrosoftTeams} className={!esconder && "esconderIcone"}/>
                        </button>
                    </div>

                    <div className="content-tabs">
                        <div
                            className={toggleState === 1 ? "content  active-content" : "content"}
                        >
                            <h2>Content 1</h2>
                            <hr />
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
                                praesentium incidunt quia aspernatur quasi quidem facilis quo nihil
                                vel voluptatum?
                            </p>
                        </div>

                        <div
                            className={toggleState === 2 ? "content  active-content" : "content"}
                        >
                            <h2>Content 2</h2>
                            <hr />
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
                                voluptatum qui adipisci.
                            </p>
                        </div>

                        <div
                            className={toggleState === 3 ? "content  active-content" : "content"}
                        >
                            <h2>Content 3</h2>
                            <hr />
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
                                nostrum rerum laudantium totam unde adipisci incidunt modi alias!
                                Accusamus in quia odit aspernatur provident et ad vel distinctio
                                recusandae totam quidem repudiandae omnis veritatis nostrum
                                laboriosam architecto optio rem, dignissimos voluptatum beatae
                                aperiam voluptatem atque. Beatae rerum dolores sunt.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}