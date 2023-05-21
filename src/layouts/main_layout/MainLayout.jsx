import React from "react";
import "./MainLayout.css";

export function MainLayout (props) {

    return (

        <main>
            <div className={`layout ${ props.bg && props.bg }`}>
                {props.children}
            </div>
        </main>

    );
    
};