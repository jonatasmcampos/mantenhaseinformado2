import React, { Component } from "react";
import Navbar from "./components/navigationBar/Navbar"
import Header from "./components/header/header"

export default class Main extends Component {
    render() {
        return (
            <>
                <Navbar />
                <Header />
            </>
        )
    }
}