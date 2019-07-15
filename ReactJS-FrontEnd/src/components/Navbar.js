import React from 'react'

export default function Navbar() {
    
        return(
            // <!-- NavBar Component Code -->
            <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-4">
                <div className="container">
                    <a className="navbar-brand" href="/">
                        Defect Tracker System
                    </a>

                    <a className="navbar-brand"  id="style" href="/">
                        Project
                    </a>

                    <a className="navbar-brand"  id="style1" href="/moduleBoard">
                    Module
                    </a>

                    <a className="navbar-brand" id="style2" href="/defectBoard">
                    Defect
                    </a>

                     {/* <a  href="/"  >Project </a>
                     <a href="/moduleBoard"> Module</a>
                    <a href="/defectBoard"> Defect</a> */}
            
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
                        <span className="navbar-toggler-icon" />
                    </button>
                </div>
            </nav>
        )
    
}
 
 