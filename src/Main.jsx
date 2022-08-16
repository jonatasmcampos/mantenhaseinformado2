import React, { Component } from "react";
import Navbar from "./components/navigationBar/Navbar"
import Header from "./components/header/Header"
import Principal from "./components/conteudoPrincipal/Principal"

export default class Main extends Component {
    render() {
        return (
            <>
                <Navbar />
                <Header />
                <Principal />
            </>
        )
    }
}