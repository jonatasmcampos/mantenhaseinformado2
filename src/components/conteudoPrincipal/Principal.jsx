import React, { useState } from "react"
import "./Principal.css"
import logoZoom from "./../../images/logoZoom.png"
import logoGoogleMeet from "./../../images/logoGoogleMeet.png"
import logoMicrosoftTeams from "./../../images/logoMicrosoftTeams.png"
import iconeGoogleMeet from "./../../images/googlemeet.png"
import iconeZoom from "./../../images/zoom.png"
import iconeMicrosoftTeams from "./../../images/teams.png"

import Button from './../button/Button'

export default function Principal() {
    const linksForButtons = {
        irParaZoom: "https://zoom.us/",
        capacitacaoZoom: "https://success.zoom.us/rec/play/N-ZTeZ1ilIFb0vqaeawDxCg99SojdzW9XtBjg4vSVV2YxHZbwP-0JooL97QTuTcsIsHEe_txT5VnHipn.uZIXuCb0UZPSCU4l?continueMode=true&_x_zm_rtaid=XyNfc8dlQYC1uG0n6uSWtg.1628942468309.b32c2f40a6c107105bb5b72154caa06d&_x_zm_rhtaid=734",
        centralAjudaZoom: "https://support.zoom.us/hc/pt-br?_ga=2.142082673.210812303.1628946026-1779077322.1628946026",
        irParaGooleMeet: "https://meet.google.com/",
        capacitacaoGoogleMeet: "https://edu.google.com/intl/ALL_br/teacher-center/training/?modal_active=none",
        centralAjudaGoogleMeet: "https://support.google.com/meet/?hl=pt-BR#topic=7306097",
        TutorialPDFGoogleMeet: "https://services.google.com/fh/files/misc/google-meet-toolkit_pt-br.pdf",
        irParaMicrosoftTeams: "https://www.microsoft.com/pt-br/microsoft-teams/group-chat-software",
        informacoesMicrosoftTeams: "https://support.microsoft.com/pt-br/topic/criando-participando-e-executando-reuni%C3%B5es-utilizando-o-teams-para-aprendizagem-remota-788d730f-2c7e-4761-a059-c9b3fe87adf7",
        centralAjudaMicrosoftTeams: "https://support.microsoft.com/pt-br/teams",
        irParaSiteGoConqr: "https://www.goconqr.com/pt",
        comoUsarGoConqr: "https://www.goconqr.com/pt/faq/54-Guia/301-Como-usar-as-ferramentas-de-GoConqr%3F",
        irParaSiteTrello: "https://trello.com/pt-BR",
        guiaTrello: "https://trello.com/guide",
        irParaSiteGoogleSalaDeAula: "https://edu.google.com/intl/ALL_br/products/classroom/",
        centralAjudaGoogleSalaDeAula: "https://support.google.com/edu/classroom/?hl=pt-BR#topic=10298088",
        irParaSiteEscolaDigital: "https://escoladigital.org.br/",
        centralAjudaEscolaDigital: "https://escoladigital.org.br/ajuda",
        comousarGmail: "https://support.google.com/mail/#topic=7065107",
        comousarAgenda: "https://support.google.com/calendar/#topic=10509740",
        comousarDrive: "https://support.google.com/drive/answer/2424384?hl=pt-BR&ref_topic=14940",
        comousarChat: "https://support.google.com/chat/?hl=pt-BR#topic=7649316",
        comousarDocumentos: "https://support.google.com/docs/topic/9046002",
        comousarPlanilhas: "https://support.google.com/docs/topic/9054603",
        comousarApresentacoes: "https://support.google.com/docs/topic/9052835",
        comousarFormularios: "https://support.google.com/docs/topic/9055404"
    }

    function toWhere(id) {
        switch (id) {
            // CARD ZOOOM -----------------------------------
            case '1':
                window.open(linksForButtons.irParaZoom);
                break;
            case '2':
                window.open(linksForButtons.capacitacaoZoom);
                break;
            case '3':
                window.open(linksForButtons.centralAjudaZoom)
                break;
            // CARD GOOGLE MEET-----------------------------------
            case '4':
                window.open(linksForButtons.irParaGooleMeet)
                break;
            case '5':
                window.open(linksForButtons.capacitacaoGoogleMeet)
                break;
            case '6':
                window.open(linksForButtons.TutorialPDFGoogleMeet)
                break;
            case '7':
                window.open(linksForButtons.centralAjudaGoogleMeet)
                break;
            // CARD MICROSOFT TEAMS-----------------------------------
            case '8':
                window.open(linksForButtons.irParaMicrosoftTeams)
                break;
            case '9':
                window.open(linksForButtons.informacoesMicrosoftTeams)
                break;
            case '10':
                window.open(linksForButtons.centralAjudaMicrosoftTeams)
                break;
            // GOCONQR -----------------------------------
            case '11':
                window.open(linksForButtons.irParaSiteGoConqr)
                break;
            case '12':
                window.open(linksForButtons.comoUsarGoConqr)
                break;
            // TRELLO -----------------------------------
            case '13':
                window.open(linksForButtons.irParaSiteTrello)
                break;
            case '14':
                window.open(linksForButtons.guiaTrello)
                break;
            // GOOGLE SALA DE AULA -----------------------------------
            case '15':
                window.open(linksForButtons.irParaSiteGoogleSalaDeAula)
                break;
            case '16':
                window.open(linksForButtons.centralAjudaGoogleSalaDeAula)
                break;
            // FERRAMENTAS GOOGLE  -----------------------------------
            case '17':
                window.open(linksForButtons.comousarGmail)
                break;
            case '18':
                window.open(linksForButtons.comousarAgenda)
                break;
            case '19':
                window.open(linksForButtons.comousarDrive)
                break;
            case '20':
                window.open(linksForButtons.comousarChat)
                break;
            case '21':
                window.open(linksForButtons.comousarDocumentos)
                break;
            case '22':
                window.open(linksForButtons.comousarPlanilhas)
                break;
            case '23':
                window.open(linksForButtons.comousarApresentacoes)
                break;
            case '24':
                window.open(linksForButtons.comousarFormularios)
                break;

            // CARD ESCOLA DIGITAL

            case '25':
                window.open(linksForButtons.irParaSiteEscolaDigital)
                break;
            case '26':
                window.open(linksForButtons.centralAjudaEscolaDigital)
                break;

            default:
                alert('Erro!')
                break;
        }
    }

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    const root = document.getElementById("root");
    let larguraTela = root.clientWidth;

    const [esconder, setEsconder] = useState(false);

    function trocarIcone() {
        if (larguraTela < 1154) {
            setEsconder(true)
        } else {
            setEsconder(false)
        }
    }

    window.addEventListener("load", trocarIcone)

    return (
        <>
            <div className="center principal-center">
                <br /> <br />
                <h1 className="titulo-secao">Videoconferência</h1>
                <div className="container">
                    <div className="bloc-tabs">
                        <button
                            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                            onClick={() => toggleTab(1)}
                        >
                            <img src={logoZoom} className={esconder && "esconderIcone"} />
                            <img src={iconeZoom} className={!esconder && "esconderIcone"} />
                        </button>
                        <button
                            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                            onClick={() => toggleTab(2)}
                        >
                            <img src={logoGoogleMeet} className={esconder && "esconderIcone"} />
                            <img src={iconeGoogleMeet} className={!esconder && "esconderIcone"} />
                        </button>
                        <button
                            className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                            onClick={() => toggleTab(3)}
                        >
                            <img src={logoMicrosoftTeams} className={esconder && "esconderIcone"} />
                            <img src={iconeMicrosoftTeams} className={!esconder && "esconderIcone"} />
                        </button>
                    </div>

                    <div className="content-tabs">
                        <div
                            className={toggleState === 1 ? "content  active-content" : "content"}
                        >
                            <div>
                                <p>
                                    Fornece serviços de vídeocomunicação e
                                    chat online, é usado para teleconferência,
                                    trabalho à distância, educação à distância
                                    e relações sociais.
                                </p>
                            </div>
                            <div className='btnDiv center'>
                                <Button zoomBtn id='1' label="Ir para o Zoom" click={toWhere} /> <br />
                                <Button zoomBtn largerBtn id='2' label="Capacitação para usuários Zoom" click={toWhere} /> <br />
                                <Button zoomBtn id='3' label="Central de Ajuda" click={toWhere} />
                            </div>
                            <div className="linksDiv">
                                <hr />
                                <p>Saiba como:</p>
                                <a href="https://support.zoom.us/hc/pt-br/articles/201362613-Como-realizo-uma-reuni%C3%A3o-por-v%C3%ADdeo-" target="_blank" rel="noreferrer"><span>►</span> Criar uma reunião.</a><br />
                                <a href="https://support.zoom.us/hc/pt-br/articles/201362413-Agendamento-de-reuni%C3%B5es" target="_blank" rel="noreferrer"><span>►</span> Agendar uma reunião.</a><br />
                                <a href="https://support.zoom.us/hc/pt-br/articles/201362193-Como-ingressar-em-uma-reuni%C3%A3o" target="_blank" rel="noreferrer"><span>►</span> Ingressar em uma reunião.</a><br />
                                <a href="https://support.zoom.us/hc/pt-br/articles/201362473-Grava%C3%A7%C3%A3o-local" target="_blank" rel="noreferrer"><span>►</span> Gravar uma reunião.</a><br />
                                <a href="https://support.zoom.us/hc/pt-br/articles/201362183-Como-convidar-outras-pessoas-para-ingressar-em-uma-reuni%C3%A3o" target="_blank" rel="noreferrer"><span>►</span> Convidar pessoas para uma reunião.</a><br />
                                <a href="https://support.zoom.us/hc/pt-br/articles/201362603-Controles-do-anfitri%C3%A3o-em-uma-reuni%C3%A3o" target="_blank" rel="noreferrer"><span>►</span> Controles de um anfitrião sobre uma reunião.</a>
                            </div>
                        </div>

                        <div
                            className={toggleState === 2 ? "content  active-content" : "content"}
                        >
                            <div>
                                <p>
                                    O Google Meet é um serviço de
                                    videocomunicação. Conecte-se, colabore e
                                    celebre com segurança de qualquer lugar.
                                </p>
                            </div>
                            <div className='btnDiv center'>
                                <Button googleMeetBtnY id='4' label="Ir para o Google Meet" click={toWhere} /> <br />
                                <Button googleMeetBtnG largerBtn id='5' label="Curso de treinamento para professores" click={toWhere} /> <br />
                                <div className="btnDiv2 center">
                                    <Button googleMeetBtnR id='6' label="Tutorial PDF" click={toWhere} />
                                    <Button googleMeetBtnB id='7' label="Central de Ajuda" click={toWhere} />
                                </div>
                            </div>
                            <div className="linksDiv">
                                <hr />
                                <p>Saiba como:</p>
                                <a href="https://support.google.com/meet/answer/9302870?hl=pt-BR&co=GENIE.Platform%3DAndroid" target="_blank" rel="noreferrer"><span>►</span> Criar uma reunião.</a><br />
                                <a href="https://support.google.com/meet/answer/9303069?hl=pt-BR&ref_topic=7192926" target="_blank" rel="noreferrer"><span>►</span> Ingressar em uma reunião.</a><br />
                                <a href="https://support.google.com/meet/answer/9303164?hl=pt-BR&ref_topic=7192926" target="_blank" rel="noreferrer"><span>►</span> Adicionar ou remover pessoas na reunião.</a><br />
                                <a href="https://support.google.com/meet/answer/9308681?hl=pt-BR" target="_blank" rel="noreferrer"><span>►</span> Gravar uma reunião.</a><br />
                                <a href="https://support.google.com/meet/answer/9308856?hl=pt-BR&co=GENIE.Platform%3DAndroid" target="_blank" rel="noreferrer"><span>►</span> Compartilhar tela em uma reunião.</a><br />
                            </div>
                        </div>

                        <div
                            className={toggleState === 3 ? "content  active-content" : "content"}
                        >
                            <div>
                                <p>
                                    Reuniões, conversas, chamadas e
                                    colaboração em um só lugar.
                                </p>
                            </div>
                            <div className='btnDiv center'>
                                <Button microsoftTeamsBtn id='8' label="Ir para o Microsoft Teams" click={toWhere} /><br />
                                <div className="btnDiv2">
                                    <Button microsoftTeamsBtn id='9' label="Informações" click={toWhere} />
                                    <Button microsoftTeamsBtn id='10' label="Central de Ajuda" click={toWhere} />
                                </div>
                            </div>
                            <div className="linksDiv">
                                <hr />
                                <p>Saiba como:</p>
                                <a href="https://support.microsoft.com/pt-br/office/agendar-uma-reuni%C3%A3o-no-microsoft-teams-943507a9-8583-4c58-b5d2-8ec8265e04e5" target="_blank" rel="noreferrer"><span>►</span> Agendar uma reunião.</a><br />
                                <a href="https://support.microsoft.com/pt-br/office/ingressar-em-uma-reuni%C3%A3o-no-teams-1613bb53-f3fa-431e-85a9-d6a91e3468c9" target="_blank" rel="noreferrer"><span>►</span> Ingressar em uma reunião.</a><br />
                                <a href="https://support.microsoft.com/pt-pt/office/gravar-uma-reuni%C3%A3o-no-teams-34dfbe7f-b07d-4a27-b4c6-de62f1348c24?ui=pt-pt&rs=pt-pt&ad=pt" target="_blank" rel="noreferrer"><span>►</span> Gravar uma reunião.</a><br />
                                <a href="https://support.microsoft.com/pt-br/office/convidar-pessoas-para-uma-reuni%C3%A3o-no-teams-4bc5981c-446e-4e93-866a-d757466b556a" target="_blank" rel="noreferrer"><span>►</span> Convidar pessoas para uma reunião.</a><br />
                                <a href="https://support.microsoft.com/pt-br/office/compartilhar-conte%C3%BAdo-em-uma-reuni%C3%A3o-no-teams-fcc2bf59-aecd-4481-8f99-ce55dd836ce8" target="_blank" rel="noreferrer"><span>►</span> Compartilhar tela em uma reunião.</a><br />
                                <a href="https://support.microsoft.com/pt-br/office/compartilhar-som-do-seu-computador-em-uma-reuni%C3%A3o-teams-ou-evento-ao-vivo-dddede9f-e3d0-4330-873a-fa061a0d8e3b" target="_blank" rel="noreferrer"><span>►</span> Compartilhar som do seu computador em uma reunião.</a><br />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}