import React, { Component } from "react";
import Navbar from "./components/navigationBar/Navbar"
import Header from "./components/header/Header"
import Principal from "./components/conteudoPrincipal/Principal"
import Footer from "./components/footer/Footer"
import BotaoTopo from './components/botaoTopo/BotaoTopo'

export default class Main extends Component {
    render() {
        return (
            <>
                <Navbar />
                <Header />
                <Principal />
                <Footer />

                <BotaoTopo />
            </>
        )
    }
}