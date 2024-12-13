import React from 'react'
import './Navbar.css'

function Navbar() {
    return (
        <div className="navBar">
            <div className="leftSection">

                <div className="title">Textify</div>
                <div className="home">Home</div>
            </div>
            <div className="rightSection">
                <div className="switchMode">

                </div>
                <div className="modeName">
                    White Mode
                </div>
            </div>
        </div>
    )
}

export default Navbar
