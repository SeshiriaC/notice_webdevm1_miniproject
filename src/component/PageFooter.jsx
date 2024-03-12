import React from "react";
import image from "../images/logo.png"

function PageFooter(){
    return (
        <footer>
            <div>
                <img src= {image} width="50px" alt="Notice logo" />
            </div>
            <div>
                <p>
                &copy; 2024 NOTICE. Tous droits réservés.
                </p>
            </div>
        </footer>
    )
}

export default PageFooter