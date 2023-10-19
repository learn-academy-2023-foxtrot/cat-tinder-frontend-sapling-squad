import React from "react";
import notFound from "../assets/notfound.png"
import "../App.css"

const NotFound = () => {
    return (
        <>
            <div>
                <img className="error-image"
                    alt="not-found"
                    src={notFound}
                />
            </div>
        </>
    )
}


export default NotFound